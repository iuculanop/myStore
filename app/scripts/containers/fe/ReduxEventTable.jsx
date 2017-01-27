import { connect } from 'react-redux';

import LoadableEventTable from 'components/fe/LoadableEventTable.jsx';

function isNotUndef(x) {
  return x !== undefined;
}

function mapStateToProps(state) {
  return {
    resultingIds: state.events.search.results,
    events: state.events.search.results.map(eventId => state.events.db[eventId])
                 .filter(isNotUndef).map(x => x.event).filter(isNotUndef),
    status: state.events.search.status,
  };
}

const ReduxEventTable = connect(
  mapStateToProps
)(LoadableEventTable);

export default ReduxEventTable;
