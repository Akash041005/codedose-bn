export const questions = [
  {
    title: "Two Sum",
    link: "https://leetcode.com/problems/two-sum/",
    platform: "LeetCode",
    difficulty: "Easy",
    solutions: {
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
    }
  },
  {
    title: "Valid Parentheses",
    link: "https://leetcode.com/problems/valid-parentheses/",
    platform: "LeetCode",
    difficulty: "Easy",
    solutions: {
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
    }
  },
  {
    title: "Reverse Linked List",
    link: "https://leetcode.com/problems/reverse-linked-list/",
    platform: "LeetCode",
    difficulty: "Easy",
    solutions: {
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
  },
  {
    title: "Maximum Subarray",
    link: "https://leetcode.com/problems/maximum-subarray/",
    platform: "LeetCode",
    difficulty: "Medium",
    solutions: {
      javascript: `// Time: O(n), Space: O(1) - Kadane's Algorithm
function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}`,
      python: `# Time: O(n), Space: O(1)
def maxSubArray(nums):
    max_sum = nums[0]
    current_sum = nums[0]
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    return max_sum`,
      cpp: `// Time: O(n), Space: O(1)
int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}`,
      java: `// Time: O(n), Space: O(1)
public int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    for (int i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`
    }
  },
  {
    title: "Merge Two Sorted Lists",
    link: "https://leetcode.com/problems/merge-two-sorted-lists/",
    platform: "LeetCode",
    difficulty: "Easy",
    solutions: {
      javascript: `// Time: O(n+m), Space: O(1)
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(-1);
  let curr = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}`,
      python: `# Time: O(n+m), Space: O(1)
def mergeTwoLists(l1, l2):
    dummy = ListNode(-1)
    curr = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next`,
      cpp: `// Time: O(n+m), Space: O(1)
ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(-1);
    ListNode* curr = &dummy;
    while (l1 && l2) {
        if (l1->val <= l2->val) {
            curr->next = l1;
            l1 = l1->next;
        } else {
            curr->next = l2;
            l2 = l2->next;
        }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}`,
      java: `// Time: O(n+m), Space: O(1)
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(-1);
    ListNode curr = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 != null ? l1 : l2;
    return dummy.next;
}`
    }
  },
  {
    title: "Longest Substring Without Repeating Characters",
    link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    platform: "LeetCode",
    difficulty: "Medium",
    solutions: {
      javascript: `// Time: O(n), Space: O(min(n, m))
function lengthOfLongestSubstring(s) {
  const set = new Set();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
      python: `# Time: O(n), Space: O(min(n, m))
def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_len = 0
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len`,
      cpp: `// Time: O(n), Space: O(min(n, m))
int lengthOfLongestSubstring(string s) {
    unordered_set<char> set;
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        while (set.count(s[right])) {
            set.erase(s[left]);
            left++;
        }
        set.insert(s[right]);
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
      java: `// Time: O(n), Space: O(min(n, m))
public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0, maxLen = 0;
    for (int right = 0; right < s.length(); right++) {
        while (set.contains(s.charAt(right))) {
            set.remove(s.charAt(left));
            left++;
        }
        set.add(s.charAt(right));
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`
    }
  },
  {
    title: "Number of Islands",
    link: "https://leetcode.com/problems/number-of-islands/",
    platform: "LeetCode",
    difficulty: "Medium",
    solutions: {
      javascript: `// Time: O(m*n), Space: O(m*n)
function numIslands(grid) {
  if (!grid || grid.length === 0) return 0;
  let count = 0;
  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') return;
    grid[i][j] = '0';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
}`,
      python: `# Time: O(m*n), Space: O(m*n)
def numIslands(grid):
    if not grid:
        return 0
    count = 0
    def dfs(i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        dfs(i+1, j); dfs(i-1, j)
        dfs(i, j+1); dfs(i, j-1)
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == '1':
                count += 1
                dfs(i, j)
    return count`,
      cpp: `// Time: O(m*n), Space: O(m*n)
int numIslands(vector<vector<char>>& grid) {
    int count = 0;
    function<void(int,int)> dfs = [&](int i, int j) {
        if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() || grid[i][j] == '0') return;
        grid[i][j] = '0';
        dfs(i+1, j); dfs(i-1, j);
        dfs(i, j+1); dfs(i, j-1);
    };
    for (int i = 0; i < grid.size(); i++)
        for (int j = 0; j < grid[0].size(); j++)
            if (grid[i][j] == '1') {
                count++;
                dfs(i, j);
            }
    return count;
}`,
      java: `// Time: O(m*n), Space: O(m*n)
public int numIslands(char[][] grid) {
    int count = 0;
    for (int i = 0; i < grid.length; i++)
        for (int j = 0; j < grid[0].length; j++)
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j);
            }
    return count;
}
void dfs(char[][] grid, int i, int j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') return;
    grid[i][j] = '0';
    dfs(grid, i+1, j); dfs(grid, i-1, j);
    dfs(grid, i, j+1); dfs(grid, i, j-1);
}`
    }
  },
  {
    title: "Binary Tree Level Order Traversal",
    link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    platform: "LeetCode",
    difficulty: "Medium",
    solutions: {
      javascript: `// Time: O(n), Space: O(n)
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const level = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}`,
      python: `# Time: O(n), Space: O(n)
from collections import deque
def levelOrder(root):
    if not root: return []
    result, queue = [], deque([root])
    while queue:
        level, size = [], len(queue)
        for _ in range(size):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result`,
      cpp: `// Time: O(n), Space: O(n)
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int size = q.size();
        vector<int> level;
        for (int i = 0; i < size; i++) {
            TreeNode* node = q.front(); q.pop();
            level.push_back(node->val);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}`,
      java: `// Time: O(n), Space: O(n)
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.add(root);
    while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> level = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            if (node.left != null) queue.add(node.left);
            if (node.right != null) queue.add(node.right);
        }
        result.add(level);
    }
    return result;
}`
    }
  },
  {
    title: "Coin Change",
    link: "https://leetcode.com/problems/coin-change/",
    platform: "LeetCode",
    difficulty: "Medium",
    solutions: {
      javascript: `// Time: O(amount * n), Space: O(amount)
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
      python: `# Time: O(amount * n), Space: O(amount)
def coinChange(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1`,
      cpp: `// Time: O(amount * n), Space: O(amount)
int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i && dp[i - coin] != INT_MAX)
                dp[i] = min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}`,
      java: `// Time: O(amount * n), Space: O(amount)
public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i)
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}`
    }
  },
  {
    title: "Trapping Rain Water",
    link: "https://leetcode.com/problems/trapping-rain-water/",
    platform: "LeetCode",
    difficulty: "Hard",
    solutions: {
      javascript: `// Time: O(n), Space: O(1)
function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) leftMax = height[left];
      else water += leftMax - height[left];
      left++;
    } else {
      if (height[right] >= rightMax) rightMax = height[right];
      else water += rightMax - height[right];
      right--;
    }
  }
  return water;
}`,
      python: `# Time: O(n), Space: O(1)
