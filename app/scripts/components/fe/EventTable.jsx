import React from 'react';
import { Link } from 'react-router';

import { EventShortPanel } from './EventPanel.jsx';
import { ShortEventPropType } from 'util/PropTypes/EventPropType.jsx';
import { ROUTES } from 'routes/front.jsx';

function EventTable({ events }) {
  if (events.length === 0) {
    return <div id="no-results" className="alert alert-info">No events found!</div>;
  } // else ...
  return (
    <div className="panel-group row">
      {events.map((event) =>
        <Link to={`${ROUTES.EventDetailApp}/${event.Id}`} key={event.Id}>
          <EventShortPanel event={event} />
        </Link>)}
    </div>);
}
EventTable.propTypes = {
  events: React.PropTypes.arrayOf(ShortEventPropType),
};


export default EventTable;
