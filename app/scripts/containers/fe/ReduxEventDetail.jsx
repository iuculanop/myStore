import { connect } from 'react-redux';

import LoadableEventDetail from 'components/fe/LoadableEventDetail.jsx';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => ({
  eventId: ownProps.eventId,
  event: _.get(state.events.db, `${ownProps.eventId}.event`),
  status: _.get(state.events.db, `${ownProps.eventId}.status`),
});

const ReduxEventDetail = connect(
  mapStateToProps
)(LoadableEventDetail);

export default ReduxEventDetail;
