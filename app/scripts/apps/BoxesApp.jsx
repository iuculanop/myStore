import React from 'react';
// import { Link } from 'react-router';
import { Row, Col } from 'antd';

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
          <Col span={8} offset={8}>Pulsantiera azioni</Col>
        </Row>
        <Row>
          <p> tabella delle scatole esistenti </p>
        </Row>
      </div>
    );
  }
}

export default BoxesApp ;
