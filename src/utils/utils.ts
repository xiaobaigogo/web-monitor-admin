export function findIndex(arr: number[], target:number) {
  let l = 0, r = arr.length - 1
  while (l <= r) {
    let mid = Math.floor(l + (r - l)/2)
    if (arr[mid] >= target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  
  return l 
}
