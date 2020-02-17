// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function el(){
    if (el.revenue > revenue){
      return el
    }
  })
}