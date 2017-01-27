import React, { PropTypes } from 'react';

class CompRuleSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  render() {
    return (
      <div className="box box-solid box-info box-nested">
        <div className="box-header">
          <h3 className="box-title">
            Settings
          </h3>
          <div className="box-tools pull-right">
            <button className="btn btn-box-tool" data-widget="collapse">
              <i className="fa fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="box-body">
          <form className="form-horizontal ng-pristine ng-valid">
            <fieldset>
              <div className="form-group">
                <label
                  htmlFor="comprulename"
                  className="col-md-3 control-label"
                >Composite rule name</label>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    ref="comprulename"
                    value={this.props.settings.name}
                    onInput={this.props.handleNameChange}
                    placeholder="Composite Rule Name..."
                  ></input>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="status" className="col-md-3 control-label">Status</label>
                <div className="col-md-6">
                  <label className="radio-inline">
                    <input type="radio" name="optradio1"></input>Testing
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio1"></input>Ready
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="visibility" className="col-md-3 control-label">Visibility</label>
                <div className="col-md-6">
                  <label className="radio-inline">
                    <input type="radio" name="optradio2"></input>Private
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="optradio2"></input>Shared
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="validity"
                  className="col-md-3 control-label"
                >Validity interval</label>
                <div className="col-md-6">
                  <select
                    className="form-control"
                    ref="validity"
                    value={this.props.settings.tempval}
                    onChange={this.props.handleTempValChange}
                  >
                    <option value="7">Since the beginning</option>
                    <option value="6">Since six months before</option>
                    <option value="5">Since one month before</option>
                    <option value="4">Since week before</option>
                    <option value="3">Since three days before</option>
                    <option value="2">Since two days before</option>
                    <option value="1">Since the day before</option>
                    <option value="0">The same day</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="action" className="col-md-3 control-label">Action</label>
                <div className="col-md-6">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    value={this.props.settings.message}
                    onChange={this.props.handleMessageChange}
                    placeholder="Message for the user..."
                  ></textarea>
                </div>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
CompRuleSettings.propTypes = {
  settings: PropTypes.object.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleTempValChange: PropTypes.func.isRequired,
  handleMessageChange: PropTypes.func.isRequired,
};

export default CompRuleSettings;
