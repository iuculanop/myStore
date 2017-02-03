import React, { PropTypes } from 'react';
// import { Link } from 'react-router';
import BoxSummary from 'containers/fe/ReduxBoxSummary.jsx';

// importing actions
import { fetchBox } from 'actions';

// import usrImg from 'images/icon-user.png';

class BoxEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <BoxSummary />
    );
  }
}

BoxEditor.propTypes = {
  params: PropTypes.object.isRequired,
};

function onEnterBoxEditor(store, nextState) {
  console.log('Entering route BoxEditor with id:', nextState.params.id);
  store.dispatch(fetchBox(nextState.params.id));
}

export { BoxEditor, onEnterBoxEditor } ;
