'use strict';
/**
 * @param {String} value (for property 'text')
 */
var lastString;
var lastTimeTag;
var stringIndex = 0;

export function update() {
  var today = new Date();
  var h = checkTime(today.getHours());
  var m = checkTime(today.getMinutes());
  var s = checkTime(today.getSeconds());
   
  let newString =  h + ":" + m;
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