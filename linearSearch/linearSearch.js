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