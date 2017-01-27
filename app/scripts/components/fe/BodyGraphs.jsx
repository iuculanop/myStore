import React, { PropTypes } from 'react';

import MG from 'metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

class BodyGraphs extends React.Component {
  componentDidMount() {
    const data = MG.convert.date(this.props.graphData, 'date', '%d-%m-%Y');

    MG.data_graphic({
      data,
      width: 300,
      height: 200,
      right: 60,
      full_width: true,
      target: this.bodyGraph,
      animate_on_load: true,
      x_accessor: 'date',
      y_accessor: 'weight',
    });
  }

  setBodyGraphRef = (ref) => { this.bodyGraph = ref; }
  setLegendDivRef = (ref) => { this.legendDiv = ref; }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12" ref={this.setBodyGraphRef}></div>
        <div className="col-sm-12">
          <div ref={this.setLegendDivRef}></div>
        </div>
      </div>
    );
  }
}

BodyGraphs.propTypes = {
  graphData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export { BodyGraphs };
