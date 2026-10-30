function rankStudents(students) {
    let sorted = [...students].sort((a, b) => b.score - a.score);

    let rank = 1;

    for (let i = 0; i < sorted.length; i++) {

        if (i > 0 && sorted[i].score !== sorted[i - 1].score) {
            rank = i + 1;
        }

        sorted[i] = {
            ...sorted[i],
            rank: rank
        };
    }

    return sorted;
}