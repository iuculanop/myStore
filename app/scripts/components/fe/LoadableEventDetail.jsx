import React from 'react';

import EventDetail from './EventDetail.jsx';
import statusPropType from 'util/PropTypes/statusPropType.jsx';


function LoadableEventDetail({ event, status }) {
  switch (status.msg) {
    case 'ERROR':
      return (<div id="error-event" className="alert alert-danger">
        Error: {status.error.message}
      </div>);
    case 'FETCHING':
      return (<div id="searching-events" className="alert alert-info">
        Fetching event...
      </div>);
    case 'OK':
      if (event) {
        return <EventDetail event={event} />;
      }
      break;
    default:
      // do nothing
  }
  return (<div id="error-event" className="alert alert-danger">
        Error while interpreting the received result. Retrieved {JSON.stringify(status)}
  </div>);
}
LoadableEventDetail.propTypes = {
  eventId: React.PropTypes.string.isRequired,
  event: EventDetail.propTypes.event,
  status: statusPropType(['FETCHING', 'ERROR', 'OK']).isRequired,
};

export default LoadableEventDetail;