def trap(height):
    left, right = 0, len(height) - 1
    left_max, right_max = 0, 0
    water = 0
    while left < right:
        if height[left] < height[right]:
            left_max = max(height[left], left_max)
            water += left_max - height[left]
            left += 1
        else:
            right_max = max(height[right], right_max)
            water += right_max - height[right]
            right -= 1
    return water`,
      cpp: `// Time: O(n), Space: O(1)
int trap(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}`,
      java: `// Time: O(n), Space: O(1)
public int trap(int[] height) {
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}`
    }
  },
  {
    title: "Median of Two Sorted Arrays",
    link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    platform: "LeetCode",
    difficulty: "Hard",
    solutions: {
      javascript: `// Time: O(log(m+n)), Space: O(1)
function findMedianSortedArrays(nums1, nums2) {
  const findKth = (k) => {
    let i = 0, j = 0;
    while (true) {
      if (i === nums1.length) return nums2[j + k - 1];
      if (j === nums2.length) return nums1[i + k - 1];
      if (k === 1) return Math.min(nums1[i], nums2[j]);
      const mid1 = Math.min(i + k/2 - 1, nums1.length - 1);
      const mid2 = Math.min(j + k/2 - 1, nums2.length - 1);
      if (nums1[mid1] <= nums2[mid2]) {
        k -= mid1 - i + 1;
        i = mid1 + 1;
      } else {
        k -= mid2 - j + 1;
        j = mid2 + 1;
      }
    }
  };
  const m = nums1.length, n = nums2.length;
  const mid = (m + n + 1) / 2;
  if ((m + n) % 2 === 0) {
    return (findKth(Math.floor(mid)) + findKth(Math.ceil(mid))) / 2;
  }
  return findKth(mid);
}`,
      python: `# Time: O(log(m+n)), Space: O(1)
