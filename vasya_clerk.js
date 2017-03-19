/*

https://www.codewars.com/kata/vasya-clerk/train/javascript

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to each person and give the change if he initially has no money and 
sells the tickets strictly in the order people follow in the line?
Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.
*/

  // if bill - cost > cash_register
    // sorry
  // else
    // give change to person and add cost to register

function makeChange (register, bill) {

}


function tickets (peopleInLine) {
  var cost = 25 // set the price
  var cashRegister = [0, 0, 0] // store money in our cash register


}




console.log(tickets([25,25,25,100,25,25,25,100,25,50,25,100,25,25,25,100,25,25,50,100,25,50,50,100]))

// Why do these fail?
//Line = 25,25,25,100,25,25,25,100,25,50,25,100,25,25,25,100,25,25,50,100,25,50,50,100 - Expected: 'NO', instead got: 'YES'
//Line = 25,25,50,100,25,25,25,100,25,50,25,100,25,25,25,100 - Expected: 'YES', instead got: 'NO'
/*
function attempt (peopleInLine) {
  // store money in our cash register
  var cost = 25
  var cashRegister = 0

  for (var i = 0, len = peopleInLine.length; i < len; i++) {
    if ((peopleInLine[i] - cost) > cashRegister) {
      return ('NO')
    } else {
      cashRegister -= (peopleInLine[i] - cost)
      cashRegister += cost
      console.log(cashRegister)
    }
  }
  return ('YES')
} */
