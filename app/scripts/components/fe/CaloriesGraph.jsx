import React, { PropTypes } from 'react';

import MG from 'metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

class CaloriesGraphs extends React.Component {
  componentDidMount() {
    const data = this.props.graphData;

    MG.data_graphic({
      data,
      width: 300,
      height: 200,
      right: 60,
      full_width: true,
      target: this.caloriesGraph,
      animate_on_load: true,
      x_accessor: 'date',
      y_accessor: 'caloriesburned',
    });
  }

  setCaloriesGraphRef = (ref) => { this.caloriesGraph = ref; }
  setLegendDivRef = (ref) => { this.legendDiv = ref; }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12" ref={this.setCaloriesGraphRef}></div>
        <div className="col-sm-12">
          <div ref={this.setLegendDivRef}></div>
        </div>
      </div>
    );
  }
}

CaloriesGraphs.propTypes = {
  graphData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export { CaloriesGraphs };
