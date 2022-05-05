// 二分查找法
// 两个参数（关键值，数组）如果关键值不在数组中就要打印出来在反之打印其所引值
// [0,1,2,3,4,5,6,7,8,9,10]
function binarySearch(key, arrs) {
    let mid = 0;
    let head = 0, food = arrs.length - 1;
    while (head <= food) {
        console.log(head, food)
        mid = head + (food - head) / 2
        mid = Math.round(mid);
        if (key < arrs[mid]) {
            food = mid - 1;
        } else if (key > arrs[mid]) {
            head = mid + 1;
        } else if (key == arrs[mid] || key == arrs[head] || key == arrs[food]) {
            /*(key = min)*/
            if (key == arrs[head]) {
                 mid = head;
            }
            if (key == arrs[food]) {
                mid = food;
            }
            break
        }
    }
    if (key == arrs[mid]) { return mid }
    else { return -1; }

}
//测试用例
var arrs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(12, arrs))