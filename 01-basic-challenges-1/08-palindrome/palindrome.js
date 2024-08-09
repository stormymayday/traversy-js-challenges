function isPalindrome(str) {
    // Removing non-alphanumeric characters version 1
    // const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Removing non-alphanumeric characters version 2
    const formattedStr = str.toLowerCase().replace(/[^\w+]/g, "");

    let reverseStr = "";

    for (let i = formattedStr.length - 1; i >= 0; i--) {
        reverseStr += formattedStr[i];
    }

    // console.log(reverseStr);

    if (formattedStr === reverseStr) {
        return true;
    } else {
        return false;
    }
}

module.exports = isPalindrome;
