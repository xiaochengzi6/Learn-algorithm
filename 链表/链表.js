//封装链表类
function LinkedList() {
    //节点类
    function Node(data) {
        this.data = data
        this.next = null
    }
    this.head = null
    this.length = 0
    // 加入节点
    LinkedList.prototype.append = function (data) {
        if (this.length == 0) {
            //如果是第一个节点
            let newNode = new Node(data);
            this.head = newNode;
        } else {
            let newNode = new Node(data);
            // 找到最后一个节点
            let current = this.head
            while (current.next) {
                current = current.next;
            }
            current.next = newNode
            console.log(newNode)
        }
        this.length += 1;
    }
    //将节点以字符串的形式打印出来
    LinkedList.prototype.toString = function () {
        let current = this.head;
        let listString = ''
        while (current) {
            listString += current.data + " ";
            current = current.next;
        }
        return listString
    }
    LinkedList.prototype.insert = function (item, data) {
        if (item < 0 || item > this.length || this.length === 0) return false;
        let newNode = new Node(data);
        // 插入头部
        if (item == 0) {
            newNode.next = this.head.next;
            this.head.next = newNode;
            return true;
        }
        let oldNode = this.head;
        for (let i = 0; i < this.length; i++) {
            oldNode = oldNode.next;
            if (i == item) {
                newNode.next = oldNode.next;
                oldNode.next = newNode;
                break
            }
            if (i == this.length) {
                oldNode.next = newNode;
                break
             }

        }
    }
}
let list = new LinkedList();
list.append('abc')
list.append('cas')
list.append('cav')
list.insert(1,'cc')
console.log(list)
// list.toString


//  2.封装一个节点
