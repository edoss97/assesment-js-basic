///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]
//15
//26
//22
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
let totalAcres = 0

for (let i = 0; i < fujiAcres.length; i++) {
  totalAcres = fujiAcres[i] + totalAcres
}

for (let i = 0; i < galaAcres.length; i++) {
    totalAcres = galaAcres[i] + totalAcres
  }

for (let i = 0; i < pinkAcres.length; i++) {
    totalAcres = pinkAcres[i] + totalAcres
  }
console.log(totalAcres
    )
//EXTRA CREDIT
//i used the loop and basic algebra to cycle through the array of each one,
// then just add that value per loop to the running total of acres to combine, then repeated

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = (totalAcres / 7)
console.log(averageDailyAcres)


// E.C. simple math total acres (weekly) divided by 7 to get into daily
// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0) { (acresLeft = acresLeft - averageDailyAcres) & (days++)
    
} 

console.log(days)

// E.C. just cycled through until there were no acres left, 
// subtracted the average daily to give us an idea of how many days it will take to go through
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/
//const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
//const galaAcres = [5, 2, 4, 3, 6, 2, 4]
//const pinkAcres = [1, 5, 4, 2, 1, 5, 4]
//15
//26
//22
//const fujiPrice = .89 
//const galaPrice = .64
//const pinkPrice = .55
// CODE HERE
let fujiTons= fujiAcres.slice(0, fujiAcres.length )
let galaTons= galaAcres.slice(0, galaAcres.length)
let pinkTons= pinkAcres.slice(0, pinkAcres.length)

for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons[i] = fujiAcres[i] * 6.5
    
}
console.log(fujiTons)

for (let i = 0; i < galaAcres.length; i++) {
    galaTons[i] = galaAcres[i] * 6.5
    
}
console.log(galaTons)

for (let i = 0; i < pinkAcres.length; i++) {
    pinkTons[i] = pinkAcres[i] * 6.5
    
}
console.log(fujiTons)

// EC created sliced arrays for each one then for each apple type loop through to just multiply each index value by 6.5

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
let fujiPounds =0
let galaPounds =0
let pinkPounds =0
// CODE HERE 

for (let i = 0; i < fujiTons.length; i++) {
    fujiPounds = fujiTons[i] + fujiPounds
  }
fujiPounds = fujiPounds *2000
console.log(fujiPounds)

for (let i = 0; i < galaTons.length; i++) {
    galaPounds = galaTons[i] + galaPounds
  }
galaPounds = galaPounds *2000
console.log(galaPounds)


for (let i = 0; i < pinkTons.length; i++) {
    pinkPounds = pinkTons[i] + pinkPounds
  }
pinkPounds = pinkPounds *2000
console.log(pinkPounds)
console.log ("=======")


//EC similar to question 1 cycled through to add up the total of tons for each apple type, 
//then once i got that number multiply by 2k to convert to pounds from tons

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
//const fujiPrice = .89 
//const galaPrice = .64
//const pinkPrice = .55

// CODE HERE

let fujiProfit = (fujiPounds * fujiPrice)
let galaProfit = (galaPounds * galaPrice)
let pinkProfit = (pinkPounds * pinkPrice)

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

console.log("=======")

//^^^^^ THIS IS TO MAKE IT EASIER TO READ FOR MYSELF

// once you have the pounds just multiple by the price per pound to calculate profit


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit= (fujiProfit + galaProfit + pinkProfit)
console.log(totalProfit)

// just simple addition adding all 3 profits together to make total profit