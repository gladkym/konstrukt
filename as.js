// const array = [2, 3, 1, 2, 3, 5];
// getLongestSubsequenceCount([1, 2, 3, 0, 4, 5, 6, 7])

function getLongestSubsequenceCount(arr) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      count++;
    } else {
      if (count > maxCount) {
        maxCount = count;
        count = 0;
      }
    }
  }
  return maxCount === 0 ? 0 : maxCount + 1
}

console.log(getLongestSubsequenceCount([2, 3, 1, 2, 7, 5]))
console.log(getLongestSubsequenceCount([2, 3, 1, 2, 3, 5]))
console.log(getLongestSubsequenceCount([2, 4, 8, 2, 7, 5]))
console.log(getLongestSubsequenceCount([]))
console.log(getLongestSubsequenceCount([1, 2, 3, 0, 4, 5, 6, 7]))