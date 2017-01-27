import React, { PropTypes } from 'react';

import MG from 'metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

function setActivityDataMulti(data, fields) {
  const result = [];
  for (let i = 0; i < fields.length; i++) {
    result[i] = [];
  }
  for (let i = 0; i < data.length; i++) {
    const actualDate = data[i];
    for (let y = 0; y < fields.length; y++) {
      const obj = { date: actualDate.date, value: actualDate[fields[y]] };
      result[y].push(obj);
    }
  }
  return result;
}

class ActivityGraphs extends React.Component {
  componentDidMount() {
    const data = MG.convert.date(this.props.graphData, 'date', '%d-%m-%Y');
    const multilinesData = setActivityDataMulti(data,
                                                ['sedentaryActivity',
                                                 'lightActivity',
                                                 'moderateActivity',
                                                 'strongActivity']);
    MG.data_graphic({
      data: multilinesData,
      width: 800,
      height: 400,
      right: 40,
      full_width: true,
      target: this.activityGraph,
      animate_on_load: true,
      legend: ['Attività sedentaria',
               'Attività leggera',
               'Attività moderata',
               'Attività intensa'],
      legend_target: this.legendDiv,
      // x_accessor: 'date',
      // y_accessor: 'sedentaryActivity',
    });
  }

  setActivityGraphRef = (ref) => { this.activityGraph = ref; }
  setLegendDivRef = (ref) => { this.legendDiv = ref; }

  render() {
    return (
      <div className="row">
        <div className="col-sm-9" ref={this.setActivityGraphRef}></div>
        <div className="col-sm-3">
          <div ref={this.setLegendDivRef}></div>
        </div>
      </div>
    );
  }
}

ActivityGraphs.propTypes = {
  graphData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export { ActivityGraphs };
