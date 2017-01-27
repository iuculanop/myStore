import { retrieveEvent, retrieveEvents } from 'util/RetrieveEvents.jsx';

export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const SEARCH_EVENTS_COMPLETED = 'SEARCH_EVENTS_COMPLETED';
export const SEARCH_EVENTS_FETCH_COMPLETED = 'SEARCH_EVENTS_FETCH_COMPLETED';

export const FETCH_EVENT = 'FETCH_EVENT';
export const FETCH_EVENT_COMPLETED = 'FETCH_EVENT_COMPLETED';

let nextTempConditionId = 0;

export const PUSH_TEMPCONDITION = 'PUSH_TEMPCONDITION';

export const LIST_TEMPCONDITIONS = 'LIST_TEMPCONDITIONS';

export function pushTempCondition(condition) {
  return {
    type: PUSH_TEMPCONDITION,
    payload: condition,
    id: nextTempConditionId++,
  };
}

export function listTempConditions(conditions) {
  return {
    type: LIST_TEMPCONDITIONS,
    payload: conditions,
  };
}

export function pushTempConditionStore(condition) {
  return (dispatch) => {
    dispatch(pushTempCondition(condition)); // inform we are pushing in store
  };
}

export function searchEvents(criteria) {
  return {
    type: SEARCH_EVENTS,
    payload: criteria,
  };
}

export function searchEventsCompleted(events, error = false) {
  return {
    type: SEARCH_EVENTS_COMPLETED,
    payload: events,
    error,
  };
}

export function searchEventsFetchCompleted(events, error = false) {
  return {
    type: SEARCH_EVENTS_FETCH_COMPLETED,
    payload: events,
    error,
  };
}

export function fetchEvent(eventId) {
  return {
    type: FETCH_EVENT,
    payload: eventId,
  };
}

export function fetchEventCompleted(event, error = false) {
  return {
    type: FETCH_EVENT_COMPLETED,
    payload: event,
    error,
  };
}

export function fetchEventRemote(eventId) {
  return (dispatch) => {
    dispatch(fetchEvent(eventId));  // Inform we are fetching
    return retrieveEvent(eventId)
      .then(eventresponse => {
        dispatch(fetchEventCompleted(eventresponse));
      }, eventerror => {
        dispatch(fetchEventCompleted({ Id: eventId, error: eventerror }, true));
        const error = new Error(`Impossible to fetch event ${eventId} ` +
                                `Cause: ${eventerror.message || eventerror}`);
        error.error = eventerror;
        throw error;
      });
  };
}

export function fetchEventRemoteIfNeeded(eventId) {
  return (dispatch, getState) => {
    // If the state is already present in the DB
    if (getState().events.db[eventId] && getState().events.db[eventId].status.msg === 'OK') {
      return dispatch(fetchEventCompleted(getState().events.db[eventId].event));
    } // ... otherwise
    return dispatch(fetchEventRemote(eventId));
  };
}

export function searchEventsRemote(criteria) {
  return (dispatch) => {
    dispatch(searchEvents(criteria)); // Inform that we are requesting the list of events
    retrieveEvents(criteria)          // Actually performs the search
      .then(searchresponse => {       // ..Search successful
        dispatch(searchEventsCompleted(searchresponse));  // Inform that the search is finished
        const fetchingPromises =      // Fetch all the events
          searchresponse.EventIds.map((eventId) => dispatch(fetchEventRemoteIfNeeded(eventId)));
        Promise.all(fetchingPromises) // Did we successfully fetch all the events ?
          .then(allfetchresponse => { // YES
            dispatch(searchEventsFetchCompleted(allfetchresponse));
          }, allfetcherror => {       // NO
            dispatch(searchEventsFetchCompleted(allfetcherror, true));
          });
      }, error => {                   // ..Search failed
        dispatch(searchEventsCompleted(error, true));
      });
  };
}
