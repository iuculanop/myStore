import React, { PropTypes } from 'react';
import AddItem from 'components/modal/AddItem.jsx';

function ItemActions({ box, items, onInsertItem }) {
  console.log(box, items);
  return (
    <div className="to-right">
      <AddItem box={box} onInsertItem={onInsertItem} />
    </div>
  );
}

ItemActions.propTypes = {
  box: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object),
  onInsertItem: PropTypes.func.isRequired,
};

export default ItemActions;
