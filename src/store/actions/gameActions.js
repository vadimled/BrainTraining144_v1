import types from '../../store/types'

export function set144List(data) {
  return {
    type: types.SET_144_LIST,
    payload: data
  }
}

export function setCurrentGameType(type) {
  return {
    type: types.SET_CURRENT_GAME_TYPE,
    payload: type
  }
}

export function checkinSelectedFigure(id) {
  return {
    type: types.CHECKIN_SELECTED_FIGURE,
    payload: id
  }
}

