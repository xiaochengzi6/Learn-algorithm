// 遍历方式：
// 1、先序遍历
// 2、后续遍历
// 3、中序遍历

// tree: 二叉树
// tree.leftNode: 二叉树的左节点
// tree.rightNode: 二叉树的右节点
// tree.node 二叉树的数据

// 一、 给定一个二叉树，返回它的 中序遍历。
// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// 输出: [1,3,2]

// 递归实现
function traversal(tree, arr = []) {
  if (tree) {
    traversal(tree.leftNode, arr);
    arr.push(tree.node);
    traversal(tree.rightNode, arr);
  } else {
    return arr;
  }
}

// 迭代实现
function traversalTask(tree) {
  if (!tree) return;
  let stack = [];
  let result = [];
  let current = tree;
  while (current || stack.length > 0) {
    while (current) {
      // 根--->左
      stack.push(current);
      current = current.leftNode;
    }
    // 左--->根
    current = stack.pop();
    result.push(current.node);
    current = current.rightNode;
  }
  return result;
}

// 二、给定一个二叉树，返回它的 前序遍历。
// 示例:
// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// 输出: [1,2,3]

// 递归
function traverse(tree, arr = []) {
  if (tree) {
    arr.push(tree.node);
    traverse(tree.leftNode, arr);
    traverse(tree.rightNode, arr);
  } else {
    return arr;
  }
}

// 迭代
function traverseStack(tree) {
  if (tree) {
    let stack = [];
    let result = [];
    let current = tree;
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        result.push(current) // 保存左子树
        current = current.leftNode;
      }
      stack.pop();
      current = current.rightNode;
    }
    return result;
  }
}


// 三、给定一个二叉树，返回它的 后序 遍历。
// 示例:

// 输入: [1,null,2,3]  
//    1
//     \
//      2
//     /
//    3 
// 输出: [3,2,1]

// 递归
function traverse (tree, arr=[]){
  if(tree){
    traverse(tree.leftNode, arr)
    traverse(tree.rightNode, arr)
    arr.push(tree.node)
  }else{  
    return arr
  }
}

// 迭代
function traverseStack(tree){
  if(!tree) return;
  let stack = [];
  let result = [];
  let root = tree, current;
  current = current.leftNode;
  while(current || stack.length>0){
    while(current || stack.length > 0){
      stack.push(current)
      current = current.leftNode;
    }
    current = stack.pop()
    result.push(current);
    current = current.rightNode
  }
  result.push(root)
  return result;
}


// 四、
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
// 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

// 思路：
// 二叉搜索树是二分法找出来的 根据这个可以知道它的中序遍历是一个由小到大的数所以可以得到

// 1.后序遍历：分成三部分：最后一个节点为跟节点，第二部分为左子树的值比跟节点都小，第三部分为右子树的值比跟节点都大。
// 2.先检测左子树，左侧比跟节点小的值都判定为左子树。
// 3.除最后一个节点外和左子树外的其他值为右子树，右子树有一个比跟节点小，则返回false。
// 4.若存在，左、右子树，递归检测左、右子树是否复合规范。

// [5，3，7，2，4，6，8]
function VerifySquenceOfBST(sequence) {
  if (sequence && sequence.length > 0) {
    var root = sequence[sequence.length - 1]
    //这里很巧妙的设置了两个循环 用来判断 
    for (var i = 0; i < sequence.length - 1; i++) {
      if (sequence[i] > root) {
        break;
      }
    }
    console.log(i)
    for (let j = i; j < sequence.length - 1; j++) {
      if (sequence[j] < root) {
        return false;
      }
    }
    var left = true;
    if (i > 0) {
      left = VerifySquenceOfBST(sequence.slice(0, i));
    }
    var right = true;
    if (i < sequence.length - 1) {
      right = VerifySquenceOfBST(sequence.slice(i, sequence.length - 1));
    }
    return left && right;
  }
}

// 测试
// let a = [5,3,7,2,4,6,8]
// console.log(VerifySquenceOfBST(a))



// 五、最大深度

// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

function tranverse (tree){
  if(!tree) return;
  // 核心点就是 左子树和右子树最大值加1
  return Math.max(tranverse(tree.leftNode) , tranverse(tree.rightNode)) + 1;
}

// 这道题和求叶子节点差不多
// 核心是 左子树加右子树在加一个根节点


// 六、最小深度

// 给定一个二叉树，找出其最小深度。
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
// 说明: 叶子节点是指没有子节点的节点。

// 示例:
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最小深度 2


// 核心:
// 左右子树都不为空：左子树深度和右子树最小深度的最小值 + 1
// 左树为空：右子树最小深度的最小值 + 1
// 右树为空：左子树最小深度 + 1
function tranverse(tree) {
  if(!tree) return 0;

  if(!tree.leftNode){
    return tranverse(tree.rightNode)
  }
  if(!tree.rightNode){
    return tranverse(tree.leftNode)
  }
  return Math.min(tranverse(tree.rightNode) , tranverse(tree.leftNode)) + 1;
}