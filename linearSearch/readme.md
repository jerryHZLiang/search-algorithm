# 线性搜索(顺序搜索)
在计算机科学中，线性搜索或顺序搜索是一种寻找某一特定值的搜索算法，指按一定的顺序检查数组中每一个元素，直到找到所要寻找的特定值为止。是最简单的一种搜索算法。

假设一个数组中有n个元素，最好的情况就是要寻找的特定值就是数组里的第一个元素，这样仅需要1次比较就可以。而最坏的情况是要寻找的特定值不在这个数组或者是数组里的最后一个元素，这就需要进行n次比较


未优化的实现方法
```JavaScript
function linearSearch(arr, value) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      return i
    }
  }
  return -1
}

let arr = [3, 1, -3, 2, 5, 7]
let index = linearSearch(arr, 5)
console.log(index)
```

## 线性搜索优化
现实中很多查找遵循2-8原则，查找也类似。
即我们80%的场景下查找的其实只是全部数据种20%的数据。
根据这个原则，我们在每次查找时把找到的元素向前移动一位，这样经过多次查找后，最常查询的数据会移动到最前面，顺序查找时更容易找到。

见```linearSearch.js```
```JavaScript
function linearSearch(arr, value) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === value) {
          if(i>0){
              [arr[i-1], arr[i]] =  [arr[i], arr[i-1]]
          }
        return i
      }
    }
    return -1
  }
  

let arr = [3, 1, -3, 2, 5, 7]
let index = linearSearch(arr, 5)
let index2 = linearSearch(arr, 5)
console.log(index,index2)
```

#查找最大(小)值
####算法步骤

1. 将数组第0项作为最小值
2. 依次拿数组的剩余项和最小值进行比较，如果比最小值小,那把该项的值作为最小值，继续比较，直到比完
3. 此时得到的最小值就是数组的最小值

见```findMin.js```
```JavaScript
function fundMin(arr) {
    let min = arr[0]
    for(let i=0; i<arr.length;i++){
       if(arr[i]<min){
           min = arr[i]
       }
    }
    return min
  }
```

#使用 JavaScript 原生方法实现查找
```javaScript
// 获取下标
arr.indexOf(value)

// 获取值
arr.find(val => val === value)

// 最大值旧写法
Math.max.apply(null, arr)

// 最大值ES6写法
Math.max(...[arr])
```