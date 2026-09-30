function formatAttendanceReport(students) {
    let result = [];

    for (let student of students) {
        let present = student.present;
        let total = student.total;

        let percentage = Math.round((present / total) * 100);

        let status;

        if (percentage >= 90) {
            status = "Excellent";
        } else if (percentage >= 75) {
            status = "Good";
        } else {
            status = "At Risk";
        }

        let report = `${student.name}: ${present}/${total} (${percentage}%) - ${status}`;

        result.push(report);
    }

    return result;
}