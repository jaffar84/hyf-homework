// for regular week starting from Sunday
const weekDays = ['sunday','monday','tuesday','wedensday','thursday','friday','saturday'];
//console.log(weekDays[16%7]) //16 days after Sun
//wd= weekDays.indexOf('th');
//console.log(wd); 
var currDay = new Date(); // gives us the date of today
today = currDay.getDay() // gives us the day's NUMBER of today from sunday
//todayDay= console.log(today); 
//console.log(weekDays[today%7]); // if the event on sunday, days left for the event
todayIs = [weekDays[today]]; // gives us the day's NAME of today BASED ON THE NUMBER ABOVE
function getEventWeekday(numberOfEventDay) {
    nextEvent = (today+numberOfEventDay)%7;
    return weekDays[nextEvent];
}
ev = getEventWeekday(11);
console.log('The event will be held on '+ ev + '11 ' +' days ahead, from today ' + '('+  todayIs+ '),'
+ currDay);
// what will we do if we want to held the event on another day rether than today?
