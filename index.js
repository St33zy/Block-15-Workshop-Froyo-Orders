let userInputString = prompt (
'Please enter a list a comma-separated froyo flavors that you enjoy!',
'vanilla,strawberry,chocolate,chocolate,strawberry,caramel,cheesecake,cheesecake'
);

// Split a string into substrings using the specified separator and return them as an array.
let flavors = userInputString.split(",");

let = flavorsCount = {};


// console.table(flavors);




function getCount(flavors) {
    for (let i = 0; i < flavors.length; i++) {
    let flavor = flavors[i];
    if (flavorsCount[flavor] === undefined) {
        flavorsCount[flavor] = 1;
    } else {
        flavorsCount[flavor]++;
    }
  }
  console.table(flavorsCount);
}
getCount(flavors);