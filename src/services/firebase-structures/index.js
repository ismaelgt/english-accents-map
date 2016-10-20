/**
 * Return an array of {key, value} objects from a Firebase snapshot
 *
 * @param  {firebase.database.DataSnapshot} snapshot
 * @return {Array}
 */
export function objectSnapshotToArray (snapshot) {
  const orderedArray = []
  snapshot.forEach(function (item) {
    orderedArray.push({ key: item.key, value: item.val() })
  })
  return orderedArray
}

/**
 * Return an array of {key, value} objects from an object of the form
 * {'key1': 'value1', 'key2': 'value', ...}
 *
 * @param  {Object} object
 * @return {Array}
 */
export function objectToArray (object) {
  return Object.keys(object).map((key) => ({ key: key, value: object[key] }))
}
