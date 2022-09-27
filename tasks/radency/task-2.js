function loadGrain(levels) {
  
    if (levels.length <= 2) return 0
    
    const resultState = levels.reduce((state, level, ind, levels) => {
      if (level > state.currentBorderHeight) {
        state.currentBorderHeight = level
        state.currentBorderInd = ind
      } else if (level === state.currentBorderHeight) {
        // go to the next element
      } else if (level < state.currentBorderHeight) {
          if (level > levels[ind-1] && level < levels[ind+1]) {
              state.amount += state.currentBorderHeight - level
          } else if ( level > levels[ind-1] ) {
              state.amount = state.amount + (state.currentBorderHeight - level)
              state.amount = state.amount - (state.currentBorderHeight - level) * (ind - state.currentBorderInd)
              state.currentBorderHeight = level
              state.currentBorderInd = ind
          } else if (ind === levels.length - 1) {
              state.amount = state.amount + 0
          } else {
              state.amount += state.currentBorderHeight - level
          }                
      }
      
      //console.log(state)
      return state
    }, {
      // initial state
      currentBorderHeight: 0,
      currentBorderInd: 0,
      amount: 0
    })
    
    return resultState.amount
  }
  
  
  console.log(loadGrain([4, 1, 3])) // 2
  console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])) // 7
  console.log(loadGrain([2, 0, 1, 5, 2, 7])) // 6
  console.log(loadGrain([2, 4, 2])) // 0
  console.log(loadGrain([7, 4])) // 0
  console.log(loadGrain([5, 2, 4, 2 , 3])) // 3
  console.log(loadGrain([5, 2, 4, 2 , 1, 3, 1, 2])) //   6