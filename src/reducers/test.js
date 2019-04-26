import { SOME_ACTION, SOME_AJAX_ACTION } from "../actions/test";

export default function reducer(state = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case SOME_ACTION: {
      return { ...state, data: action.data }
    }
    case `${SOME_AJAX_ACTION}_PENDING`: {
      return { ...state, fetching: true, fetched: false }
    }
    case `${SOME_AJAX_ACTION}_FULFILLED`: {
      return { ...state, fetching: false, fetched: true, data: action.payload }
    }
    case `${SOME_AJAX_ACTION}_REJECTED`: {
      return { ...state, fetching: false, fetched: false, error: action.payload }
    }
  }
  return state;
}