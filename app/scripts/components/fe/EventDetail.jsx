import React from 'react';

import { EventShortPanel } from './EventPanel.jsx';
import { ShortEventPropType } from 'util/PropTypes/EventPropType.jsx';


function EventDetail({ event }) {
  return <EventShortPanel event={event} />;
}
EventDetail.propTypes = {
  event: ShortEventPropType,
};

export default EventDetail;
