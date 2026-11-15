function countConnectedFriends(friendships, startPerson) {
  
let graph = {};

for(let [personA, personB] of friendships) {
    if(!graph[personA]) graph[personA] = [];
    if(!graph[personB]) graph[personB] = [];
    graph[personA].push(personB);
    graph[personB].push(personA);
}
let visited = new Set();
let queue = [startPerson];
visited.add(startPerson);

while(queue.length > 0) {
    let currentPerson = queue.shift();
    let friends = graph[currentPerson] || [];
    for(let friend of friends) {
        if(!visited.has(friend)) {
            visited.add(friend);
            queue.push(friend);
        }
    }

}
return visited.size - 1; // Exclude the startPerson from the count
}