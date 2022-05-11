
const getExstention = (filename) => {
  if (typeof filename !== 'string') {
    throw new Error ('Invalid type of parameter')
  }

  const parts = filename.split('.')

  console.log(parts)

  return parts.length === 1 ? null : parts[parts.length - 1]
}

console.log(getExstention('fffffexe'))

getExstention('kkkkk.fffff.exe')

//console.log(getExstention(777))

//=============================================================
