const initialState = { supportType: [] }




function toggleSupport (state = initialState, action){
    let nextState
    switch (action.type) {
        case 'TOGGLE_SUPPORT':
          const supportTypeIndex = state.supportType.findIndex(supportlist => supportlist.id === action.value.id )
          if (supportTypeIndex !== -1){
              nextState = {
                  ...state,
                  supportType: state.supportType.filter( (supportlist, index) => index !== supportTypeIndex)
              }
          }
          else {
              nextState = {
                  ...state,
                  supportType: [ ...state.supportType, action.value ]
              }
          }
            return nextState || state
            

        default:
            return state
    }
}

export default toggleSupport