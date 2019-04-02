// Code your solution here:
const driversWithRevenueOver = function(drivers, num){
  return drivers.filter(driver => driver.revenue >= num );
};


const driverNamesWithRevenueOver = function(drivers, num){
  return driversWithRevenueOver(drivers, num).map(driver => driver.name);
};


const exactMatch = function(extendedDrivers, obj){
  return extendedDrivers.filter(driver => driver.name === obj.name || driver.revenue === obj.revenue);
};


const exactMatchToList = function(extendedDrivers, obj){
  return exactMatch(extendedDrivers, obj).map(driver => driver.name);
}
