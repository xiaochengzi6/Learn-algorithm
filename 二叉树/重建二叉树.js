// 二叉树重建
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

// 思路
// 前序遍历：根节点 + 左子树前序遍历 + 右子树前序遍历
// 中序遍历：左子树中序遍历 + 跟节点 + 右字数中序遍历

function Node(node, leftNode, rightNode) {
  this.node = node;
  this.leftNode = leftNode;
  this.rightNode = rightNode;
}



// 前提是参数 前序遍历和中序遍历
function createTree(pre, mid){
  if(pre.length === 0) return null;
  if(pre.length === 1){
    return new Node(pre[0])
  }
  let root = pre[0];
  let index = mid.indexOf(root);
  let midLeftList = mid.slice(0,index)
  let midRightList = mid.slice(index+1)
  let preLeftList = pre.slice(1,index+1)
  let preLeftRight = pre.slice(index+1)
  // console.log("1",midLeftList, midRightList)
  // console.log("2",preLeftList, preLeftRight)
  let node = new Node(root);
  node.leftNode = createTree(preLeftList, midLeftList);
  node.rightNode = createTree(preLeftRight, midRightList);
  return node
}


// 测试
// let head = [1,2,4,7,3,5,6,8]
// let foot = [4,7,2,1,5,3,8,6]
// console.log(createTree(head, foot))


// 求二叉树的遍历
// 给定一棵二叉树的前序遍历和中序遍历，求其后序遍历

// 输入描述:
// 两个字符串，其长度n均小于等于26。 第一行为前序遍历，第二行为中序遍历。 二叉树中的结点名称以大写字母表示：A，B，C....最多26个结点。

// 输出描述:
// 输入样例可能有多组，对于每组测试样例， 输出一行，为后序遍历的字符串。

// 样例：
// 输入
// ABC
// BAC
// FDXEAG
// XDEFAG
// 输出
// BCA
// XEDGAF

function createTree_1(pre, mid, arr=[]){
  if(pre.length === 0) return;
  if(typeof pre === 'string') {
    pre = [].slice.call(pre, '')
  }
  if(typeof mid === 'string') {
    mid = [].slice.call(mid, '')
  }

  let root = pre[0];
  let index = mid.indexOf(root);
  let midLeftList = mid.slice(0,index)
  let midRightList = mid.slice(index+1)
  let preLeftList = pre.slice(1,index+1)
  let preLeftRight = pre.slice(index+1)
  // console.log("1",midLeftList, midRightList)
  // console.log("2",preLeftList, preLeftRight)
  createTree(preLeftList, midLeftList, arr);
  createTree(preLeftRight, midRightList, arr);
  arr.push(root)
  arr = arr.join('')
  return arr
}

// let a = 'FDXEAG'
// let b = 'XDEFAG'
// console.log(createTree_1(a, b))
