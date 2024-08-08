function countOccurrences(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

// Split Method
// const countOccurrences = (str, char) => {
//     // console.log(str.split(char).length - 1);
//     return str.split(char).length - 1;
// };

module.exports = countOccurrences;
