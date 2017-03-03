'use strict';

// invoke as:
//import * as user from 'User/userActions';

import axios from 'axios';

export function fetchUser(id) {
  return function(dispatch) {
    dispatch({type: 'FETCHING_USER'});
    axios.get('path/to/user/'+id)
      .then((response) => {
      	dispatch({ type: 'FETCH_USER_FULFILLED', payload: response.data })
      })
      .catch((err) => {
      	dispatch({ type: 'FETCH_USER_ERROR', payload: err.msg });
      })
  }
}

export function editUser(id, data) {
  return function(dispatch) {
    dispatch({type: 'EDITING_USER'});
    axios.put('path/to/user/'+id, data)
      .then((response) => {
      	dispatch({ type: 'EDIT_USER_FULFILLED', payload: response.data })
      })
      .catch((err) => {
      	dispatch({ type: 'EDIT_USER_ERROR', payload: err.msg });
      })
  }
}