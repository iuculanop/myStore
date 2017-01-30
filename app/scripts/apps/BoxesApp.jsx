import React from 'react';
// import { Link } from 'react-router';
import { Row, Col } from 'antd';
import BoxesTable from 'containers/fe/ReduxBoxesTable.jsx';
import BoxesActions from 'containers/fe/ReduxBoxesActions.jsx';

// importing actions
import { fetchBoxes } from 'actions';

// import usrImg from 'images/icon-user.png';

class BoxesApp extends React.Component {
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
      <div>
        <Row>
          <Col span={8}>
            <h1>Scatole</h1>
          </Col>
          <Col span={8} offset={8}>
            <BoxesActions />
          </Col>
        </Row>
        <Row>
          <div className="vmg10">
            <BoxesTable />
          </div>
        </Row>
      </div>
    );
  }
}

function onEnterBoxesApp(store) {
  store.dispatch(fetchBoxes());
}

export { BoxesApp, onEnterBoxesApp } ;
