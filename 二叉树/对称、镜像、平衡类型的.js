// 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

// 思路：
// 两个根结点相等
// 左子树的右节点和右子树的左节点相同。
// 右子树的左节点和左子树的右节点相同。

function isSimilar(tree) {
  isSimilars(tree, tree);
}
function isSimilars(tree, current) {
  if (!tree && !current) return true;
  if (!tree || !current) return false;
  if (tree.node === current.node) return true;
  return isSimilars(tree.leftNode, current.rightNode) && isSimilars(tree.RightNode, current.leftNode);
}


// 操作给定的二叉树，将其变换为源二叉树的镜像。

//        源二叉树 
//     	    8
//     	   /  \
//     	  6   10
//     	 / \  / \
//     	5  7 9 11

//     	镜像二叉树
//     	    8
//     	   /  \
//     	  10   6
//     	 / \  / \
//     	11 9 7  5

function transformTree(tree) {
  if(tree){
    const left = tree.leftNode;
    tree.leftNode = tree.rightNode;
    tree.rightNode = left;
    transformTree(tree.leftNode)
    transformTree(tree.rightNode)
  }
}

// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
// 平衡二叉树：每个子树的深度之差不超过1

// #思路
// 后续遍历二叉树
// 在遍历二叉树每个节点前都会遍历其左右子树
// 比较左右子树的深度，若差值大于1 则返回一个标记 -1表示当前子树不平衡
// 左右子树有一个不是平衡的，或左右子树差值大于1，则整课树不平衡
// 若左右子树平衡，返回当前树的深度（左右子树的深度最大值+1）

function traverse(tree){
  if(!tree) return 0;

  let left = traverse(tree.leftNode);
  let right = traverse(tree.rightNode);

  if(left == -1 || right == -1 || Math.abs(left - right) > 1){
    return -1;
  }

  return Math.max(left, right) + 1 
}
