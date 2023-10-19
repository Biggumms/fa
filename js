
let stolenItems = [
 {
  socks: 7,
  spoons: 20,
  nutella_jar: 5,
  keys: 0,
  shoelaces: 4,
  rotisserie_chicken:1
},

{
  socks: 2,
  spoons: 2,
  nutella_jar: 0,
  keys: 0,
  shoelaces: 4, 
  rotisserie_chicken: 2
},
  
{
  socks: 0,
  spoons: 0,
  nutella_jar: 0,
  keys: 0,
  shoelaces: 0,
  rotisserie_chicken: 0
},

  {
  socks: 2,
  spoons: 10,
  nutella_jar: 4,
  keys: 4,
  shoelaces: 12,
  rotisserie_chicken: 0
}, 
  
{
  socks: 12,
  spoons: 17,
  nutella_jar: 0,
  keys: 2,
  shoelaces: 0,
  rotisserie_chicken: 0
},

{
  socks: 0,
  spoons: 0,
  nutella_jar: 2,
  keys: 0,
  shoelaces: 0,
  rotisserie_chicken: 0
}, 
  
{
  socks: 2,
  spoons: 2,
  nutella_jar: 0,
  keys: 4,
  shoelaces: 1,
  rotisserie_chicken: 0
}, 
  
{
  socks: 43,
  spoons: 10,
  nutella_jar: 50,
  keys: 2,
  shoelaces: 0,
  rotisserie_chicken: 0
}, 

{
  socks: 0,
  spoons: 2,
  nutella_jar: 0,
  keys: 3,
  shoelaces: 0,
  rotisserie_chicken: 0
}, 
{
  socks: 0,
  spoons: 0,
  nutella_jar: 0,
  keys: 0,
  shoelaces: 14,
  rotisserie_chicken: 0
}

]
// PROBLEM ONE
// Given an object of the stolen items for a household, return the total amount of items stolen (number). If nothing was robbed, return the string "Lucky you!”.

function houseTotal(obj) {
  // Initialize a variable to keep track of the total count of stolen items.
  let totalStolen = 0;

  // Loop through each room in the object.
  for (let room of obj) {
    // Loop through each item in the room and add its count to the total.
    for (let item in room) {
      totalStolen += room[item];
    }
  }

  // Check if any items were stolen.
  if (totalStolen === 0) {
    return "Lucky you!";
  } else {
    return totalStolen;
  }
}

// Call the function with the 'stolenItems' object.
const totalStolenItems = houseTotal(stolenItems);
console.log(totalStolenItems); // This will print the total count of stolen items or "Lucky you!" if nothing was stolen.


}
// uncomment these out to test it out
console.log(houseTotal(stolenItems[0])); 
console.log(houseTotal(stolenItems[1]));
console.log(houseTotal(stolenItems[2])); 
 
// PROBLEM TWO
function isStolen(obj, item) {
  // Iterate through the stolenItems array
  for (let i = 0; i < obj.length; i++) {
    // Check if the item exists in the current object
    if (obj[i][item] > 0) {
      // If the item is found, return true
      return true;
    }
  }
  // If the item is not found in any of the objects, return false
  return false;
}

// Example usage:
const itemToCheck = "nutella_jar";
const isItemStolen = isStolen(stolenItems, itemToCheck);
console.log(isItemStolen); // This will return true because nutella_jar was stolen.

// uncomment these out to test it out
console.log(houseTotal(stolenItems[0], "keys")); 
console.log(houseTotal(stolenItems[1], "socks"));
console.log(houseTotal(stolenItems[2], "spoons")); 


// EXTRA CREDIT!!!!! PROBLEM THREE
// Given an array of objects representing an entire neighborhood, return the most frequently stolen item. This is NOT the item that has been stolen from the most households, this is the item that has been stolen the most times TOTAL. 

function neighborhoodTotal(arr) {
  // Create an object to store the count of each stolen item
  const itemCounts = {};

  // Iterate through the neighborhood array
  for (const household of arr) {
    for (const item in household) {
      if (household[item] > 0) {
        // If the item was stolen from this household, increment its count
        if (itemCounts[item]) {
          itemCounts[item] += 1;
        } else {
          itemCounts[item] = 1;
        }
      }
    }
  }

  // Find the item with the highest count
  let mostStolenItem = null;
  let maxCount = 0;

  for (const item in itemCounts) {
    if (itemCounts[item] > maxCount) {
      maxCount = itemCounts[item];
      mostStolenItem = item;
    }
  }

  return mostStolenItem;
}

// Call the function with the provided 'stolenItems' array
const mostFrequentlyStolenItem = neighborhoodTotal(stolenItems);
console.log("The most frequently stolen item is:", mostFrequentlyStolenItem);

// uncomment these out to test it out
console.log(houseTotal(stolenItems)); 



// PROBLEM FOUR
// Based on the item that has been stolen the most, who do you think the burglar is? (you won’t get marked down for getting the “wrong” answer - just give me a fun explanation for why you think it is who it is! 
// A
