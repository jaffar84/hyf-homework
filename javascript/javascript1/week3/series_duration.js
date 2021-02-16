let myLifeSpan = 80;
const seriesDurations = [
    {
      title: "Game of thrones",
      days: 0,
      hours: 1,
      minutes: 30,
    },
    {
        title: "Breaking bad",
        days: 21,
        hours: 19,
        minutes: 50,
      },
      {
        title: "Good girls",
        days: 4,
        hours: 20,
        minutes: 10,
      },
    
  ];
  
  function logOutSeriesText() {
    // Game of Thrown
    gOfThDays = seriesDurations[0].days;
    gOfThHours = seriesDurations[0].hours;
    gOfThMin = seriesDurations [0].minutes;
    gOfThWatchingTimeInYears = gOfThDays/365.25 + (gOfThHours/24)/365.25 + ((gOfThMin/60)/24)/365.25;
    gOfThWatchingTimeInYears = gOfThWatchingTimeInYears.toFixed(5);
    gOfThWatchingTimeOfMyLife = gOfThWatchingTimeInYears*100/myLifeSpan;
    // Breaking Bad
    bBDays = seriesDurations[1].days;
    bBHours = seriesDurations[1].hours;
    bBMin = seriesDurations [1].minutes;
    bBWatchingTimeInYears = bBDays/365.25 + (bBHours/24)/365.25 + ((bBMin/60)/24)/365.25;
    bBWatchingTimeInYears = bBWatchingTimeInYears.toFixed(5);
    bBWatchingTimeOfMyLife = bBWatchingTimeInYears*100/myLifeSpan;
    // Good Girls
    gGDays = seriesDurations[2].days;
    gGHours = seriesDurations[2].hours;
    gGMin = seriesDurations [2].minutes;
    gGWatchingTimeInYears = gGDays/365.25 + (gGHours/24)/365.25 + ((gGMin/60)/24)/365.25;
    gGWatchingTimeInYears = gGWatchingTimeInYears.toFixed(5);
    gGWatchingTimeOfMyLife = gGWatchingTimeInYears*100/myLifeSpan;
    // In total
    tlotalDays = seriesDurations[0].days + seriesDurations[1].days +seriesDurations[2].days;
    totalHours = seriesDurations[0].hours +seriesDurations[1].hours +seriesDurations[2].hours;
    totalMinuts = seriesDurations[0].minutes + seriesDurations[1].minutes + seriesDurations[2].minutes; 
    watchingTimeInYears = ((totalMinuts/60)/24)/365.25 + totalHours/24/365.25 + tlotalDays /365.25
    watchingTimeInYears = watchingTimeInYears.toFixed(3);
    watchingTimeOfMyLife = watchingTimeInYears*100/myLifeSpan;
  }
  logOutSeriesText();
  console.log('Game of Thrown took '+ gOfThWatchingTimeInYears +'%' + ' ' + 'of my life!');
  console.log('          ')
  console.log('Breaking Bad took '+ bBWatchingTimeInYears + '%' + ' ' + 'of my life!');
  console.log('          ')
  console.log('Good Girls took '+ gGWatchingTimeOfMyLife + '%' + ' ' + 'of my life!');
  console.log('          ')
  console.log('In Total:')
  console.log('In total: it took' + ' ' + watchingTimeOfMyLife + '%' + ' ' + 'of my life!')