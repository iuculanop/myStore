import { connect } from 'react-redux';
import { createBox } from 'actions/';

// import presentational components here
import BoxesActions from 'components/fe/BoxesActions.jsx';

// importing data from the state
function mapStateToProps(state) {
  return {
    boxes: state.boxesInfo.boxes,
  };
}

// importing actions in container component
const mapDispatchToProps = (dispatch) => ({
  onInsertBox: (box) => dispatch(createBox(box)),
});

const ReduxBoxesActions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxesActions);

export default ReduxBoxesActions;
