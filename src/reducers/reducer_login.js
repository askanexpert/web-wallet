import React from 'react';

import {ACTION_LOGIN} from '../actions/index';

export default function(state = {}, action) {
    // In case of successful submission
    switch(action.type) {
      case ACTION_LOGIN:
        return {
          loggedin: true,
          email: action.payload.data.email
        };
      default:
        return state;
    }
}
