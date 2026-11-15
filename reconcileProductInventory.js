// Reconcile Product Inventory
// You are given an initial inventory of products and a list of transactions. Your task is to apply these transactions to the inventory and return the final state of each product's quantity.

// For 'stock-in' transactions, add the quantity to the product's current stock.
// For 'stock-out' transactions, subtract the quantity. However, a product's stock can never fall below zero. If a 'stock-out' transaction would result in a negative quantity, the stock should instead be set to zero.

// Products not present in the initial inventory but appearing in transactions should be treated as starting with a quantity of zero before any transactions are applied to them.

// Example 1
// Input: initialInventory = {"apple":10,"banana":5}, transactions = [{"productId":"apple","quantity":3,"type":"in"},{"productId":"banana","quantity":2,"type":"out"}]

// Output: {"apple":13,"banana":3}

// Explanation: Apple stock increases by 3, banana stock decreases by 2.

function reconcileInventory(initialInventory, transactions) {
 let invertory = { ...initialInventory };
 for(let item of transactions){
    let name = item.productId;
    let quantity = item.quantity;
    let type = item.type;
    if(invertory[name] === undefined){
        invertory[name] = 0;
    }
    if(type=='in'){
        invertory[name] += quantity;
    }else if (type =='out'){
        invertory[name] -= quantity;
        if(invertory[name] < 0){
            invertory[name] = 0;
        }
    }
 }
    return invertory;
}