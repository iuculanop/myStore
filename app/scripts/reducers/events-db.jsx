import { FETCH_EVENT,
         FETCH_EVENT_COMPLETED,
       } from 'actions';

const defaultStateDb = {
  // <EventID> : {
  //   status: {
  //     msg: ...    // one of FETCHING, ERROR, OK
  //     error: ...  // present iff msg === 'ERROR', must be instanceof Error
  //   },
  //   event: ...  // the event object, present iff status.msg === 'OK'
  // }
};

function db(state = defaultStateDb, action) {
  if (!action) return state;
  switch (action.type) {
    case FETCH_EVENT:
      return {
        ...state,
        [action.payload]: { status: { msg: 'FETCHING' } },
      };
    case FETCH_EVENT_COMPLETED:
      if (action.error) {
        return {
          ...state,
          [action.payload.Id]: {
            status: {
              msg: 'ERROR',
              error: action.payload.error,
            },
          },
        };
      } // else ...
      return {
        ...state,
        [action.payload.Id]: {
          status: { msg: 'OK' },
          event: action.payload,
        },
      };
    default:
      return state;
  }
}

export default db;
