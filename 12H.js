'use strict';

var lastString;
var lastTimeTag;
var stringIndex = 0;

export function update() {
  var today = new Date();
  var h = today.getHours();
 

  let amPm = "AM"
  if (h >= 12) { 
    if (h == 12) {
      amPm = "PM";
    }
    else 
      if(h > 12) {
        h = today.getHours() - 12;
        amPm = "PM";
      }
    }
    else 
      if (h == 0) {
        h = 12;
      }
 
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  
  
  let newString =  h + ":" + m  + ":" + s + " " + amPm;  
  if (newString != lastString) {
    lastString = newString;
    thisLayer.text = newString.replace('$', engine.userProperties.name);
  }
}
 
export function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  
  return i;
}