def findMedianSortedArrays(nums1, nums2):
    def find_kth(k):
        i = j = 0
        while True:
            if i == len(nums1): return nums2[j + k - 1]
            if j == len(nums2): return nums1[i + k - 1]
            if k == 1: return min(nums1[i], nums2[j])
            mid1, mid2 = min(i + k//2 - 1, len(nums1) - 1), min(j + k//2 - 1, len(nums2) - 1)
            if nums1[mid1] <= nums2[mid2]:
                k -= mid1 - i + 1
                i = mid1 + 1
            else:
                k -= mid2 - j + 1
                j = mid2 + 1
    m, n = len(nums1), len(nums2)
    mid = (m + n + 1) // 2
    if (m + n) % 2 == 0:
        return (find_kth(mid) + find_kth(mid + 1)) / 2
    return find_kth(mid)`,
      cpp: `// Time: O(log(m+n)), Space: O(1)
double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    auto findKth = [&](int k) {
        int i = 0, j = 0;
        while (true) {
            if (i == nums1.size()) return nums2[j + k - 1];
            if (j == nums2.size()) return nums1[i + k - 1];
            if (k == 1) return min(nums1[i], nums2[j]);
            int mid1 = min(i + k/2 - 1, (int)nums1.size() - 1);
            int mid2 = min(j + k/2 - 1, (int)nums2.size() - 1);
            if (nums1[mid1] <= nums2[mid2]) {
                k -= mid1 - i + 1;
                i = mid1 + 1;
            } else {
                k -= mid2 - j + 1;
                j = mid2 + 1;
            }
        }
    };
    int m = nums1.size(), n = nums2.size();
    int mid = (m + n + 1) / 2;
    if ((m + n) % 2 == 0)
        return (findKth(mid) + findKth(mid + 1)) / 2.0;
    return findKth(mid);
}`,
      java: `// Time: O(log(m+n)), Space: O(1)
public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    int m = nums1.length, n = nums2.length;
    int mid = (m + n + 1) / 2;
    if ((m + n) % 2 == 0)
        return (getKth(nums1, nums2, mid) + getKth(nums1, nums2, mid + 1)) / 2.0;
    return getKth(nums1, nums2, mid);
}
private int getKth(int[] nums1, int[] nums2, int k) {
    int i = 0, j = 0;
    while (true) {
        if (i == nums1.length) return nums2[j + k - 1];
        if (j == nums2.length) return nums1[i + k - 1];
        if (k == 1) return Math.min(nums1[i], nums2[j]);
        int mid1 = Math.min(i + k/2 - 1, nums1.length - 1);
        int mid2 = Math.min(j + k/2 - 1, nums2.length - 1);
        if (nums1[mid1] <= nums2[mid2]) {
            k -= mid1 - i + 1;
            i = mid1 + 1;
        } else {
            k -= mid2 - j + 1;
            j = mid2 + 1;
        }
    }
}`
    }
  },
  {
    title: "LRU Cache",
    link: "https://leetcode.com/problems/lru-cache/",
    platform: "LeetCode",
    difficulty: "Medium",
    solutions: {
      javascript: `// Time: O(1), Space: O(capacity)
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  put(key, val) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, val);
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}`,
      python: `# Time: O(1), Space: O(capacity)
