function isPalindrome(str) {
    // Removing non-alphanumeric characters version 1
    // const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Removing non-alphanumeric characters version 2
    // let formattedStr = str.toLowerCase().replace(/[^\w+]/g, "");
    // let reverseStr = "";
    // for (let i = formattedStr.length - 1; i >= 0; i--) {
    //     reverseStr += formattedStr[i];
    // }
    // return formattedStr === reverseStr;
    // Regex - END
    // Non Regex (Helper Functions) - START

    const formattedStr = removeNonAlphaNumeric(str.toLowerCase());

    const reversedStr = reverseString(formattedStr);

    return formattedStr === reversedStr;
}

const removeNonAlphaNumeric = (str) => {
    let formattedStr = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (isAlphaNumeric(char)) {
            formattedStr += char;
        }
    }

    return formattedStr;
};

const isAlphaNumeric = (char) => {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // Numbers 0-9
        (code >= 97 && code <= 122) // Lowercase a-z
    );
};

const reverseString = (str) => {
    let reversedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
};

module.exports = isPalindrome;
