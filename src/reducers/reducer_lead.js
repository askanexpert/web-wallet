import React from 'react';

import {ACTION_LEAD_CAPTURE} from '../actions/index';

export default function(state = {}, action) {
    // In case of successful submission
    switch(action.type) {
      case ACTION_LEAD_CAPTURE:
        return {
          submitted: true,
          email: action.payload.data.lead.email
        };
      default:
        return state;
    }
}
