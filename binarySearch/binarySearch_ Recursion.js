function binarySearch(arr, value){
   function search(arr, start, end, value){
       if(start>end) return -1
       let min = parseInt((start+end)/2)
       if(arr[min]>value){
           return search(arr, start, min+1, value)
       }else if(arr[min]< value){
           return search(arr, min+1, end, value)
       }else{
           return min
       }
   }
   return search(arr, 0, arr.length-1,value)
}
