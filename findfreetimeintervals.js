function findFreeTime(bookedIntervals, workingHours) {
    const [workStart, workEnd] = workingHours;

    // Keep bookings within working hours
    let bookings = bookedIntervals
        .map(([start, end]) => [
            Math.max(start, workStart),
            Math.min(end, workEnd)
        ])
        .filter(([start, end]) => start < end);

    // Sort bookings by start time
    bookings.sort((a, b) => a[0] - b[0]);

    // Merge overlapping bookings
    let merged = [];

    for (let booking of bookings) {
        if (merged.length === 0 ||
            booking[0] > merged[merged.length - 1][1]) {
            merged.push(booking);
        } else {
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                booking[1]
            );
        }
    }

    // Find free intervals
    let freeTime = [];
    let currentTime = workStart;

    for (let booking of merged) {
        if (currentTime < booking[0]) {
            freeTime.push([currentTime, booking[0]]);
        }

        currentTime = booking[1];
    }

    if (currentTime < workEnd) {
        freeTime.push([currentTime, workEnd]);
    }

    return freeTime;
}