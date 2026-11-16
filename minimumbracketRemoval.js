function minRemovalsToBalance(s) {
    let unmatchedOpen = 0;
    let removals = 0;

    for (const char of s) {
        if (char === '(') {
            unmatchedOpen++;
        } else if (char === ')') {
            if (unmatchedOpen > 0) {
                unmatchedOpen--;
            } else {
                removals++; 
            }
        }
    }

    
    return removals + unmatchedOpen;
}