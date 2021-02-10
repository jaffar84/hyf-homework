/*Your friend Peter is considering a house that is
 8m wide, 10m deep and 10m high. 
 The garden size is 100m2. 
 The house costs 2.500.000. 
 Your friend Julia is considering a house that is
  5m wide, 11m deep and 8m high. 
  The garden size is 70m2. 
  This house costs 1.000.000.

Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above.*/
//Peter's house
const widthInMetersP = 8;
const heightInMetersP = 10;
const deepInMetersP = 10;
const gardenSizeInM2P = 100;
const petersHousePrice = 2500000;
const volumeInMetersP = widthInMetersP * heightInMetersP * deepInMetersP;
const housePriceP = volumeInMetersP * 2.5 * 1000 + gardenSizeInM2P * 300;
console.log("Peters house price is: ", housePriceP);
//////////////////////////////////////////////////////////////////////
//Julia's house
const widthInMetersJ = 5;
const heightInMetersJ = 8;
const deepInMetersJ = 11;
const gardenSizeInM2J = 70;
const juliasHousePrice = 1000000;
const volumeInMetersJ = widthInMetersJ * heightInMetersJ * deepInMetersJ;
const housePriceJ = volumeInMetersJ * 2.5 * 1000 + gardenSizeInM2J * 300;
console.log("Julias house price is: ", housePriceJ);
//////////////////////////////////////////////////////////////////////
if ((petersHousePrice > housePriceP) && (juliasHousePrice > housePriceJ)) {
    console.log ('Peter and Julia are paying too much')
}
else if ((petersHousePrice > housePriceP) && (juliasHousePrice < housePriceJ)) {
    console.log ('Peter is paying too Much, while Julia are paying too Little')
}
else if ((petersHousePrice < housePriceP) && (juliasHousePrice > housePriceJ)) {
    console.log ('Peter is paying too Little, while Julia are paying too Much')
}
else {
    console.log ('Peter and Julia are paying too little')

}

