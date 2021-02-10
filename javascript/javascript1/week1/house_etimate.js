/*housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. 
The house costs 2.500.000.
Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. 
The garden size is 70m2. 
This house costs 1.000.000.
Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above.*/
//Peter's house
const widthInMeters2P = 8;
const heightInMeters2P = 10;
const deepInMeters2P = 10;
const gardenSizeInMeters2P = 100;
const volumeInMetersP = widthInMeters2P * heightInMeters2P * deepInMeters2P;
housePriceP = volumeInMetersP * 2.5 * 1000 + gardenSizeInMeters2P * 300;
const petersHousePrice = 2500000;
console.log('Petres house price is',housePriceP);
//Julia's house
const widthInMeters2J = 5;
const heightInMeters2J = 8;
const deepInMeters2J = 11;
const gardenSizeInMeters2J = 300;
const volumeInMetersJ = widthInMeters2J * heightInMeters2J * deepInMeters2J;
const JuliasHousePriceJ = 1000000;
housePriceJ = volumeInMetersJ * 2.5 * 1000 + gardenSizeInMeters2J * 300;
console.log('Julias house price is', housePriceJ);
if ((petersHousePrice > housePriceP) || (JuliasHousePrice > housePriceJ)) {
    console.log ('Peter and Julia are paying too Much')
}
else if ((petersHousePriceP > housePrice) || (JuliasHousePrice < housePriceJ)) {
    console.log ('Peter is paying too Much, while Julia are paying too Little')
}
else if ((petersHousePriceP < housePrice) || (JuliasHousePriceJ > housePrice)) {
    console.log ('Peter is paying too Little, while Julia are paying too Much')
}
else {
    console.log ('Peter and Julia are paying too Little')
}
