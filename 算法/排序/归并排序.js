// 利用归并的思想实现的排序方法。
// 该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。（分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。
// 将已有序的子序列合并，得到完全有序的序列
// 即先使每个子序列有序，再使子序列段间有序
// 若将两个有序表合并成一个有序表，称为二路归并

// foo
// 分割：
// 将数组从中点进行分割，分为左、右两个数组
// 递归分割左、右数组，直到数组长度小于2

// 归并：
// 如果需要合并，那么左右两数组已经有序了。
// 创建一个临时存储数组temp，比较两数组第一个元素，将较小的元素加入临时数组
// 若左右数组有一个为空，那么此时另一个数组一定大于temp中的所有元素，直接将其所有元素加入temp

function mergeSort(array){
  if(array.length < 2){
    return array
  }
  const mid = Math.floor(array.length/2);
  const front = array.slice(0, mid);
  const end = array.slice(mid)

  return merge(mergeSort(front), mergeSort(end));
}

function merge(front, end){
  const temp = [];
  while(front.length && end.length){
    if(front[0]<end[0]){
      temp.push(front.shift())
    }else{
      temp.push(end.shift())
    }
  }
  while (front.length) {
    temp.push(front.shift());
  }
  while (end.length) {
    temp.push(end.shift());
  }
  return temp;
}


// 测试
// let a = [4,5,8,2,3,9,7,1]
// console.log(mergeSort(a))

// 缺点：空间复杂度高

function mergegSort(array, left, right, temp){
  if(left < right){
    const mid = Math.floor((left+right)/2);
    mergeSort(array, left, mid, temp);
    mergeSort(array, mid+1, right, temp);
    merge(array, left, rigth, temp);
  }

  return array;
}

function merge(array, left, right, temp){
  const mid = Math.floor((left+right)/2);
  // leftIndex 表示左边数组的索引
  let leftIndex = left;
  // rightIndex 表示右边数组的索引 
  let rightIndex = mid +1;
  let tempIndex = 0;

  // 将小的一方优先存有到temp数组中
  while(leftIndex <= mid && rightIndex <= right){
    if(array[leftIndex] < array[rightIndex]){
      temp[tempIndex++] = array[leftIndex++]
    }else{
      temp[tempIndex++] = array[rightIndex++]
    }
  }
  // 剩余的再存放到temp中
  while (leftIndex <= mid) {
    temp[tempIndex++] = array[leftIndex++]
  }
  while (rightIndex <= right) {
    temp[tempIndex++] = array[rightIndex++]
  }
  tempIndex = 0;

  // 最后将排序后的数组temp放入到 array中
  for(let i = left; i<= right; i++){
    array[i] = temp[tempIndex++]
  }
}

// 时间复杂度：O(nlogn)
// 空间复杂度:O(n)
