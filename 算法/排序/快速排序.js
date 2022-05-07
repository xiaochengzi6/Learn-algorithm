// 快速排序：通过一趟排序将要排序的数据分割成独立的两部分，
// 其中一部分的所有数据比另一部分的所有数据要小，
// 再按这种方法对这两部分数据分别进行快速排序，
// 整个排序过程可以递归进行，使整个数据变成有序序列。

// 实现步骤：

// 选择一个基准元素target（一般选择第一个数）
// 将比target小的元素移动到数组左边，比target大的元素移动到数组右边
// 分别对target左侧和右侧的元素进行快速排序
// 从上面的步骤中我们可以看出，快速排序也利用了分治的思想（将问题分解成一些小问题递归求解）

function traverse(array){
  if(array.length < 2){
    return array;
  }
  const target = array[0];
  const left = [];
  const right = [];
  for(let i = 1; i<array.length; i++){
    if(array[i] < target){
      left.push(array[i])
    }
    else{
      right.push(array[i])
    }
  }
  return traverse(left).concat([target], traverse(right));
}

// 优化版
// 记录一个索引l从数组最左侧开始，记录一个索引r从数组右侧开始
// 在l<r的条件下，找到右侧小于target的值array[r]，并将其赋值到array[l]
// 在l<r的条件下，找到左侧大于target的值array[l]，并将其赋值到array[r]
// 这样让l=r时，左侧的值全部小于target，右侧的值全部小于target，将target放到该位置


// 有问题--成不了--在改需要添加数组
function quickSort(array, start, end) {
  if (end - start < 1) {
    return;
  }
  const target = array[start];
  let l = start;
  let r = end;
  while (l < r) {
    while (l < r && array[r] >= target) {
      r--;
    }
    array[l] = array[r];
    while (l < r && array[l] < target) {
      l++;
    }
    array[r] = array[l];
  }
  array[l] = target;
  quickSort(array, start, l - 1);
  quickSort(array, r + 1, end);
  return array;
}
// let a = [4, 6, 8, 1]
// console.log(quickSort(a, 0, 4))