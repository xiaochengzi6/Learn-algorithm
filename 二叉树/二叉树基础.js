// 二叉树是由一个根及两颗互不相交的左子树和由子树构成，每个节点最多有两个，次序不能颠倒。
// 每个节点最多有两个分支的树

// 二叉树的种类
// 1、线索二叉树
// 具有 n 个节点的二叉链表中 一共有 2n 个指针域， n 个节点中有 n-1 个孩子 
// 所以需要 n-1 个指针域 还有 n+1 个指针域没有利用上。就选择使用空指针域左指针来指向前驱右指针域指向后继。
// 这种改变指向的指针叫做线索 这种二叉树称之为线索二叉树。

// 2、搜索二叉树
// 可以理解为折半查找以二叉树形式的表象。又称二叉排序树、二叉搜索树

// 3、哈夫曼树

// 4、平衡二叉树
// 平衡二叉树的条件
// 4.1是二叉排序树
// 4.2 任何一个节点的左子树或者右子树都是 平衡二叉树 左右高度差小于等于 1 
//  也就是平衡因子: 左子树高度 - 右子树高度的值 不大于 1

// 5、完全二叉树
// 完全二叉树和满二叉树的值一一对应

// 6、满二叉树
// 深度为 k 的节点有 2^k -1 个节点


// 二叉树的存储结构：
// 1、顺序存储 缺点：可能存在空间占比小（存在空节点）适合满二叉树、完全二叉树
// 2、链式存储
//    2.1 二叉链表：有两个指针域（左子树和右子树），一个数据域
//    2.2 有n个节点它的空指针域有 2n -(n-1)个 也就是总共有 n+1个空节点
//    2.3 三叉链表：有三个指针域（左子树，右子树，双亲），一个数据域



// 一、创建二叉树(二叉链表)
function Node(node, leftNode, rightNode) {
  this.node = node;
  this.leftNode = leftNode;
  this.rightNode = rightNode;
}

Node.prototype.getData = function () {
  console.log(this.node);
  return this.node;
};

function Tree() {
  this.root = null;
}

Tree.prototype = {
  // 添加一个节点
  insert: function (node) {
    let newNode = new Node(node);
    if (!root) {
      this.root = newNode;
      return void 666;
    }
    let current = this.root;
    let parent;
    while (current) {
      parent = current;
      if (node < parent.node) {
        current = current.leftNode;
        if (!current) {
          parent.leftNode = data;
          return void 666;
        }
      } else {
        current = current.rightNode;
        if (!current) {
          parent.rightNode = data;
          return void 666;
        }
      }
    }
  },

  // 返回深度 (暴力法)
  getDepth: function (node, depth) {
    depth = depth || 0;
    if (!node) {
      return 0;
    }
    depth++;
    let left = getDepth(node.leftNode, depth);
    let right = getDepth(node.rightNode, depth);
    return Math.max(left, right);
  },

  // 计算二叉树的总结点
  getNodeLength: function (node, length) {
    length = length || 0;
    if (!node) return;
    ++length;
    let leftLength = getNodeLength(node.leftNode, length);
    let rightLength = getNodeLength(node.rightNode, length);

    return leftLength + rightLength + 1;
  },

   // 计算二叉树的叶子节点
   nodeCount: function (tree) {
    if(!tree) return;
    return nodeCount(tree.leftNode) + nodeCount(tree.rightNode) + 1
  },

  // 根左右的打印节点
  preOrder: function (node) {
    if (!node) return;
    node.getData();
    this.getData(node.leftNode);
    this.getData(node.rightNode);
  },

  // 左根右的打印节点
  middleOrder: function (node) {
    if (!node) return;
    this.middleOrder(node.leftNode);
    node.getData();
    this.middleOrder(node.rightNode);
  },

  // 左右根的打印节点
  laterOrder: function (node) {
    if (!node) return;
    this.lastOrder(node.rightNode);
    this.getDepth(node.leftNode);
    node.getData();
  },

  // 查找 
  // 利用了二分查找的原理 但是使用它有前提就是二叉树必须是 哈夫曼树
  getNode: function (data, tree) {
    if(!tree) return;
    if(data === tree.node){
      return node;
    }
    else if(data < tree.node){
      getNode(data, tree.leftNode)
    }
    else if(data > tree.node) {
      getNode(data, tree.rightNode)
    }
    else {
      return -1;
    }
  },
  // 复制二叉树
  copy: function (tree, newTree){
    if(typeof tree == 'null') return;
    newTree = new Node()
    newTree.node = tree.node;
    copy(tree.leftNode, newTree.leftNode)
    copy(tree.rightNode, newTree.rightNode)
  },
 
};
