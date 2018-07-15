// add solution here
function theBeatlesPlay(arrayMusician,arrayInstrument) {
  // create empty array stored in a var
  var array = []
  // for loop, loops over array of musicians
  // first loop: create a string using first index of musician array, and first index of instrument, `${arrayMusician[i]} plays ${arrayInstrument[i]}`, add the string to the empty array created
  for (var i = 0; i < arrayMusician.length && i < arrayInstrument.length; i++) {
    array.push(`${arrayMusician[i]} plays ${arrayInstrument[i]}`)
  }
  
  return array
}