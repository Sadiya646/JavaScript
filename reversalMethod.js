let first="JavaScript"
console.log(first.split('').reverse().join(''))


// using for loop

let reverse='';
for(let i= first.length-1; i>=0;i--){
    reverse=reverse+first[i]
    console.log((reverse));
    
}
// I think the for loop method is fastest because it directly processes each character and does not create an extra array using split().