// 每次循环选取一个最小的数字放到前面的有序序列中。

let a = [2, 56, 3, 7, 19, 6, 16, 11, 34, 36];
function traverse(array) {
  for (let j = 0; j < array.length; j++) {
    let minIndex = j
    for (let i = j+1; i < array.length; i++) {
      // 每次找最小的
      if (array[i] < array[minIndex]) {
        minIndex = i
      }
    }
    [array[minIndex], array[j]]=[array[j], array[minIndex]]
  }
}

// 时间复杂度：O(n2)

// 空间复杂度:O(1)