import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import { retrieveRules, retrieveRuleId, buildHumanReadableCondition } from 'util/jQueryBuilder.jsx';

const customStyles = {
  content: {
    position: 'absolute',
    top: '240px',
    left: '70px',
    right: '40px',
    bottom: 'auto',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    padding: '20px',
  },
  overlay: {
    zIndex: '1050',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const optionTemporal = [
  'before',
  'when',
  'after',
];

const optionRange = [
  'none',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
].map((v, i) => <option key={i} value={v}>{v} {!i || 'mins'}</option>);

function populateSelect(array, exclude, postfix) {
  const options = [];
  options.push(
    <option key="0" value="unselected">Select...</option>
  );
  for (let i = 0; i < array.length; i++) {
    if (exclude !== array[i]) {
      options.push(
        <option key={i + 1} value={array[i]}>{array[i]} {postfix}</option>
      );
    }
  }
  return options;
}

function showRange1(
  { valueRuleA, valueRelRuleA, valueRelRuleB, valueSecA, valueSecB, checkedYes, checkedNo },
  changeRelRuleB, changeSecA, changeSecB, checkYes, checkNo) {
  let result;
  if (valueRelRuleA === 'unselected') {
    result = <div></div>;
  } else if (valueRelRuleA === 'before' || valueRelRuleA === 'after') {
    result = (
      <div className="row">
        <span ref="overspan">
          <label htmlFor="seca" className="col-md-3 control-label">Range between </label>
          <div className="col-md-2">
            <select
              className="form-control"
              ref="seca"
              value={valueSecA}
              onChange={changeSecA}
            >
              {optionRange}
            </select>
          </div>
          <label htmlFor="secb" className="col-md-1 control-label">and </label>
          <div className="col-md-2">
            <select
              className="form-control"
              ref="secb"
              value={valueSecB}
              onChange={changeSecB}
            >
              {optionRange}
            </select>
          </div>
          <label htmlFor="status" className="col-md-1 control-label" >Overlaps? </label>
          <div className="col-md-2" ref="over">
            <label className="radio-inline">
              <input
                type="radio"
                name="optradio1"
                ref="yes"
                checked={checkedYes}
                onChange={checkYes}
              >
              </input> yes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="optradio1"
                ref="no"
                checked={checkedNo}
                onChange={checkNo}
              >
              </input> no
            </label>
          </div>
        </span>
      </div>
    );
  }
  return result;
}

function showCaseWhen(
  { valueRuleB, valueRelRuleA, valueRelRuleB, checkedYes, checkedNo },
  changeRelRuleB) {
  let result;
  if (valueRelRuleA === 'unselected') {
    result = null;
  } else if (valueRelRuleA === 'when' || checkedYes) {
    result = (
      <div className="row">
        <span ref="secpan">
          <label htmlFor="rule_rel_b" className="col-md-2 control-label" >and ends </label>
          <div className="col-md-2">
            <select
              className="form-control"
              ref="rule_rel_b"
              value={valueRelRuleB}
              onChange={changeRelRuleB}
            >
              {populateSelect(optionTemporal, null)}
            </select>
          </div>
          <label className="col-md-2 control-label"> {valueRuleB} ends</label>
        </span>
      </div>
    );
  }
  return result;
}

function showRange2({ valueRelRuleB, valueSecC, valueSecD }, changeSecC, changeSecD) {
  let result;
  if (valueRelRuleB === 'unselected' || valueRelRuleB === 'when') {
    result = null;
  } else {
    result = (
      <div className="row">
        <span ref="overspan">
          <label htmlFor="seca" className="col-md-3 control-label">Range between </label>
          <div className="col-md-2">
            <select
              className="form-control"
              ref="seca"
              value={valueSecC}
              onChange={changeSecC}
            >
              {optionRange}
            </select>
          </div>
          <label htmlFor="secb" className="col-md-1 control-label">and </label>
          <div className="col-md-2">
            <select
              className="form-control"
              ref="secb"
              value={valueSecD}
              onChange={changeSecD}
            >
              {optionRange}
            </select>
          </div>
        </span>
      </div>
    );
  }
  return result;
}

class ModalRuleTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: [],
      optionTemporal,
      optionRange,
    };
  }

  openModal = () => {
    const rules = retrieveRules();
    this.setState({
      modalIsOpen: true,
      rules,
      valueRuleA: 'unselected',
      valueRuleB: 'unselected',
      valueRelRuleA: 'unselected',
      valueRelRuleB: 'unselected',
      valueSecA: 'none',
      valueSecB: 'none',
      valueSecC: 'none',
      valueSecD: 'none',
      checkedYes: false,
      checkedNo: true,
    });
  }

  changeRuleA = (event) => {
    this.setState({
      valueRuleA: event.target.value,
    });
  }

  changeRuleB = (event) => {
    this.setState({
      valueRuleB: event.target.value,
    });
  }

  changeSecA = (event) => {
    this.setState({
      valueSecA: event.target.value,
    });
  }

  changeSecB = (event) => {
    this.setState({
      valueSecB: event.target.value,
    });
  }

  changeSecC = (event) => {
    this.setState({
      valueSecC: event.target.value,
    });
  }

  changeSecD = (event) => {
    this.setState({
      valueSecD: event.target.value,
    });
  }

  changeRelRuleA = (event) => {
    this.setState({
      valueRelRuleA: event.target.value,
      valueRelRuleB: 'unselected',
      valueSecA: 'none',
      valueSecB: 'none',
    });
  }

  changeRelRuleB = (event) => {
    this.setState({
      valueRelRuleB: event.target.value,
    });
  }

  checkYes = () => {
    this.setState({
      checkedYes: true,
      checkedNo: false,
    });
  }

  checkNo = () => {
    this.setState({
      checkedYes: false,
      checkedNo: true,
      valueRelRuleB: 'unselected',
    });
  }

  saveModal = () => {
    const display = buildHumanReadableCondition(this.state);
    const condition = {
      ruleA: retrieveRuleId(this.state.valueRuleA),
      relRuleA: this.state.valueRelRuleA,
      ruleB: retrieveRuleId(this.state.valueRuleB),
      relRuleB: this.state.valueRelRuleB,
      secRuleA: [this.state.valueSecA, this.state.valueSecB],
      secRuleB: [this.state.valueSecC, this.state.valueSecD],
      display,
    };
    this.props.onSaveClick(condition);
    this.setState({
      modalIsOpen: false,
    });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-xs btn-success" onClick={this.openModal}>
          <i className="glyphicon glyphicon-plus"></i>Add condition
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          className="Modal__Bootstrap modal-dialog modal-lg"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.closeModal}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">New temporal condition</h4>
            </div>
            <div className="modal-body row">
              <form className="form-horizontal col-md-11">
                <fieldset>
                  <div className="form-group" ref="modalform">
                    <div className="row">
                      <label className="col-md-2 control-label">
                        Rule
                      </label>
                      <div className="col-md-2">
                        <select
                          className="form-control"
                          ref="rule_a"
                          value={this.state.valueRuleA}
                          onChange={this.changeRuleA}
                        >
                          {populateSelect(this.state.rules, null)}
                        </select>
                      </div>
                      <label className="col-md-1 control-label">
                        starts
                      </label>
                      <div className="col-md-2">
                        <select
                          className="form-control"
                          ref="rule_rel_a"
                          value={this.state.valueRelRuleA}
                          onChange={this.changeRelRuleA}
                        >
                          {populateSelect(this.state.optionTemporal, null)}
                        </select>
                      </div>
                      <label className="col-md-1 control-label">
                        rule
                      </label>
                      <div className="col-md-2">
                        <select
                          className="form-control"
                          ref="rule_b"
                          value={this.state.valueRuleB}
                          onChange={this.changeRuleB}
                        >
                          {populateSelect(this.state.rules, this.state.valueRuleA)}
                        </select>
                      </div>
                      <label className="col-md-1 control-label">
                        starts
                      </label>
                    </div>
                    <div className="row-form-separator"></div>
                    {showRange1(
                       this.state,
                       this.changeRelRuleB,
                       this.changeSecA,
                       this.changeSecB,
                       this.checkYes,
                       this.checkNo
                     )}
                    <div className="row-form-separator"></div>
                    {showCaseWhen(
                       this.state,
                       this.changeRelRuleB
                     )}
                    <div className="row-form-separator"></div>
                    {showRange2(
                       this.state,
                       this.changeSecC,
                       this.changeSecD
                     )}
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                onClick={this.closeModal}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.saveModal}
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

ModalRuleTemp.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
};

export default ModalRuleTemp;