from collections import OrderedDict
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = OrderedDict()
    def get(self, key):
        if key not in self.cache: return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    def put(self, key, val):
        if key in self.cache: self.cache.move_to_end(key)
        self.cache[key] = val
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`,
      cpp: `// Time: O(1), Space: O(capacity)
class LRUCache {
    int capacity;
    list<pair<int,int>> cache;
    unordered_map<int, list<pair<int,int>>::iterator> map;
public:
    LRUCache(int capacity): capacity(capacity) {}
    int get(int key) {
        if (!map.count(key)) return -1;
        cache.splice(cache.begin(), cache, map[key]);
        return map[key]->second;
    }
    void put(int key, int val) {
        if (map.count(key)) cache.erase(map[key]);
        cache.push_front({key, val});
        map[key] = cache.begin();
        if (cache.size() > capacity) {
            map.erase(cache.back().first);
            cache.pop_back();
        }
    }
}`,
      java: `// Time: O(1), Space: O(capacity)
class LRUCache {
    int capacity;
    LinkedHashMap<Integer, Integer> cache;
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new LinkedHashMap<>(capacity, 0.75f, true) {
            protected boolean removeEldestEntry(Map.Entry eldest) {
                return size() > LRUCache.this.capacity;
            }
        };
    }
    public int get(int key) { return cache.getOrDefault(key, -1); }
    public void put(int key, int val) { cache.put(key, val); }
}`
    }
  },
  {
    title: "Subarray with given sum",
    link: "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0",
    platform: "GeeksforGeeks",
    difficulty: "Easy",
    solutions: {
      javascript: `// Time: O(n), Space: O(1)
function subarraySum(arr, n, target) {
  let sum = arr[0];
  let start = 0;
  for (let i = 1; i <= n; i++) {
    while (sum > target && start < i - 1) {
      sum -= arr[start];
      start++;
    }
    if (sum === target) return [start + 1, i];
    if (i < n) sum += arr[i];
  }
  return [-1];
}`,
      python: `# Time: O(n), Space: O(1)
def subarraySum(arr, n, target):
    sum = arr[0]
    start = 0
    for i in range(1, n + 1):
        while sum > target and start < i - 1:
            sum -= arr[start]
            start += 1
        if sum == target:
            return [start + 1, i]
        if i < n:
            sum += arr[i]
    return [-1]`,
      cpp: `// Time: O(n), Space: O(1)
vector<int> subarraySum(vector<int>& arr, int target) {
    int sum = arr[0], start = 0;
    for (int i = 1; i <= arr.size(); i++) {
        while (sum > target && start < i - 1) {
            sum -= arr[start];
            start++;
        }
        if (sum == target) return {start + 1, i};
        if (i < arr.size()) sum += arr[i];
    }
    return {-1};
}`,
      java: `// Time: O(n), Space: O(1)
static ArrayList<Integer> subarraySum(int[] arr, int target) {
    ArrayList<Integer> res = new ArrayList<>();
    int sum = arr[0], start = 0;
    for (int i = 1; i <= arr.length; i++) {
        while (sum > target && start < i - 1) {
            sum -= arr[start];
            start++;
        }
        if (sum == target) {
            res.add(start + 1);
            res.add(i);
            return res;
        }
        if (i < arr.length) sum += arr[i];
    }
    res.add(-1);
    return res;
}`
    }
  },
  {
    title: "Find all pairs with a given sum",
    link: "https://practice.geeksforgeeks.org/problems/find-all-pairs-with-a-given-sum/0",
    platform: "GeeksforGeeks",
    difficulty: "Medium",
    solutions: {
      javascript: `// Time: O(n), Space: O(n)
