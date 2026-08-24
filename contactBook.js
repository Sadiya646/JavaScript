/*Task 9.1 — Contact Book
Build a small "contact" system:
let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};
Convert the email to lowercase and update the object.
Loop through the contact object and print each key-value pair.
Add a new property favoriteWords: [] (an array) — push 3 words to it.
Reverse the name string just for fun using one of your three reverse functions from Task 4.1.
Check if the email includes "@email.com" (case-insensitive) and log a confirmation message.


*/

let contact = {
  name: "Alex Johnson",
  email: "ALEX@EMAIL.COM",
  phone: "555-1234"
};

let newEmail= contact.email.toLowerCase();
console.log(newEmail);
contact['email']=newEmail;
console.log(contact);

for(const contacts in contact){
    console.log(contacts +":"+contact[contacts]);
    
}

// number 3
contact.favoriteWords=[]
console.log(contact);

// contact.favoriteWords.push("hello");
// contact.favoriteWords.push("sadiya")
// contact.favoriteWords.push("tasnim")
contact.favoriteWords.push('word1','word2','word3')

console.log(contact);

// number 4
console.log(contact.name.split('').reverse().join('')
)

if(contact.email.includes("@email.com")){
    console.log("confirm");
    
}else{
    console.log("dont match");
    
}