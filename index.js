// Code your solution in this file
function findMatching(driversArray, name) {
  return driversArray.filter(driver => driver.toLowerCase() == name.toLowerCase())
}

function fuzzyMatch(driversArray, matchingLetters) {
  let matchLength = matchingLetters.length
  return driversArray.filter(driver => {
    return driver.substring(0, matchLength) == matchingLetters
  })
}

function matchName(driversObject, name) {
  return driversObject.filter(driverObject => {
    return driverObject['name'] == name
  })
}
