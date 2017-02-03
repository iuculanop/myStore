import { connect } from 'react-redux';
import { createItem } from 'actions/';

// import presentational components here
import ItemActions from 'components/fe/ItemActions.jsx';

// importing data from the state
function mapStateToProps(state) {
  return {
    box: state.boxesInfo.box,
    items: state.itemsInfo.items,
  };
}

// importing actions in container component
const mapDispatchToProps = (dispatch) => ({
  onInsertItem: (item) => dispatch(createItem(item)),
});

const ReduxItemActions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemActions);

export default ReduxItemActions;
