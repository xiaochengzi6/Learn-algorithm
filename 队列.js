// 队列是一种基于先进先出（FIFO）策略的集合类型。
// 在实际应用中使用队列的只要原因是在用集合保存元素的同事保存它们的相对顺序：使他们入列顺序和出列顺序相同。

// 数组实现

function Queue() {
    this.arrs = [];
    Queue.prototype.enqueue = function (element) {
        this.arrs.push(element)
    }
    Queue.prototype.dequeue = function () {
        // 从前面弹出一个元素并且长度减一
        return this.arrs.shift();
    }
    Queue.prototype.isEmpty = function () {
        return this.arrs.length ? true : false;
    }
    Queue.prototype.size = function () {
        return this.arrs.length
    }
}