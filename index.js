let userInputString = prompt (
'Please enter a list a comma-separated froyo flavors that you enjoy!',
'vanilla,strawberry,chocolate,chocolate,strawberry,caramel,cheesecake,cheesecake'
);

// turns into an array of strings separated by commas.
const flavors = userInputString.split(",");



console.table(flavors);