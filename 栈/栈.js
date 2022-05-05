// 栈是一种基于先进后出策略的集合类型。
// 在实际应用中使用队列的只要原因是在用集合保存元素的同时保存它们的相反顺序：使他们入列顺序和出列顺序相反。

// 使用数组来实现栈

function Stack() {
    this.arrs = [];
    Stack.prototype.push = function (element) {
        this.arrs.push(element)
    }
    Stack.prototype.pop = function () {
        // pop() 方法用于删除并返回数组的最后一个元素。
        return this.arrs.pop()
    }
    Stack.prototype.isEmpty = function () {
        if (this.arrs.length == 0) { return false }
        else{ return true; };

    }
    Stack.prototype.size = function () {
        return this.arrs.length
    }
}