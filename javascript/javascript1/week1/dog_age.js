/* Since I'm not interested in dogs, I tried to  estimated the equation below 
based on some charts!
The equation is an average, 'cause a dog year depends on the dog's weight and kind */
var dogYearOfBirth = 2008;
var dogYearFuture = 2014;
const dogYear = 5; //avg of human years
var ageOfTheDog = dogYearFuture - dogYearOfBirth; //in human years
if ((ageOfTheDog > 0) && (ageOfTheDog <= 1)) {
    var shouldShowResultInDogYears = ageOfTheDog * 15;
    console.log ("Your dog will be",ageOfTheDog ,"human years old in", dogYearFuture)
    console.log ("Your dog will be",shouldShowResultInDogYears  ,"dog years old in", dogYearFuture)
}
else if ((ageOfTheDog > 1) && (ageOfTheDog <=16)) {
    var shouldShowResultInDogYears = (ageOfTheDog * dogYear) + 9;
    console.log ("Your dog will be",ageOfTheDog ,"human years old in", dogYearFuture)
    console.log ("Your dog will be",shouldShowResultInDogYears  ,"dog years old in", dogYearFuture)
}
else {
    console.log ('Dogs cannot live more than 16 human years')
}