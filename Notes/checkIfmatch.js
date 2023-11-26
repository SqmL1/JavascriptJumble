function confirmEnding(str, target) {
    console.log(target)
    let re = new RegExp(target + "$", "i");
  
    return re.test(str);
}

/*
1. a function called confirmEnding is created
2. The function takes two parameters str, and target
3. str is the string we are checking, and target is the letter we want to see at the end for the function to return true
4. the regular expression "re" is created
5. new RegExp() states we are looking for our target at the end of the string "str"
6. re.test checks if str and our regular expression match
*/