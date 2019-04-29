import { end } from 'types'
export const TimeReducer = (state = { end: '' }, action) => {
  const { type, payload } = action

  switch (type) {
    case end:
      return Object.assign({}, state, {
        end: payload
      })

    default:
      return state
  }
}
