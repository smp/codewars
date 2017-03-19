/*

https://www.codewars.com/kata/57873ab5e55533a2890000c7/train/javascript

A new task for you!

You have to create a method, that corrects a given time string. 
There was a problem in addition, so many of the time strings are broken. 
Time-Format is european. So from "00:00:00" to "23:59:59". 

Some examples:

"09:10:01" -> "09:10:01"
"11:70:10" -> "12:10:10"
"19:99:99" -> "20:40:39"
"24:01:01" -> "00:01:01"

If the input-string is null or empty return exactly this value! (empty string for C++)
If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

*/


function timeCorrect (t) {
  // check null or empty
  if (t === null || t === '') { return (t) }
  // check formatting
  if (!/^(\d\d[:]\d\d[:]\d\d)$/.test(t)) { return (null) }

  // start by breaking the time into integer counters(?)
  var hour = parseInt(t.split(':')[0])
  var min = parseInt(t.split(':')[1])
  var sec = parseInt(t.split(':')[2])

  while (hour >= 24 || min >= 60 || sec >= 60) {
    // check the seconds, increment mins, decrement
    if (sec >= 60) {
      min++
      sec = sec - 60
    }
    // same thing for minutes
    if (min >= 60) {
      hour++
      min = min - 60
    }
    // slightly diff for hours
    if (hour >= 24) {
      hour = hour - 24
    }
  }
  // add any padding
  return (String("0" + hour).slice(-2) + ':' + String("0" + min).slice(-2) + ':' + String("0" + sec).slice(-2))
}

// local test
// console.log(timeCorrect('24:60:10'))
