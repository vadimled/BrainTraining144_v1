import types from '../../store/types'

export function setLoading(status) {
  return {
    type: types.SET_LOADING,
    payload: status
  }
}

