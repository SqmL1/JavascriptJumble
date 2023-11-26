function largestOfFour(arr) {
  var largestNumbers = [];
  for (var i = 0; i < arr.length; i++) {
    var largest = arr[i][0];
    for (var j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    largestNumbers.push(largest);
  }
  return largestNumbers;
}