function allPairs(A, B, N, M, X) {
  const setB = new Set(B);
  const result = [];
  for (let num of A) {
    const complement = X - num;
    if (setB.has(complement)) {
      result.push([num, complement]);
    }
  }
  return result.length > 0 ? result.sort((a,b) => a[0]-b[0]) : [];
}`,
      python: `# Time: O(n+m), Space: O(m)
def findPairs(arr1, arr2, target):
    set_arr2 = set(arr2)
    result = [(x, target-x) for x in arr1 if target-x in set_arr2]
    return sorted(result) if result else []`,
      cpp: `// Time: O(n+m), Space: O(m)
vector<pair<int,int>> findPairs(vector<int> A, vector<int> B, int X) {
    unordered_set<int> setB(B.begin(), B.end());
    vector<pair<int,int>> result;
    for (int num : A) {
        if (setB.count(X - num))
            result.push_back({num, X - num});
    }
    sort(result.begin(), result.end());
    return result;
}`,
      java: `// Time: O(n+m), Space: O(m)
static ArrayList<Pair> findPairs(int[] A, int[] B, int X) {
    ArrayList<Pair> result = new ArrayList<>();
    HashSet<Integer> setB = new HashSet<>();
    for (int num : B) setB.add(num);
    for (int num : A) {
        if (setB.contains(X - num))
            result.add(new Pair(num, X - num));
    }
    Collections.sort(result, (a, b) -> a.first - b.first);
    return result;
}`
    }
  },
  {
    title: "Detect Loop in linked list",
    link: "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
    platform: "GeeksforGeeks",
    difficulty: "Easy",
    solutions: {
      javascript: `// Time: O(n), Space: O(1)
function detectLoop(head) {
  let slow = head, fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`,
      python: `# Time: O(n), Space: O(1)
def detectLoop(head):
    slow = fast = head
    while slow and fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
      cpp: `// Time: O(n), Space: O(1)
bool detectLoop(Node* head) {
    Node *slow = head, *fast = head;
    while (slow && fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
      java: `// Time: O(n), Space: O(1)
boolean detectLoop(Node head) {
    Node slow = head, fast = head;
    while (slow != null && fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}`
    }
  },
  {
    title: "Find Remainder",
    link: "https://www.codechef.com/problems/FLOW002",
    platform: "CodeChef",
    difficulty: "Easy",
    solutions: {
      javascript: `// Time: O(1), Space: O(1)
const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8').trim().split('\\n');
const t = parseInt(data[0]);
let output = '';
for (let i = 1; i <= t; i++) {
  const [a, b] = data[i].split(' ').map(Number);
  output += (a % b) + '\\n';
}
console.log(output.trim());`,
      python: `# Time: O(1), Space: O(1)
t = int(input())
for _ in range(t):
    a, b = map(int, input().split())
    print(a % b)`,
      cpp: `// Time: O(1), Space: O(1)
#include <bits/stdc++.h>
using namespace std;
int main() {
    int t; cin >> t;
    while (t--) {
        int a, b; cin >> a >> b;
        cout << a % b << endl;
    }
    return 0;
}`,
      java: `// Time: O(1), Space: O(1)
import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println(a % b);
        }
    }
}`
    }
  },
  {
    title: "Sum of Digits",
    link: "https://www.codechef.com/problems/FLOW006",
    platform: "CodeChef",
    difficulty: "Easy",
    solutions: {
      javascript: `// Time: O(n), Space: O(1)
function digitSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}`,
      python: `# Time: O(n), Space: O(1)
def sumOfDigits(n):
    return sum(int(d) for d in str(n))`,
      cpp: `// Time: O(n), Space: O(1)
int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}`,
      java: `// Time: O(n), Space: O(1)
static int sumOfDigits(int n) {
    int sum = 0;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}`
    }
  }
];

export function getRandomQuestions(count = 2) {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
