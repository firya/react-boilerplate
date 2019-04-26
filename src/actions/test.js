import axios from 'axios';

export const SOME_ACTION = 'SOME_ACTION';
export const SOME_AJAX_ACTION = 'SOME_AJAX_ACTION';

export const doSomeAction = () => {
  return {
    type: SOME_ACTION, 
    data: [1, 2, 3]
  };
}

export const doSomeAjaxAction = () => {
  return {
    type: SOME_AJAX_ACTION, 
    payload: axios.get(`https://www.reddit.com/r/frontend.json`)
  };
}