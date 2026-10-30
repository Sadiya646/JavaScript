function trackElevator(startFloor, minFloor, maxFloor, commands) {
    let currentFloor = startFloor;

    for (let command of commands) {
        if (command === "UP") {
            currentFloor = Math.min(currentFloor + 1, maxFloor);
        } else if (command === "DOWN") {
            currentFloor = Math.max(currentFloor - 1, minFloor);
        }
    }

    return currentFloor;
}