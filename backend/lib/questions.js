export const questions = [
  { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", platform: "LeetCode", difficulty: "Easy" },
  { title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", platform: "LeetCode", difficulty: "Easy" },
  { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", platform: "LeetCode", difficulty: "Easy" },
  { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", platform: "LeetCode", difficulty: "Easy" },
  { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", platform: "LeetCode", difficulty: "Medium" },
  { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", platform: "LeetCode", difficulty: "Medium" },
  { title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", platform: "LeetCode", difficulty: "Medium" },
  { title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", platform: "LeetCode", difficulty: "Medium" },
  { title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", platform: "LeetCode", difficulty: "Medium" },
  { title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", platform: "LeetCode", difficulty: "Medium" },
  { title: "Coin Change", link: "https://leetcode.com/problems/coin-change/", platform: "LeetCode", difficulty: "Medium" },
  { title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", platform: "LeetCode", difficulty: "Medium" },
  { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", platform: "LeetCode", difficulty: "Hard" },
  { title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", platform: "LeetCode", difficulty: "Hard" },
  { title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", platform: "LeetCode", difficulty: "Hard" },
  { title: "Subarray with given sum", link: "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0", platform: "GeeksforGeeks", difficulty: "Easy" },
  { title: "Detect Loop in linked list", link: "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1", platform: "GeeksforGeeks", difficulty: "Easy" },
  { title: "Find all pairs with a given sum", link: "https://practice.geeksforgeeks.org/problems/find-all-pairs-with-a-given-sum/0", platform: "GeeksforGeeks", difficulty: "Medium" },
  { title: "Find Remainder", link: "https://www.codechef.com/problems/FLOW002", platform: "CodeChef", difficulty: "Easy" },
  { title: "Sum of Digits", link: "https://www.codechef.com/problems/FLOW006", platform: "CodeChef", difficulty: "Easy" }
];

export function getRandomQuestions(count = 2) {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
