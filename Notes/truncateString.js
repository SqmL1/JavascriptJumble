function truncateString(str, num) {
    let newStr = "";
    if (str.length > num){
    for (let i = 0; i < num; i++){
      newStr += str[i];
    }
    newStr += "..."
    return newStr;
    } else {
       console.log(newStr)
    return str;
    }
  }

