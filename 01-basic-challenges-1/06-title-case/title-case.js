function titleCase(str) {
    // console.log(str.split(" "));
    let strArr = str.toLowerCase().split(" ");

    let newStr = strArr
        .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        })
        .join(" ");

    return newStr;
}

module.exports = titleCase;
