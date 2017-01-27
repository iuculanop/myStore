import React from 'react';

import { formatOccurrence } from 'util/DateFormatter.jsx';
import { ScopeIndicator, scopeToPanelClassName } from './Scopes.jsx';
import { CategoryIndicator } from './Categories.jsx';

import { ShortEventPropType, OccurrencesPropType } from 'util/PropTypes/EventPropType.jsx';

function OccurrencesText({ occurrences }) {
  return (<span>
      {occurrences.map(
         (occurrence, idx) => <span key={idx}>{formatOccurrence(occurrence)}<br /></span>
       )}
  </span>);
}
OccurrencesText.propTypes = {
  occurrences: OccurrencesPropType,
};

export function EventInnerShortPanel({ event }) {
  return (
    <div>
      <div className="col-md-6">
        <h3>
          {event.Name}
        </h3>
        <p className="small"><CategoryIndicator category={event.Category} /></p>
        <p className="small"><ScopeIndicator scope={event.Scope} /></p>
      </div>
      <div className="col-md-4 pull-right event-info-panel">
        <div className="list-group">
          <div className="list-group-item clearfix">
            <i className="fa fa-2x fa-fw fa-calendar fa-pull-right"></i>
            <OccurrencesText occurrences={event.Schedule.Occurrence} />
          </div>
          <div className="list-group-item clearfix">
            <i className="fa fa-2x fa-fw fa-compass fa-pull-right"></i>
            <strong>{event.Venue.Name}</strong>
            <span className="hidden-xs hidden-sm"><br />
              {event.Venue.Address.Street} <br />
              {event.Venue.Address.City} ({event.Venue.Address.Province})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
EventInnerShortPanel.propTypes = {
  event: ShortEventPropType,
};

export function EventShortPanel({ event }) {
  return (
    <div className="col-md-12">
      <div
        className={'panel panel-default panel-body event-panel ' +
          `${scopeToPanelClassName(event.Scope)}`}
      >
        <EventInnerShortPanel event={event} />
      </div>
    </div>
  );
}
EventShortPanel.propTypes = {
  event: ShortEventPropType,
};
