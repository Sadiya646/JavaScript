// Simulate a customer service ticket line based on a list of event commands. Your function should process the commands in order and return an object with two arrays: queue (the people still waiting, in order from front to back) and served (the people who were served, in the order they were served).

// The possible commands are:

// "join <name>": Adds <name> to the back of the queue. If someone with that name is already in the queue, ignore the command.
// "leave <name>": Removes <name> from the queue if they are currently waiting. If they are not in the queue, ignore the command.
// "serve": Removes the person at the front of the queue and appends their name to served. If the queue is empty, do nothing.
// Note: A person who has been served is no longer in the queue and may join again later.

function simulateTicketQueue(commands) {
  // TODO
  let queue = [];
let served = [];

for(let command of commands) {
    if(command.startsWith("join ")) {
        let name = command.slice(5);
        if(!queue.includes(name)) {
            queue.push(name);
        }
    } else if(command.startsWith("leave ")) {
        let name = command.slice(6);
        let index = queue.indexOf(name);

        if(index !== -1) {
            queue.splice(index, 1);
        }
    } else if(command === "serve") {
        if(queue.length > 0) {
            served.push(queue.shift());
        }
    }
}
return { queue, served };
}