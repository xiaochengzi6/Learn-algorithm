// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

// 123
// 456
// 789

// 自己实现的
function getKey(arr, key, boolean) {
  boolean = boolean || false;
  let current = arr[arr.length - 1][0];
  if (current > key) {
    // 向上查找
    boolean = getKey(arr.slice(0, arr.length - 1), key);
  } else if (current < key) {
    // 向右查找
    for (let i = 0; i < arr[arr.length - 1].length; i++) {
      if (key == arr[arr.length - 1][i]) {
        return true;
      }
    }
  } else {
    // 返回
    return true;
  }
  return boolean;
}

// // 测试
// let a = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(getKey(a, 8));

// 更加优异的算法
function find(target, arr) {
  let i = arr.length - 1;
  let j = 0;
  compart(target, arr, i, j);
}
function compart(target, arr, i, j) {
  if (arr[i] || arr[i][j] === undefined) {
    return false;
  }
  const temp = arr[i][j];
  if (target > temp) {
    return compart(target, arr, i, j + 1);
  } else if (target < temp) {
    return compart(target, arr, i + 1, j);
  } else if (target === temp) {
    return true;
  }
}

// 正常的二分查找法
function binarySearch(data, arr, start, end) {
  if (start > end) {
      return -1;
  }
  var mid = Math.floor((end + start) / 2);
  if (data == arr[mid]) {
      return mid;
  } else if (data < arr[mid]) {
      return binarySearch(data, arr, start, mid - 1);
  } else {
      return binarySearch(data, arr, mid + 1, end);
  }
}