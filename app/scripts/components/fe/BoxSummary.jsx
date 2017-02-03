import React, { PropTypes } from 'react';
import { Row, Col, Card } from 'antd';
import ItemTable from 'components/fe/ItemTable.jsx';

class BoxSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    const isFragile = this.props.box ? 'Sì' : 'No';
    const desc = this.props.box.description || 'Descrizione non disponibile';
    return (
      <div>
        <Row>
          <Col span={16}>
            <h1>{this.props.box.name}</h1>
            <p>{desc}</p>
            <div className="vmg10">
              <ItemTable items={this.props.box.items} />
            </div>
          </Col>
          <Col span={7} offset={1}>
            <Card>
              <Row>
                <Col span={12}>
                  <p>
                    <strong>Locazione:</strong>
                    {this.props.box.location}
                  </p>
                  <p>
                    <strong>Dimensione:</strong>
                    {this.props.box.height}x{this.props.box.width}x{this.props.box.depth}
                  </p>
                </Col>
                <Col span={12}>
                  <p>
                    <strong>Fragile:</strong>
                    {isFragile}
                  </p>
                  <p>
                    <strong>Peso:</strong>
                    {this.props.box.weightStatus}
                  </p>
                  <p>
                    <strong>Capacità:</strong>
                    {this.props.box.spaceStatus}
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

BoxSummary.propTypes = {
  box: PropTypes.object.isRequired,
};

export default BoxSummary;
