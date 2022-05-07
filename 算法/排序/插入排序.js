// 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。

// 插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。

function traverse(arr) {
  let stact = [];
  let current = arr.shift();
  stact.push(current);
  while (arr.length > 0) {
    current = arr.shift();
    for (let i = stact.length - 1; i >= 0; i--) {
      if (stact[i] < current) {
        stact.splice(i + 1, 0, current);
        break;
      }
    }
  }
  return stact;
}

// 测试
// let a = [5, 33, 6, 8, 78, 56, 32];
// console.log(traverse(a));

// 时间复杂度 O(n^2)
// 空间复杂度 O(n)

function traverse(arr) {
  for (let i = 0; i < arr.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[target] < arr[j]) {
        // 小值往后靠
        [arr[target], arr[j]] = [arr[j], arr[target]];
        // 为了依次和前面的值比较
        target = j;
      }else{
        break
      }
    }
  }
  return arr;
}
// let a = [5, 33, 6, 8, 78, 56, 32];
// console.log(traverse(a));

// 时间复杂度 O(n^2)
// 空间复杂度 O(1)