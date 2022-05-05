// 给定一棵二叉搜索树，请找出其中的第k小的结点。 例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4。

// 思路：
// 二叉搜索树的中序遍历即排序后的节点，本题实际考察二叉树的遍历。

function getNode(tree, k){
  let arr = [];
  traverse(tree, arr)

  if (k > 0 && k <= arr.length) {
    return arr[k - 1];
  }
  return null;
}

function traverse (tree, arr=[]) {
  if(!tree) return;
  traverse(tree.leftNode)
  arr.push(tree.node);
  traverse(tree.fightNode)
  return arr;
}

// 非递归实现
function getchild(tree, k){
  if(!tree) return;
  let stack = [];
  let result = [];
  let current = tree;
  while(current || stack.length > 0){
    while(current){
      // 根--左
      stack.push(current);
      current = current.leftNode;
    }
    // 左--根
    current = stack.pop();
    result.push(current)
    current = current.rightNode;
  }

  if (k > 0 && k <= arr.length) {
    return arr[k - 1];
  }
  return null;
}