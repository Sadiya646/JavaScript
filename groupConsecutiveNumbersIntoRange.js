function groupConsecutiveRanges(numbers) {
    if (numbers.length === 0) return [];

   
    const sorted = [...new Set(numbers)].sort((a, b) => a - b);
    const result = [];
    
    let start = sorted[0];
    let end = sorted[0];

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === end + 1) {
           
            end = sorted[i];
        } else {
            
            if (start === end) {
                result.push(String(start));
            } else {
                result.push(`${start}-${end}`);
            }
            
            start = sorted[i];
            end = sorted[i];
        }
    }

    // শেষ রেঞ্জটি লুপের বাইরে যোগ করতে হবে
    if (start === end) {
        result.push(String(start));
    } else {
        result.push(`${start}-${end}`);
    }

    return result;
}