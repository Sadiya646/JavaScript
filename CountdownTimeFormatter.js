// Convert a non-negative integer representing total seconds into a formatted string in HH:MM:SS format.

// Hours (HH): Total whole hours, padded with leading zeros to at least 2 digits.
// Minutes (MM): Remaining minutes (00–59), padded to 2 digits.
// Seconds (SS): Remaining seconds (00–59), padded to 2 digits.
// Examples
// formatCountdown(3661) returns "01:01:01".
// formatCountdown(59) returns "00:00:59".

// Example 1
// Input: totalSeconds = 3661

// Output: "01:01:01"

// Explanation: 3661 seconds is 1 hour, 1 minute, and 1 second.

// Example 2
// Input: totalSeconds = 59

// Output: "00:00:59"

// Explanation: 59 seconds is 0 hours, 0 minutes, and 59 seconds.


function formatCountdown(totalSeconds) {

    let hours=Math.floor(totalSeconds/3600);
    let minutes=Math.floor((totalSeconds%3600)/60);
    let seconds=totalSeconds%60;
}
return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;