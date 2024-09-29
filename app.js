
var milisecond = 0;

var second = 0;
var minutes = 0;
var hours = 0;
var interval;


var milisec = document.querySelector("#milisec");
var sec = document.querySelector("#sec");
var min = document.querySelector("#min");
var hour = document.querySelector("#hour");



function start() {
    interval = setInterval(function(){
      milisecond++
      milisec.innerHTML = milisecond
      if(milisecond >= 100) {
        second++
        sec.innerHTML = second
        milisecond = 0
      }
      else if(second >= 60) {
        minutes++
        min.innerHTML = minutes
        second = 0
      } 
      else if(minutes >= 60){
        hour++
        hours.innerHTML = hour
        minutes = 0

      }


    },10)
}


function stop (){
  clearInterval(interval)
}


function reset() {
       milisecond = 0;
      second = 0;
      minutes = 0;
       hours = 0;

       milisec.innerHTML = milisecond
       sec .innerHTML = second
       min .innerHTML = minutes
       hour .innerHTML = hours
       
}
