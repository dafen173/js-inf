export const debag = 'https://learn.javascript.ru/debugging-chrome'



// https://medium.com/devschacht/brandon-morelli-learn-how-to-debug-javascript-with-chrome-devtools-4a8fb7db375c




//Пример:
const getExstention = (filename) => {
    if (typeof filename !== 'string') {
      throw new Error ('Invalid type of parameter')
    }
  
    const parts = filename.split('.')
  
    console.log(parts)
  
    //debugger
    return parts.length === 1 ? null : parts[parts.length - 1]
  }
  
  //console.log(getExstention('jjjj.fffff.exe'))
  
  getExstention('jjjj.fffff.exe')
  getExstention('jjjj.fffff.exe777777')
  
  console.trace()
  
  //getExstention('kkkkk.fffff.exe')
  
  //console.log(getExstention(777))
  
  //=============================================================
  
  
  

