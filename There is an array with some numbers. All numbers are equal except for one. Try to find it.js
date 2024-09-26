//There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
    for (let i =  0; i <arr.length;i++ ){
      if (arr[i] != arr[i + 1]){
        if ( i == arr.length-1) return arr[i];
        if (arr[i] != arr[i+2]) return arr[i];
        else return arr[i+1];
      }
    }
  }
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));