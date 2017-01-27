import React from 'react';
import EventTable from './EventTable.jsx';

import ProgressBar from 'components/generic/bootstrap/ProgressBar.jsx';
import statusPropType from 'util/PropTypes/statusPropType.jsx';

function LoadableEventTable({ events, resultingIds, status }) {
  if (status.msg === 'ERROR') {
    return (<div id="error-events" className="alert alert-danger">
      Error: {JSON.stringify(status.error.message) || status.msg}
    </div>);
  } // else ...
  if (status.msg === 'ONGOING') {
    return (<div id="searching-events" className="alert alert-info">
      <ProgressBar>
        <p className="text-center">Searching events...</p>
      </ProgressBar>
    </div>);
  } // else ...
  if (status.msg === 'FETCHING') {
    return (<div key="fetching-events" className="alert alert-info">
      <ProgressBar min={0} max={resultingIds.length} value={events.length}>
        <p className="text-center">
          Fetching event {events.length} of {resultingIds.length} results...
        </p>
      </ProgressBar>
    </div>);
  }
  return <EventTable key="events" events={events} />;
}
LoadableEventTable.propTypes = {
  resultingIds: React.PropTypes.arrayOf(React.PropTypes.string),
  events: EventTable.propTypes.events,
  status: statusPropType(['NOT_FIRED', 'ONGOING', 'FETCHING', 'COMPLETED', 'ERROR']).isRequired,
};


export default LoadableEventTable;
