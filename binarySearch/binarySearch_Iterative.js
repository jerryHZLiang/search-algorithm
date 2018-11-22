function binarySearch(arr, value){
    let [start, end] = [0, arr.length-1]
    let mid
    while(start <= end){
        mid = parseInt((start+end)/2)
        if(arr[mid]<value){
            start = mid+1
        }else if(arr[mid]>value){
            end = mid-1
        }else{
            return mid
        }
    }
    return -1
}