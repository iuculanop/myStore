import React from 'react';

// FIXME: It is only a stub now
export function CategoryIndicator({ category }) {
  return <span><i className="fa fa-pull-left fa-fw fa-university"></i>{category}</span>;
}

CategoryIndicator.propTypes = {
  category: React.PropTypes.string,
};
