function largestOfFour(arr) {
  var answers = [arr[0][0], arr[1][0], arr[2][0], arr[3][0]];
  for ( var i=0; i<4; i++) {
    for ( var j = 0; j<4; j++){
      if (arr[i][j] > answers [i]) {
        answers[i] = arr[i][j];
      }
    }
  }
  return answers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
