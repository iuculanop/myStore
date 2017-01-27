import React from 'react';
import styles from './Scopes.css';

export const PossibleScopes = [
  'Scientifica e Scientifico-tecnologica',
  'Scienze giuridiche, politiche economiche e sociali',
  'Sanitaria',
  'Umanistica',
  '-',  // i.e. not available
]; // FIXME: hard-coded. Is there a better way?


/* eslint-disable quote-props */
const scopeToPanelClassNameMap = {
  'Scientifica e Scientifico-tecnologica': 'scitech',
  'Scienze giuridiche, politiche economiche e sociali': 'giupoecsoc',
  'Sanitaria': 'sanit',
  'Umanistica': 'umani',
};
/* eslint-enable quote-props */

export function scopeToPanelClassName(scope) {
  return styles[scopeToPanelClassNameMap[scope] || 'default'];
}

export function ScopeIndicator({ scope }) {
  let iconName;
  const style = {};
  switch (scope) {
    case 'Scientifica e Scientifico-tecnologica':
      iconName = 'fa-university'; style.color = 'blue'; break;
    case 'Sanitaria':
      iconName = 'fa-hospital-o'; style.color = 'red'; break;
    default:
      iconName = 'fa-calendar';
  }
  return (<span>
    <i className={`fa fa-pull-left fa-fw ${iconName}`} style={style}></i>
    {scope}
  </span>);
}
ScopeIndicator.propTypes = {
  scope: React.PropTypes.string,
};
