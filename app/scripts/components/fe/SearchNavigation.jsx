import React from 'react';

import ButtonLink from 'components/generic/bootstrap/ButtonLink.jsx';
import ButtonGroup from 'components/generic/bootstrap/ButtonGroup.jsx';

import { ROUTES } from 'routes/front.jsx';

import styles from './SearchNavigation.scss';

const commonBtnProps = {
  className: 'btn btn-lg btn-default',
};

function SearchNavigation({ inSearch, prevId, nextId, searchURL }) {
  return (
    <div className={`col-md-12 ${styles.searchNavigation}`}>
      <ButtonGroup justified>
        <ButtonLink {...commonBtnProps} href={searchURL}>
          <i className={`fa ${inSearch ? 'fa-reply' : 'fa-search'}`} aria-hidden></i>
          <span className="hidden-xs hidden-sm">
            {' '}{(inSearch) ? 'Back' : 'Search'}
          </span>
        </ButtonLink>
        <ButtonLink
          {...commonBtnProps}
          href={`${ROUTES.EventDetailApp}/${prevId}`} disabled={!prevId}
        >
          <i className="fa fa-chevron-left" aria-hidden></i>
          <span className="hidden-xs hidden-sm">
            {' '}Previous event
          </span>
        </ButtonLink>
        <ButtonLink
          {...commonBtnProps}
          href={`${ROUTES.EventDetailApp}/${nextId}`} disabled={!nextId}
        >
          <span className="hidden-xs hidden-sm">
            Next event{' '}
          </span>
          <i className="fa fa-chevron-right" aria-hidden></i>
        </ButtonLink>
      </ButtonGroup>
    </div>
  );
}
SearchNavigation.propTypes = {
  currentId: React.PropTypes.string.isRequired,
  inSearch: React.PropTypes.bool.isRequired,
  prevId: React.PropTypes.string,
  nextId: React.PropTypes.string,
  searchURL: React.PropTypes.string,
};

export default SearchNavigation;
