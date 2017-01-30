import { connect } from 'react-redux';

// import presentational components here
import BoxesTable from 'components/fe/BoxesTable.jsx';

// importing data from the state
function mapStateToProps(state) {
  return {
    boxes: state.boxes.boxes,
    isLoading: state.boxes.loading,
  };
}

const ReduxBoxesTable = connect(
  mapStateToProps
)(BoxesTable);

export default ReduxBoxesTable;
