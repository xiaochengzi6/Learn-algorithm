// 背包是一种不支持从中删除元素的集合数据类型，目的是帮助用例收集元素并迭代所有收集到的元素，
// 也是检查背包是否为空，或者获取背包中元素的数量。
// 目的： 背包是帮助用例收集元素并且迭代遍历所有元素，并不在乎顺序

// 用数组来实现背包
// let arrs = [];

// add(item) 添加元素
// isEmpty() 查看背包是否含有元素
// size() 查看背包中元素多少

function Bag() {
    let arrs = [];
    function add(item) {
        arrs.push(item)
    }
    function isEmpty() {
        if (arrs.length == 0) { return false }
        return true
    }
    function size() {
        return arrs.length
    }
    return {
        add: add,
        isEmpty: isEmpty,
        size: size,
    }
}
//测试用例
let bag = new Bag();
bag.add(1)
bag.add(1)
console.log(bag.size())