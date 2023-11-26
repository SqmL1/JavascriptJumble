function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++){
      let num = arr[i];
      if (func(num)) {
        return num
      }
    }
    return undefined;
  }

  // https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-finders-keepers/16016