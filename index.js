
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (el){
    if (el.revenue > revenue){
     return el
    }
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(function (el){
    return el.name
  })
}


function exactMatch (drivers, condition) {
  return drivers.filter(function (driver) {
    let matches = false;

    for(const key in condition){
      matches = driver[key] === condition[key];
    }
    return matches;
  });
}