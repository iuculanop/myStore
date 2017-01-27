import React, { PropTypes } from 'react';

import MG from 'metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

import _ from 'lodash';

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

console.log('cosa ho di lodash', _);

class MealsGraphs extends React.Component {
  componentDidMount() {
    // console.log('cosa ho di lodash', _);
    const data = MG.convert.date(_.cloneDeep(this.props.graphData), 'date', '%d-%m-%Y');
    // const data = MG.convert.date(this.props.graphData, 'date', '%d-%m-%Y');
    const multilinesData = setActivityDataMulti(data,
                                                ['breakfast',
                                                 'lunch',
                                                 'dinner',
                                                 'snacks']);
    MG.data_graphic({
      data: multilinesData,
      width: 800,
      height: 400,
      right: 40,
      interpolate: 'linear',
      full_width: true,
      target: this.mealsGraph,
      animate_on_load: true,
      legend: ['Colazione',
               'Pranzo',
               'Cena',
               'Fuori Pasto'],
      legend_target: this.legendDiv,
      // x_accessor: 'date',
      // y_accessor: 'sedentaryActivity',
    });
  }

  setMealsGraphRef = (ref) => { this.mealsGraph = ref; }
  setLegendDivRef = (ref) => { this.legendDiv = ref; }

  render() {
    return (
      <div className="row">
        <div className="col-sm-9" ref={this.setMealsGraphRef}></div>
        <div className="col-sm-3">
          <div ref={this.setLegendDivRef}></div>
        </div>
      </div>
    );
  }
}

MealsGraphs.propTypes = {
  graphData: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export { MealsGraphs };
