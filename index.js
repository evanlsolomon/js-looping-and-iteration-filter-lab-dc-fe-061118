// Code your solution in this file
function findMatching (drivers,name){
  return drivers.filter(function driverName(driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  } );
}

function fuzzyMatch (drivers,partialName){
  let lengthOfName = partialName.length;
  return drivers.filter(function fuzzyName(fuzzyName){
    return fuzzyName
  })
}