import React, { PropTypes } from 'react';
import { Table } from 'antd';
import { rowLink } from 'util/NavigationUtils.jsx';

const { Column, ColumnGroup } = Table;

function fragileFormatter(status) {
  if (status) {
    return <span>fragile</span>;
  }
  return <span>non fragile</span>;
}

function BoxesTable({ boxes }) {
  if (boxes.length === 0) {
    return <div id="no-results">No boxes found!</div>;
  }
  return (
    <Table
      bordered
      dataSource={boxes}
      rowKey="id"
      onRowClick={rowLink}
    >
      <Column
        title="Name"
        dataIndex="name"
        key="name"
        className="header-centered"
      />
      <Column
        title="Location"
        dataIndex="location"
        key="location"
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
      <ColumnGroup title="Status">
        <Column
          title="Fragile"
          width="5%"
          dataIndex="isFragile"
          key="isFragile"
          className="header-centered"
          render={fragileFormatter}
        />
        <Column
          title="Capacità"
          width="5%"
          dataIndex="spaceStatus"
          key="spaceStatus"
          className="header-centered"
        />
        <Column
          title="Peso"
          width="5%"
          dataIndex="weightStatus"
          key="weightStatus"
          className="header-centered"
        />
      </ColumnGroup>
    </Table>
  );
}

BoxesTable.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object),
};

export default BoxesTable;
