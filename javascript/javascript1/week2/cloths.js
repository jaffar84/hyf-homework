var cloths = ['tshirt and short','jacket and pants'];
function temperature(temp) {
    if (temp < 15){
        return cloths[0];
    }
    else {
        return cloths[1];
    }
}
console.log(temperature(18));
console.log(temperature(8));
