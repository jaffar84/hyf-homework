var cloths = ['tshirt and short','jacket and pants'];
function temperature(temp) {
    if (temp < 15){
        return cloths = 'jacket and pants';
    }
    else {
        return cloths = 'tshirt and short';
    }
}
console.log(temperature(18));
console.log(temperature(8));