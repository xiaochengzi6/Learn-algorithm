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