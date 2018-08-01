// Code your solution in this file
function findMatching (drivers,name){
  return drivers.filter(function driverName(driverName){
    return driverName === name;
  } );
}
