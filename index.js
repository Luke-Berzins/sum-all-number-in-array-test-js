function sumItems(array) {
  if (Array.isArray(array)) {
    return array.reduce((accum, val) => accum + sumItems(val), 0)
  } else {
    return array
  }

}

module.exports = sumItems;