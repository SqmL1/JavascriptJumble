function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;
    for (let i = 0; i < str.length; i++ ){
      if (str[i] === " "){
        if (currentLength > longestLength){
        longestLength = currentLength;
      } 
      currentLength = 0;
      } else {
        currentLength++;
      }
    }
      if (currentLength > longestLength) {
    longestLength = currentLength;
      }
      return longestLength;
}
/* 
1. the function findTheLongestWordLength is declared
2. the function accepts the parameter str which is the string we are referencing
3. longest length and current length are declared as a numerical value
4. A loop is declared
5. the loop iterates through the string front to back
6. an if statement that detects a space in the string also known as a new word in the case a string is multiple words
7. an if statement that detects if the current word is longer than the previous longest word then
8. we set the value of the current word to the longest word
9. otherwise if the word is not longer, we reset the current word length to 0 as the loop moves on to the next word
10. an else statement that increments eachtime there is a non space character in the string
11. once the loop iterates through the whole string, an if statement checks again if the final word is longer or not
12. if it isnt then the longest word is returned
*/