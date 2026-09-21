/**
 * 
 * Truncate a given string if its length is greater than the specified maxLength. If truncation occurs, append "..." to the end of the truncated string. If the string's length is already within or equal to maxLength, return the string unchanged.

Special consideration: If maxLength is 3 or less and truncation is necessary, the result should simply be "..." as there isn't enough space for both content and the ellipsis.

Examples
truncateString("Hello world, this is a long string", 10)
// Expected output: "Hello w..."

truncateString("Short text", 15)
// Expected output: "Short text" 
 */



function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }

    if (maxLength <= 3) {
        return "...";
    }

    return str.slice(0, maxLength - 3) + "...";
}
console.log(truncateString("Hello world, this is a long string", 10));