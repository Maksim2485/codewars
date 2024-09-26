// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case   
    var n= 1234;
    n = n.toString(2);
    console.log(n);
    const arr = ('' + n).split('');
    let count = 0;
    console.log(arr);

  for (let i = 0; i < arr.length; i +=1 ) {
    if (arr[i] == 1) {
      count += 1;
    }
  }
  console.log(count);
