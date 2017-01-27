import React, { PropTypes } from 'react';

const Condition = ({ onClick, cond }) => (
  <p>
    <button type="button" className="btn btn-xs btn-danger" onClick={onClick}>
      <i className="glyphicon glyphicon-remove"></i>
    </button>
    <span className="display-condition">{cond.display}</span>
  </p>
);

Condition.propTypes = {
  onClick: PropTypes.func.isRequired,
  cond: PropTypes.object.isRequired,
};

const Conditions = ({ conditions, onClickDel }) => {
  const result = (
    <div id="conditions">
      {conditions.map((cond, index) =>
        <Condition
          key={index}
          cond={cond}
          onClick={() => onClickDel(index)}
        />
       )}
    </div>
  );
  return result;
};

Conditions.propTypes = {
  conditions: PropTypes.arrayOf(PropTypes.object),
  onClickDel: PropTypes.func.isRequired,
};

export default Conditions;
