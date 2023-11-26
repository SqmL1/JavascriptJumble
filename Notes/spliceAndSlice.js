function frankenSplice(arr1, arr2, n) {

    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
    }

/*
1. a function called frankensplice is initiated
2. the function takes three parameters, two arrays that we will splice without modifying and n, which is the place that arr1 will be put into arr2 as localArr
*/