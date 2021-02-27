

module.export = getDate;

function getDate(){

var options = {
weekday: 'long',
day: 'numeric',
month: 'long'
};
var today = new Date();
var currentDay = today.toLocaleDateString("en-us",options);
return currentDay;

}
