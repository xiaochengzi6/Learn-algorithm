//现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。

// f(n) = f(n-1) + f(n-2)

function F(n){
  
  if(n < 2){
    return n
  }
  return F(n-1) + F(n-2)
}


// 缓存计算过的值 避免重复
function Fibonacci(n, memory = []) {
  if (n < 2) {
    return n;
  }
  if (!memory[n]) {
    memory[n] = Fibonacci(n - 1, memory) + Fibonacci(n - 2, memory);
  }
  return memory[n];
}

// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
// 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

// 思路：
// 跳三级台阶等于跳两级台阶的跳法+跳一级台阶的跳法。
// 跳四级台阶等于跳三级台阶的跳法+跳二级台阶的跳法。

// 0 1
// 1 1
// 2 2
// 3 3
// 4 5
function h (n) {
  if(n < 2) {return 1}
  return f(n-1) + f(n-2)
}

function h(n){
  let a = 1, b = 1, sum;
  for(let i = 0; i<n; i++){
    sum = a+b;
    a=b;
    b=sum;
  }
  return a
}
// console.log(h(12))


// 一只青蛙一次可以跳上1级台阶，
// 也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

// 递归思路 运行时间：14ms 占用内存：9296k
// 因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
// 跳1级，剩下n-1级，则剩下跳法是f(n-1)
// 跳2级，剩下n-2级，则剩下跳法是f(n-2)
// 所以f(n)=f(n-1)+f(n-2)+…+f(1)
// 因为f(n-1)=f(n-2)+f(n-3)+…+f(1)
// 所以f(n)=2*f(n-1)

function h (n){
  if (n == 0||n == 1) {
    return 1;
  }else{
    return 2*h(n-1)
  }
}
console.log(h(12))

// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

// 假设有8个块
// 第1块竖着放，后面还剩7块，共f(7)种方法。
// 第1块横着放，后面还剩6块，共f(6)种方法。
function rectCover(n)
{
    if(n<=2){
        return n;
    }
    let i = 2;
    let pre = 1;
    let current = 2;
    let result = 0;
    while(i++ < n){
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}
