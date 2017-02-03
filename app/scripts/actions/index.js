// import { retrieveEvent, retrieveEvents } from 'util/RetrieveEvents.jsx';
import { retrieveBoxes, retrieveBox, insertBox } from 'util/Ajax/boxes.jsx';
import { retrieveItems, retrieveItem, insertItem } from 'util/Ajax/items.jsx';

/* servira in futuro quando si fara la ricerca su dati gia caricati
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const SEARCH_EVENTS_COMPLETED = 'SEARCH_EVENTS_COMPLETED';
export const SEARCH_EVENTS_FETCH_COMPLETED = 'SEARCH_EVENTS_FETCH_COMPLETED';
 */

export const FETCH_BOXES = 'FETCH_BOXES';
export const FETCH_BOXES_COMPLETED = 'FETCH_BOXES_COMPLETED';

export const FETCH_BOX = 'FETCH_BOX';
export const FETCH_BOX_COMPLETED = 'FETCH_BOX_COMPLETED';

export const CREATE_BOX = 'CREATE_BOX';
export const CREATE_BOX_COMPLETED = 'CREATE_BOX_COMPLETED';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_COMPLETED = 'FETCH_ITEMS_COMPLETED';

export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ITEM_COMPLETED = 'FETCH_ITEM_COMPLETED';

export const CREATE_ITEM = 'CREATE_ITEM';
export const CREATE_ITEM_COMPLETED = 'CREATE_ITEM_COMPLETED';

export function fetchingBoxes() {
  return {
    type: FETCH_BOXES,
  };
}

export function fetchingBoxesCompleted(boxes, error = false) {
  return {
    type: FETCH_BOXES_COMPLETED,
    payload: boxes,
    error,
  };
}

export function fetchBoxes() {
  return (dispatch) => {
    dispatch(fetchingBoxes());
    return retrieveBoxes()
      .then(response => {
        dispatch(fetchingBoxesCompleted(response));
      }, eventerror => {
        dispatch(fetchingBoxesCompleted({ error: eventerror }, true));
        const error = new Error('Impossible to fetch Boxes' +
                                `Cause: ${eventerror.message || eventerror}`);
        error.error = eventerror;
        throw error;
      });
  };
}

export function fetchingBox() {
  return {
    type: FETCH_BOX,
  };
}

export function fetchingBoxCompleted(box, error = false) {
  return {
    type: FETCH_BOX_COMPLETED,
    payload: box,
    error,
  };
}

export function fetchBox(id) {
  return (dispatch) => {
    dispatch(fetchingBox());
    return retrieveBox(id)
      .then(response => {
        dispatch(fetchingBoxCompleted(response));
      }, eventerror => {
        dispatch(fetchingBoxCompleted({ error: eventerror }, true));
        const error = new Error('Impossible to fetch Boxes' +
                                `Cause: ${eventerror.message || eventerror}`);
        error.error = eventerror;
        throw error;
      });
  };
}

export function creatingBox() {
  return {
    type: CREATE_BOX,
  };
}

export function creatingBoxCompleted(box, error = false) {
  return {
    type: CREATE_BOX_COMPLETED,
    payload: box,
    error,
  };
}

export function createBox(box) {
  return (dispatch) => {
    dispatch(creatingBox());
    return insertBox(box)
      .then(response => {
        dispatch(creatingBoxCompleted(response));
      }, eventerror => {
        dispatch(creatingBoxCompleted({ error: eventerror }, true));
        const error = new Error('Impossible to insert Box' +
                                `Cause: ${eventerror.message || eventerror}`);
        error.error = eventerror;
        throw error;
      });
  };
}

export function fetchingItems() {
  return {
    type: FETCH_ITEMS,
  };
}

export function fetchingItemsCompleted(items, error = false) {
  return {
    type: FETCH_ITEMS_COMPLETED,
    payload: items,
    error,
  };
}

export function fetchItems() {
  return (dispatch) => {
    dispatch(fetchingItems());
    return retrieveItems()
      .then(response => {
        dispatch(fetchingItemsCompleted(response));
      }, eventerror => {
        dispatch(fetchingItemsCompleted({ error: eventerror }, true));
        const error = new Error('Impossible to fetch Items' +
                                `Cause: ${eventerror.message || eventerror}`);
        error.error = eventerror;
        throw error;
      });
  };
}

export function fetchingItem() {
  return {
    type: FETCH_ITEM,
  };
}

export function fetchingItemCompleted(item, error = false) {
  return {
    type: FETCH_ITEM_COMPLETED,
    payload: item,
    error,
  };
}

export function fetchItem(id) {
  return (dispatch) => {
    dispatch(fetchingItem());
    return retrieveItem(id)
      .then(response => {
        dispatch(fetchingItemsCompleted(response));
      }, eventerror => {
        dispatch(fetchingItemsCompleted({ error: eventerror }, true));
        const error = new Error('Impossible to fetch Items' +
                                `Cause: ${eventerror.message || eventerror}`);
        error.error = eventerror;
        throw error;
      });
  };
}

export function creatingItem() {
  return {
    type: CREATE_ITEM,
  };
}

export function creatingItemCompleted(item, error = false) {
  return {
    type: CREATE_ITEM_COMPLETED,
    payload: item,
    error,
  };
}

export function createItem(item) {
  return (dispatch) => {
    dispatch(creatingItem());
    return insertItem(item)
      .then(response => {
        dispatch(creatingItemCompleted(response));
        if (item.storedBox && item.storedBox !== null) {
          return retrieveBox(item.storedBox)
            .then(response2 => dispatch(fetchingBoxCompleted(response2)),
                  eventerror => {
                    dispatch(fetchingBoxCompleted({ error: eventerror }, true));
                    const error = new Error('Impossible to fetch Boxes' +
                                            `Cause: ${eventerror.message || eventerror}`);
                    error.error = eventerror;
                    throw error;
                  });
        }
        return 0;
      }, eventerror => {
        dispatch(creatingItemCompleted({ error: eventerror }, true));
        const error = new Error('Impossible to insert Item' +
                                `Cause: ${eventerror.message || eventerror}`);
        error.error = eventerror;
        throw error;
      });
  };
}

/*
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
 */

