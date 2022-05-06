// 统计一个数字在排序数组中出现的次数。
// 1.直接遍历数组，判断前后的值是否相同，找到元素开始位置和结束位置，时间复杂度O(n)
// 2.使用二分查找找到目标值，在向前向后遍历，找到所有的数，比上面略优，时间复杂度也是O(n)

// 3.使用二分查找分别找到第一个目标值出现的位置和最后一个位置，时间复杂度O(logn)
//  找到第一次和最后一次出现的位置我们只需要对上面的代码进行稍加的变形
//  第一次位置：找到目标值，并且前一位的数字和当前值不相等
//  最后一次位置：找到目标值，并且后一位的数字和当前值不相等

// 思路：排序数组都是按照大小来承载的 所以需要判断找到值后前一个位置或者后一个位置是否与要找的值相等
// 首先是使用了 二分查找法 这里要对其做出一定的修改

// 基本的二分查找法的使用
// data: 要查找的数据， arr: 数组， start: 初始值， end: 结束值；
function fiend (data, arr, start, end){
  if(arr.length === 0) return -1;
  if(start> end){return -1}
  let min = Math.floor((start+end)/2);
  if(data === arr[min]){
    return min
  }else if(data > arr[min]){
    fiend(data, arr, min + 1, end)
  }else{
    fiend(data, arr, start, min - 1)
  }
}


// 算法详细：
function getNumberOfK (arr, k) {
  if(arr && arr.length == 0 && k != null) return -1;
  const fist = getFirstK(k, arr, 0, arr.length-1);
  const last = getLastK(k, arr, 0, arr.length-1);
  if (fist != -1 && last != -1) {
    return last - fist + 1;
  }
  return 0;
}

// 向前查
function getFirstK(k, arr, start, end){
  if(start > end) {return -1}
  const min = Math.floor((start + end)/2);
  if(arr[min] > k){
    // 中间值大于 k 结束值就会往前推进
    return getFirstK(k, arr, start, min -1)
  }else if(arr[min] == k){
    if(arr[min-1] !== k ){
      return min;
    }else{
      getFirstK(k, arr, start, min - 1)
    }
  }else{
     // 中间值小于 就让初始值为 min + 1
    return getFirstK(k, arr, min + 1, end);
  }
}

// 向后查
function getLastK(k, arr, start, end){
  if(start > end) {return -1}
  const min = Math.floor((start + end)/2);
  if(arr[min] > k){
    // 中间值大于 k 结束值就会往前推进
    return getLastK(k, arr, start , min - 1)
  }else if(arr[min] == k){
    if(arr[min+1] !== k ){
      return min;
    }else{
      getLastK(k, arr, min + 1, end)
    }
  }else{
    // 中间值小于 就让初始值为 min + 1
    return getLastK(k, arr, min + 1, end);
  }
}