const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj){
    if (usersObj[user].online === true){
    result++;
    }
  }
  return result;
}

/* 
1. A function called countOnline is created
2. The function uses the parameters UsersObj
3. This parameter is defined as the object we are referencing
4. Result is defined
5. Result in this instance is the number of online users counted, once the function parses our object
6. A for loop is declared
7. The for loop declaares a variable users
8. Users is defined as the key segments of our object (Object name: users)
9. The for loop parses our object and gives the variable name to our keys
10. The if statement declares: if the status online = true for user(Our variable referencing the keys) in the object Users >
11. Then increment the variable results
12. Then loops until it parses the entire object
13. Then returns the result variable
*/
console.log(countOnline(users));

