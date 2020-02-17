
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (el){
    if (el.revenue > revenue){
     return el
    }
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  driversWithRevenueOver(drivers, revenue).map(function (el){
    return el.name
  })
}