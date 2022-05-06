// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 
// 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。
//  例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。

// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

// 思路：肯定不能直接遍历，失去了这道题的意义
// 旋转数组其实是由两个有序数组拼接而成的，因此我们可以使用二分法，只需要找到拼接点即可。
// 肯定不能直接遍历，失去了这道题的意义
// 旋转数组其实是由两个有序数组拼接而成的，因此我们可以使用二分法，只需要找到拼接点即可。

// (1)array[mid] > array[high]:
// 出现这种情况的array类似[3,4,5,6,0,1,2]，此时最小数字一定在mid的右边。 low = mid + 1

// (2)array[mid] == array[high]:
// 出现这种情况的array类似 [1,0,1,1,1]或者[1,1,1,0,1]，此时最小数字不好判断在mid左边 还是右边,这时只好一个一个试 。 high = high - 1

// (3)array[mid] < array[high]:
// 出现这种情况的array类似[2,2,3,4,5,6,6],此时最小数字一定就是array[mid]或者在mid的左 边。因为右边必然都是递增的。 high = mid

function fiend(arr) {
  let len = arr.length;
  if (len === 0 ) return 0;
  let low = 0, hei = len -1;
  
  while(len < height) {
    let min = low + Math.floor((len + hei )/ 2)
    if(arr[min] > arr[hei]){
      low = mid + 1;
    }else if (arr[min] == arr[hei]){
      hei = hei - 1;
    }else {
      hei = mid;
    }
  }
  return arr[low]
}

// 二分查找法
// data 相当于是数组的最后一个值
function binarySearch(data, arr, start, end) {
  if (start > end) {
      return -1;
  }
  var mid = Math.floor((end + start) / 2);
  if (data == arr[mid]) {
      return binarySearch(data, arr, start, mid - 1)
  } else if (data < arr[mid]) {
      return binarySearch(data, arr, mid + 1, end);
  } else {
      return binarySearch(data, arr, start, mid);
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