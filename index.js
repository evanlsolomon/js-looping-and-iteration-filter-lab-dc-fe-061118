// Code your solution in this file
function findMatching (drivers,name){
  return drivers.filter(function isAMatch(driverName){
    return driverName === name;
  } );
}
