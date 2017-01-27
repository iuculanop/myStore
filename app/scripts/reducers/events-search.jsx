import { SEARCH_EVENTS,
         SEARCH_EVENTS_COMPLETED,
         SEARCH_EVENTS_FETCH_COMPLETED,
       } from 'actions';

const defaultStateSearch = {
  criteria: {
  },
  results: [],
  status: {
    msg: 'NOT_FIRED',    // may be one of NOT_FIRED ONGOING FETCHING COMPLETED ERROR
    // error: null,      // error is present iff msg === 'ERROR'
  },
};

export function search(state = defaultStateSearch, action) {
  if (!action) return state;
  switch (action.type) {
    case SEARCH_EVENTS:
      return {
        ...state,
        criteria: action.payload,
        status: { msg: 'ONGOING' },
      };
    case SEARCH_EVENTS_COMPLETED:
      if (action.error) {
        return {
          ...state,
          status: { msg: 'ERROR', error: action.payload },
        };
      } // else ...
      return {
        ...state,
        results: action.payload.EventIds,
        status: { msg: 'FETCHING' },
      };
    case SEARCH_EVENTS_FETCH_COMPLETED:
      if (action.error) {
        return {
          ...state,
          status: { msg: 'ERROR', error: action.payload },
        };
      } // else ...
      return {
        ...state,
        status: { msg: 'COMPLETED' },
      };
    default:
      return state;
  }
}

export default search;
