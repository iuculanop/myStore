import React from 'react';
import AccordionPanel from 'components/generic/bootstrap/AccordionPanel.jsx';
import { CriteriaPropType } from 'util/PropTypes/CriteriaPropType.jsx';

// Require the styles
import './EventSearchHeader.scss';


const formatDateHeader = (date, prefix) => {
  if (!date || !date.isValid()) {
    return '';
  }
  return prefix + date.format('ll');
};

class EventSearchHeaderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: props.criteria.from,
      to: props.criteria.to,
    };
  }

  componentWillReceiveProps(nextProps) {
    // Override the state with the new props
    this.setState({
      from: nextProps.criteria.from,
      to: nextProps.criteria.to,
    });
  }

  handleChange = ({ from, to }) => {
    let cFrom = from || this.state.from;
    let cTo = to || this.state.to;

    if (cFrom.isAfter(cTo)) {
      const temp = cFrom;
      cFrom = cTo;
      cTo = temp;
    }

    this.setState({ from: cFrom, to: cTo });
  }

  handleChangeFrom = (from) => {
    this.handleChange({ from });
  }

  handleChangeTo = (to) => {
    this.handleChange({ to });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.performSearch({
      from: this.state.from,
      to: this.state.to,
    });
  }

  render() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="criteriaFrom" className="control-label">From:</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="criteriaTo" className="control-label">To:</label>
            </div>
          </div>
          <div className="form-group col-md-offset-8 col-md-4">
            <button
              type="submit" className="btn btn-default btn-block"
              onClick={this.handleSubmit}
            >
              <i className="fa fa-search"></i>{' '}Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
EventSearchHeaderForm.propTypes = {
  criteria: CriteriaPropType.isRequired,
  performSearch: React.PropTypes.func.isRequired,
};


function EventSearchHeader({ criteria, performSearch }) {
  const messages = {
    from: formatDateHeader(criteria.from, 'from '),
    to: formatDateHeader(criteria.to, 'to '),
  };
  const header = (
    <AccordionPanel.TitleHeader>
      Events {messages.from}{' '}{messages.to}
    </AccordionPanel.TitleHeader>
  );
  return (
    <AccordionPanel
      header={header}
      panelClassName="panel-eventsearchheader"
    >
      <EventSearchHeaderForm criteria={criteria} performSearch={performSearch} />
    </AccordionPanel>
  );
}
EventSearchHeader.propTypes = {
  criteria: CriteriaPropType,
  performSearch: React.PropTypes.func.isRequired,
};

export default EventSearchHeader;
