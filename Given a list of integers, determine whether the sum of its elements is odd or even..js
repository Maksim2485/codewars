/*Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero). */
function oddOrEven(array) {
    var sum = 0;
      for (var i = 0; i < array.length; i++) {
         sum += array[i];
  }
     if (sum % 2  == 0)  {
        return "even";
      }
      else if (sum % 2  == -1||sum % 2  == 1 )  return "odd";
      else return 0;
  }