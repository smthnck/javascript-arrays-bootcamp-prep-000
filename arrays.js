var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(a,e) {
  var n = [e,...a]
  return n
}

function destructivelyAddElementToBeginningOfArray(a,e) {
  a.unshift(e)
  return a
}

function addElementToEndOfArray(a,e) {
  var n = [...a,e]
  return n
}

function destructivelyAddElementToEndOfArray(a,e) {
  a.push(e)
  return a
}

function accessElementInArray(a,i) {
  return a[i]
}

function destructivelyRemoveElementFromBeginningOfArray(a) {
  a.unshift()
  return a
}

function 