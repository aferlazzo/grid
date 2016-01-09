"use strict";
(function() {
/*
 * name: addFour(argument1)
 * argument1: a numeric value
 * description: Adds 4 to the value passed as argument1
 * returns: a sum of argument1 and 4
 */
  var addFour = function(value) {
      if (parseInt(value, 10) === "NaN") {
          console.log("Error non-numeric value '" + value, + "' passed to addFour function");
          return "NaN";
      }
      return value + 4;
  };

/*
 * name: addTen(argument1)
 * argument1: a numeric value
 * description: Adds 10 to the value passed as argument1
 * returns: a sum of argument1 and 10
 */
  var addTen = function(value) {
    if (typeof value != "number") {
      console.log("Error: non-numeric value '" + value + "' passed to addTen function");
      return "NaN";
    }
      return value + 10;
  };

 /*
  *  Start of grid.js   
  */
  console.log("This is grid.js");

  if (addFour(4) != 8) {
    alert("Major Error: 4 + 4  did not equal 8");
  } 

  if (addTen("X") != "NaN") {
    alert("Major Error: Added 10 to a non-numeric value");
  }
})();