import { connect } from 'react-redux';

// import presentational components here
import BoxSummary from 'components/fe/BoxSummary.jsx';

// importing data from the state
function mapStateToProps(state) {
  return {
    box: state.boxesInfo.box,
  };
}

// importing actions in container component
/*
const mapDispatchToProps = (dispatch) => ({
  onInsertBox: (box) => dispatch(createBox(box)),
});
*/

const ReduxBoxSummary = connect(
  mapStateToProps,
//  mapDispatchToProps,
)(BoxSummary);

export default ReduxBoxSummary;
