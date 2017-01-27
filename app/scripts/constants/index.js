
export const ENTRYPOINTS = {
  EVENTS: 'http://localhost:9000/events/v2',
};


// =====================================================================
//
// EventSearchApp
//

export const EventSearchConstants = {
  defaultQueryParams: {
    from: '2015-06-01',
    to: '2015-07-31',
    // Uncomment when implemented
    //  venue: null,
    //  category: null,
    //  scope: null,
    //  lang: null,
  },
  // Query keys allowed as criteria keys
  criteriaKeys: [
    'from', 'to',
  ],
  // NOTE: Update also the React.PropTypes in file
  // ../util/PropTypes/CriteriaPropType.js
};
