import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const languagePrompts = {
  javascript: 'JavaScript (Node.js compatible)',
  python: 'Python 3',
  cpp: 'C++17',
  java: 'Java 17'
};

const predefinedSolutions = {
  'Two Sum': {
    javascript: `// Time: O(n), Space: O(n)
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    python: `# Time: O(n), Space: O(n)
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
    cpp: `// Time: O(n), Space: O(n)
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (map.count(complement)) {
            return {map[complement], i};
        }
        map[nums[i]] = i;
    }
    return {};`,
    java: `// Time: O(n), Space: O(n)
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] {map.get(complement), i};
        }
        map.put(nums[i], i);
    }
    return new int[] {};`
  },
  'Valid Parentheses': {
    javascript: `// Time: O(n), Space: O(n)
function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}`,
    python: `# Time: O(n), Space: O(n)
def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    return len(stack) == 0`,
    cpp: `// Time: O(n), Space: O(n)
bool isValid(string s) {
    stack<char> st;
    unordered_map<char, char> map = {{')','('}, { '}','{' }, { ']','[' }};
    for (char c : s) {
        if (map.count(c)) {
            if (st.empty() || st.top() != map[c]) return false;
            st.pop();
        } else {
            st.push(c);
        }
    }
    return st.empty();
}`,
    java: `// Time: O(n), Space: O(n)
public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    Map<Character, Character> map = Map.of(')', '(', '}', '{', ']', '[');
    for (char c : s.toCharArray()) {
        if (map.containsKey(c)) {
            if (stack.isEmpty() || stack.pop() != map.get(c)) return false;
        } else {
            stack.push(c);
        }
    }
    return stack.isEmpty();
}`
  },
  'Reverse Linked List': {
    javascript: `// Time: O(n), Space: O(1)
function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
    python: `# Time: O(n), Space: O(1)
def reverseList(head):
    prev = None
    curr = head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev`,
    cpp: `// Time: O(n), Space: O(1)
ListNode* reverseList(ListNode* head) {
    ListNode* prev = NULL;
    ListNode* curr = head;
    while (curr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
    java: `// Time: O(n), Space: O(1)
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`
  }
};

export async function generateSolution(questionTitle, language = 'javascript') {
  const lang = languagePrompts[language] || 'JavaScript';
  
  if (predefinedSolutions[questionTitle] && predefinedSolutions[questionTitle][language]) {
    return {
      success: true,
      solution: predefinedSolutions[questionTitle][language],
      source: 'predefined'
    };
  }
  
  if (!GEMINI_API_KEY) {
    return {
      success: false,
      error: 'GEMINI_API_KEY not configured'
    };
  }
  
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `You are an expert programmer. Provide a clean, optimized solution for: ${questionTitle}

Generate solution in ${lang}.

Requirements:
1. Return ONLY the code with minimal comments
2. Include time and space complexity as a comment at the top
3. No markdown formatting, no code blocks - just raw code`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text().trim();
    
    text = text.replace(/```\w*\n?/g, '');
    text = text.replace(/```\n?$/g, '');
    
    return { success: true, solution: text, source: 'ai' };
  } catch (error) {
    console.error('Gemini API Error:', error.message);
    return { success: false, error: 'Failed to generate solution' };
  }
}
