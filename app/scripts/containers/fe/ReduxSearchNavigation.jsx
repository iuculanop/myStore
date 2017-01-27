import { connect } from 'react-redux';

import SearchNavigation from 'components/fe/SearchNavigation.jsx';
import { ROUTES } from 'routes/front.jsx';
import QS from 'util/QueryString.jsx';

const mapStateToProps = (state, ownProps) => {
  const idx = state.events.search.results.indexOf(ownProps.eventId);
  const props = { currentId: ownProps.eventId, inSearch: idx >= 0 };
  if (idx >= 0) {
    if (idx > 0) {
      props.prevId = state.events.search.results[idx - 1];
    }
    if (idx < state.events.search.results.length - 1) {
      props.nextId = state.events.search.results[idx + 1];
    }
    props.searchURL = `${ROUTES.EventSearchApp}?${QS.stringify(state.events.search.criteria)}`;
  } else {
    props.searchURL = ROUTES.EventSearchApp;
  }
  return props;
};

const ReduxEventDetail = connect(
  mapStateToProps
)(SearchNavigation);

export default ReduxEventDetail;
