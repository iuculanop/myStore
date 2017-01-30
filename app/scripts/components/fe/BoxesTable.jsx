import React, { PropTypes } from 'react';
import { Table } from 'antd';

const { Column, ColumnGroup } = Table;

function BoxesTable({ boxes }) {
  if (boxes.length === 0) {
    return <div id="no-results">No boxes found!</div>;
  }
  return (
    <Table
      bordered
      dataSource={boxes}
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
          dataIndex="height"
          key="height"
          className="header-centered"
        />
        <Column
          title="W"
          dataIndex="width"
          key="width"
          className="header-centered"
        />
        <Column
          title="D"
          dataIndex="depth"
          key="depth"
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
