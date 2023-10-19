
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
// Given an object of the stolen items for a household and a string in lowercase representing a specific item, return true if that item was stolen and false if it was not. 

function isStolen(obj, item) {



}
// uncomment these out to test it out
//console.log(houseTotal(stolenItems[0], "keys")); 
//console.log(houseTotal(stolenItems[1], "socks"));
//console.log(houseTotal(stolenItems[2], "spoons")); 


// EXTRA CREDIT!!!!! PROBLEM THREE
// Given an array of objects representing an entire neighborhood, return the most frequently stolen item. This is NOT the item that has been stolen from the most households, this is the item that has been stolen the most times TOTAL. 

function neighborhoodTotal(arr) {


  return total; 
  
}

// uncomment these out to test it out
//console.log(houseTotal(stolenItems)); 



// PROBLEM FOUR
// Based on the item that has been stolen the most, who do you think the burglar is? (you won’t get marked down for getting the “wrong” answer - just give me a fun explanation for why you think it is who it is! 
