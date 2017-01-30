import React, { PropTypes } from 'react';
import AddBox from 'components/modal/AddBox.jsx';

function BoxesActions({ boxes, onInsertBox }) {
  console.log(boxes);
  return (
    <div>
      <AddBox onInsertBox={onInsertBox} />
    </div>
  );
}

BoxesActions.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object),
  onInsertBox: PropTypes.func.isRequired,
};

export default BoxesActions;
