// 广度优先的算法主要使用队列来实现的
// 这里按照二叉树的例子作为讲解
// 1.创建一个队列
// 2、保存根节点的两个子节点
// 3、弹出一个子节点并在队列中继续保存子节点的子节点
// 4、依次这样就可以按照一层一层的关系打印下去

// 题目：从上往下打印出二叉树的每个节点，同层节点从左至右打印。
// BFC
function traverse(tree) {
  let queue = [];
  let result = [];
  if (tree) {
    queue.push(tree);
    let current;
    while (queue.length) {
      current = queue.shift();
      if (current.leftNode) {
        queue.push(current.leftNode);
      }
      if (current.rightNode) {
        queue.push(current.rightNode);
      }
      result.push(current.node);
    }
    return result;
  }
}

// 题目：从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
// 这里感觉解法很多，比较特别的就是使用 二维数组 每一行都是同一行节点 每一个列都是往下的深度
// 或者使用标记法在数组中保存某一个标记比如 '\n'

function traverse(tree) {
  if (!tree) return [];
  let queue = [];
  let result = [];
  // 当前剩余
  let currentNumber = 1;
  let childrent = 0;

  let template = [];
  queue.push(tree);
  let current;
  while (queue.length > 0) {
    current = queue.shift();
    if (current.leftNode) {
      queue.push(current.leftNode);
      childrent++;
    }
    if (current.rightNode) {
      queue.push(current.rightNode);
      childrent++;
    }
    template.push(current);
    currentNumber--;
    // 重置
    if (currentNumber == 0) {
      currentNumber = childrent;
      childrent = 0;
      template = [];
    }
  }
  return result;
}

// 题目：按之字形顺序打印二叉树
// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，
// 第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

// 思路：
// 奇数从左到右，偶数从右到左
function traverse(tree) {
  if (!tree) return;
  let result = [];
  let oddStack = [];
  let eventStack = [];
  let temp = [];
  let current;
  oddStack.push(tree);
  while (addStack.length > 0 || eventStack.length > 0) {
    // 奇数循环
    while (addStack.length > 0) {
      current = oddStack.pop();
      temp.push(current);
      if (current.leftNode) {
        eventStack.push(current.leftNode);
      }
      if (current.rightNode) {
        eventStack.push(current.rightNode);
      }
      if (temp.length > 0) {
        result.push(temp);
        temp = [];
      }
    }

    // 偶数循环
    while (eventStack.length > 0) {
      current = eventStack.pop();
      temp.push(current);
      if (current.rightNode) {
        eventStack.push(current.rightNode);
      }
      if (current.leftNode) {
        eventStack.push(current.leftNode);
      }

      if (temp.length > 0) {
        result.push(temp);
        temp = [];
      }
    }
  }
  return result;
}

// 改进版
// 这里同样可使用上面2题的两个变量来记录层数，只需要一个栈即可，但是代码不如两个栈容易理解。


