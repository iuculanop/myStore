import React, { PropTypes } from 'react';
import { Row, Col, Table } from 'antd';
import ItemActions from 'containers/fe/ReduxItemActions.jsx';

const { Column, ColumnGroup } = Table;

function usedFormatter(status) {
  if (status) {
    return <span>Sì</span>;
  }
  return <span>No</span>;
}

function ItemTable({ items }) {
  if (items && items.length === 0) {
    return (
      <Row>
        <Col span={20}>
          <div id="no-results">No items found!</div>
        </Col>
        <Col span={4}>
          <ItemActions />
        </Col>
      </Row>
    );
  }
  return (
    <Table
      bordered
      dataSource={items}
      rowKey="id"
    >
      <Column
        title="Name"
        dataIndex="name"
        key="name"
        className="header-centered"
      />
      <Column
        title="Description"
        dataIndex="description"
        key="description"
        className="header-centered"
      />
      <Column
        title="Quantity"
        dataIndex="quantity"
        key="quantity"
        className="header-centered"
      />
      <ColumnGroup title="Size">
        <Column
          title="H"
          width="10%"
          dataIndex="height"
          key="height"
          className="header-centered"
        />
        <Column
          title="W"
          width="10%"
          dataIndex="width"
          key="width"
          className="header-centered"
        />
        <Column
          title="D"
          width="10%"
          dataIndex="depth"
          key="depth"
          className="header-centered"
        />
      </ColumnGroup>
      <Column
        title="In Use"
        width="5%"
        dataIndex="inUse"
        key="inUse"
        className="header-centered"
        render={usedFormatter}
      />
    </Table>
  );
}

ItemTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default ItemTable;
