import React, { PropTypes } from 'react';
import ModalRuleTemp from 'components/fe/ModalRuleTemp.jsx';
import Conditions from 'components/fe/TempConditions.jsx';

// import {Conditions} from 'components/fe/TempConditions.jsx';

// const defPopulate = (v, i)
// function MiaSelect({ onChange, value, array, populate, makeLabels })
// <select
// className="form-control"
// ref="rule_a"
// value={value}
// onChange={onChange}
// >
// {array.map((v, i) => <option key)}
// </select>

class CompRuleTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      rules: [],
    };
  }

  render() {
    return (
      <div className="box box-solid box-info box-nested">
        <div className="box-header">
          <h3 className="box-title">
            Temporal Conditions
          </h3>
          <div className="box-tools pull-right">
            <button className="btn btn-box-tool" data-widget="collapse">
              <i className="fa fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="box-body">
          <Conditions
            conditions={this.props.conds}
            onClickDel={this.props.delTemp}
          />
          <ModalRuleTemp onSaveClick={this.props.addTemp} />
        </div>
      </div>
    );
  }
}

CompRuleTemp.propTypes = {
  addTemp: PropTypes.func.isRequired,
  delTemp: PropTypes.func.isRequired,
  conds: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CompRuleTemp;
