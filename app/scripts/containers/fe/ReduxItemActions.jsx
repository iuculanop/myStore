import { connect } from 'react-redux';
import { createItem } from 'actions/';

// import presentational components here
import BoxesActions from 'components/fe/BoxesActions.jsx';

// importing data from the state
function mapStateToProps(state) {
  return {
    box: state.boxesInfo.box,
    items: state.itemsInfo.item,
  };
}

// importing actions in container component
const mapDispatchToProps = (dispatch) => ({
  onInsertItem: (item) => dispatch(createItem(item)),
});

const ReduxItemActions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoxesActions);

export default ReduxItemActions;
