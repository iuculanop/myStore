import { connect } from 'react-redux';

import EventSearchHeader from 'components/fe/EventSearchHeader.jsx';

import { DateQuery } from 'util/DateFormatter.jsx';

import { ROUTES } from 'routes/front.jsx';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
  return {
    criteria: {
      ...state.events.search.criteria,
      from: DateQuery.parse(state.events.search.criteria.from),
      to: DateQuery.parse(state.events.search.criteria.to),
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    performSearch: (criteria) => dispatch(
      push({
        pathname: ROUTES.EventSearchApp,
        query: {
          ...criteria,
          from: DateQuery.format(criteria.from),
          to: DateQuery.format(criteria.to),
        },
        state: {
          refresh: true,
        },
      })
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSearchHeader);
