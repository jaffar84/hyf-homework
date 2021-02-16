const travelInformation = {
    speed: 50,
    destinationDistance: 432,

  };
  dest = travelInformation.destinationDistance;
  velo = travelInformation.speed;
  const travelTime = dest/velo
  if (travelTime%100 != 0) {
      var xtime = travelTime*100 - ((travelTime*100)%100);
      var ytime = (travelTime*100)%100;
      if (ytime >60) {
          var ztime = (ytime-60);
          yytime = ytime - ztime;
          
      }
      

  }
  console.log(travelTime*100)
  console.log(xtime);
  console.log(ytime);
  console.log(ztime); 
  console.log(yytime);
  console.log('Total travel time is'+' '+(xtime/100 + yytime/60)+' ' +'hours and '+ ztime + ' '+ 'minuts');