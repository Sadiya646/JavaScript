// Given an initial notification count initialCount and an array of event objects events, return the final notification badge count.

// Each event in events is an object with a type property ("ADD", "READ", or "CLEAR") and an optional count property (a positive integer, defaulting to 1 if omitted).

// Process the events in order:

// "ADD": Increase the notification count by count (or 1 if count is omitted).
// "READ": Decrease the notification count by count (or 1 if count is omitted). The count cannot drop below 0. If decreasing it would result in a negative number, set it to 0.
// "CLEAR": Reset the notification count to 0.
// Examples
// Example 1
// updateNotificationCount(2, [
//   { type: "ADD", count: 3 },
//   { type: "READ", count: 1 }
// ]);
// // Returns 4
// Example 2
// updateNotificationCount(5, [
//   { type: "READ", count: 10 },
//   { type: "ADD", count: 2 },
//   { type: "CLEAR" }
// ]);
// // Returns 0

function updateNotificationCount(initialCount, events){
  for (let event of events) {

        if (event.type === "ADD") {
            initialCount += event.count ?? 1;
        }

        else if (event.type === "READ") {
            initialCount = Math.max(0, initialCount - (event.count ?? 1));
        }

        else if (event.type === "CLEAR") {
            initialCount = 0;
        }

    }

    return initialCount;
}