
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

function exactMatch(drivers, obj){
  return drivers.filter( function (el){
    if (Object.values(obj)[0] === el.name){
      return el
    }
  })
}