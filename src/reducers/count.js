const initialState = {
  number: 0
}

export default function update(state = initialState, action) {
  if (action.type === 'INCREASE') {
    return { number: state.number + 1 }
  }
  else if (action.type === 'DECREASE') {
    return { number: state.number - 1 }
  }
  return state
}
