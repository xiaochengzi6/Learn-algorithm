// 阅读事项
// 1. 注意 !!null == false;
// 2. 注意 var b = a++ 和 var b = ++a 的区别 前者是先赋值后计算 后者是先计算后赋值
// 3. 注意 代码可能有误 请带有批判性的思维去阅读它
// 4. 写作顺序是先实现 后解题 但你要明白链表的基本概念。

// 实现链表

// 创建节点
function Node(element) {
  this.element = element;
  this.next = null;
}

// 为Node链表提供方法
function LinkedList() {
  this.head = new Node("head");
  this.find = find;
  this.findPro = findPro;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}

// 查找节点
function find(item) {
  var currNode = this.head;
  while (currNode.next !== item) {
    currNode = currNode.next;
  }
  return currNode;
}

// 删除节点
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var targetNode = find(item);
  newNode.next = targetNode.next;
  targetNode.next = newNode;
}
// 查找前一个节点
function findPro(item) {
  var currNode = this.head;
  while (currNode.next != null && currNode.next.element !== item) {
    currNode = currNode.next.lenment;
  }
  return currNode;
}
/**
 * 删除节点
 */
function remove(item) {
  var targetNode = findPro(item);
  if (targetNode.next != null) {
    targetNode.next = targetNode.next.next;
  }
}
/**
 * 打印全部
 */
function display() {
  var currNode = this.head;
  while (currNode.next != null) {
    console.log(currNode.element);
  }
}

// 双向链表


// 1.题目：反转链表

// 思路： 1. 以头部节点为基准节点 将下一个节点往前挪
//       2.利用栈  ?3.是否能使用回调


//1.
function reverseList(head) {
  var head_1 = head.next;
  while (head) {
    head.next = head_1.next;
    head_1.next = head;
    head = head.next;
  }
  return head_1;
}



// 2.题目：输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head
// 参考例子：https://zhuanlan.zhihu.com/p/103095002
function Clone(head) {
  if (head.next == null) return null;
  copyList(head);
  copyRadom(head)
  return spliceList(head);
}
/**
 * 复制节点
 */
function copyList(head) {
  var copy = head;
  while(head != null ) {
    var obj = {
      element: copy.element,
      next: copy.next
    }
    copy.next = obj;
    copy = obj.next;
  }
}
/**
 * 保持特殊指针再复制节点中的正确指向
 */
function copyRadom(head) {
  var copy = head;
  while(head != null ) {
    if(copy.radom) {
      copy.next.radom = copy.radom.next
    }else{
      copy.next.radom = null
    }
    copy = copy.next.next;
  }
}
/**
 * 分割复制的节点
 */
function spliceList(head) {
  var copy = head.next;
  while(head != null ) {
    head.next = head.next.next;
    head = head.next.next;
    if(head) {
      copy.next = copy.next.next;
      copy = copy.next.next;
    }else {
      copy.next = null;
    }
  }
  return copy;
}


// 3.题目： 反向打印链表

function printfList(head) {
  var arr = [];
  while (head) {
    arr.unshift(head.element);
    head = head.next;
  }
  return arr;
}


// 4.题目： 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

// 参考：http://www.conardli.top/docs/dataStructure/%E9%93%BE%E8%A1%A8/%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%8E%92%E5%BA%8F%E7%9A%84%E9%93%BE%E8%A1%A8.html#%E9%A2%98%E7%9B%AE
// 链表1：1-3-5-7-9；
// 链表2：2-4-6-8-10；
// 每一级都要做一次比较最小的优先拿出来再依次链接上

function merget (long1,long2) {
  if(!long1){ return long2}
  if(!long2){ return long1}
  let head
  if(long1.element > long2.element) {
    head = long2;
    head.next = long1
    merget(long1,long2.next);
  }else {
    head = long1;
    head.next = long2;
    merget(long1.next, long2);
  }
  return head;
}

// 题目5. 输入一个链表，输出该链表中倒数第k个结点。

// 链表的特点 1.无序 2.无法预测长度 3.链式链接(顺序查找)
// 思路： 1. 暴力求解 先循环一遍得知长度length 再length - k
//        2. 快慢指针 设置两个指针 一块一慢 快指针比慢指针快 K次

// 1.
function shiftList(target, k) {
  var currNode = target
  var length = 0;
  while(currNode != null) {
    length++
    currNode = currNode.next;
  }
  if(length < k ) return null;
  var num = length-k;
  var value = target
  while(num--){
    value = target.next
  }
  return value;
}

// 2.
function shiftList_2 (target, k) {
  var currNode = target
  var fast 
  var slow
  while(k--){
    if(currNode == null ) return null;
    fast = currNode.next;
  }
  while(target != null){
    slow = target.next;
    fast = currNode.next;
  }
  return fast;
}


// 题目6. 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

// 思路： 两个指针 一个走两步，一个走一步 两针相遇存在闭环。

function EventLoopList(target){
  var fast = target.next.next;
  var slow = target.next;
  if(!fast || !slow) return null
  var value;
  while(fast != slow ) {
    fast = fast.next.next;
    slow = slow.next;
    value = fast.next
    if(!fast || !slow) return null
  }
  return value;
}
// 题目7. 输入两个链表，找出它们的第一个公共结点。

//链表如图
// 0-1-7-6-5-4
//           |-9-10-11 
//       3-2-

// 思路： 先分别找到两个链表的长度然后再对其长度后再走 相同就是公共点

function FindFirstCommonNode(pHead1, pHead2) {
  if (!pHead1 || !pHead2) { return null; }
  // 获取链表长度
  let length1 = getLength(pHead1);
  let length2 = getLength(pHead2);
  // 长链表先行
  let lang, short, interval;
  if (length1 > length2) {
    lang = pHead1;
    short = pHead2;
    interval = length1 - length2;
  } else {
    lang = pHead2;
    short = pHead1;
    interval = length2 - length1;
  }
  while (interval--) {
    lang = lang.next;
  }
  // 找相同节点
  while (lang) {
    if (lang === short) {
      return lang;
    }
    lang = lang.next;
    short = short.next;
  }
  return null;
}

function getLength(head) {
  let current = head;
  let result = 0;
  while (current) {
    result++;
    current = current.next;
  }
  return result;
}
