function reverseString(str) {
    let newStr = "";
    for (let n = str.length -1; n >= 0; n--){
        newStr += str[n];
     }
    return newStr;
  }
  
  reverseString("hello");

/* 
1. a function called reverseString is declared
2. the function accepts the parameter str
3. str is thr string we would like to reveres
4. an empty string called newStr is declared (this might also be called reverse string)
5. a for loop is declared
6. the for loop defines n as the length of the string minus one e.g.: the string "Hello" contains 5 characters
   however since indexes are zero based the final position is defined as the index 4, therefore it is necessary
   to subtract one from the string length so we start on the index of the final character of our string.
7. n is defined as the starting position that the loop iterates through our string
8. the loop is set to stop once the index -1 is reached, once n is no longer greater than or equal to 0 the loop stops
9. the loop is set to decrement by one each time
10. each iteration of the loop the character defined by the nth place in our string is added to our new string.
11. finally we return the reversed string defined as the variable newStr
*/