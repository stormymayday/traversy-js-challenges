function findMaxNumber(arr) {
    // let largestNum = 0;
    let largestNum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }

    return largestNum;
}

// Max method
// const findMaxNumber = (arr) => {
//     return Math.max(...arr);
// };

module.exports = findMaxNumber;
