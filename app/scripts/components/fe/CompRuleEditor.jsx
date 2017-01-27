import React, { PropTypes } from 'react';
import $ from 'jquery';
import { rebuildQueryBuilderRules } from 'util/jQueryBuilder.jsx';

const queryBuilderObj = {
  plugins: ['bt-tooltip-errors', 'sortable'],

  filters: [
    {
      id: 'caloriesintakeday',
      label: 'Calories (intake) - ALL DAY',
      type: 'integer',
    },
    {
      id: 'caloriesintakelunch',
      label: 'Calories (intake) - LUNCH',
      type: 'integer',
    },
    {
      id: 'caloriesintakedinner',
      label: 'Calories (intake) - DINNER',
      type: 'integer',
    },
    {
      id: 'carbs',
      label: 'Carbs',
      type: 'integer',
    },
    {
      id: 'fat',
      label: 'Fat',
      type: 'integer',
    },
    {
      id: 'protein',
      label: 'Protein',
      type: 'integer',
    },
    {
      id: 'cholesterol',
      label: 'Cholesterol',
      type: 'integer',
    },
    {
      id: 'sugars',
      label: 'Sugars',
      type: 'integer',
    },
    {
      id: 'fibre',
      label: 'Fibre',
      type: 'integer',
    },
    {
      id: 'mood',
      label: 'Mood',
      type: 'string',
      plugin: 'selectize',
      plugin_config: {
        valueField: 'id',
        labelField: 'name',
        searchField: 'name',
        sortField: 'id',
        create: true,
        maxItems: 1,
        plugins: ['remove_button'],
        onInitialize: () => {
          const that = this;
          if (localStorage.moodData === undefined) {
            $.getJSON('mood.json', (data) => {
              localStorage.moodData = JSON.stringify(data);
              data.forEach((item) => {
                that.addOption(item);
              });
            });
          } else {
            JSON.parse(localStorage.moodData).forEach((item) => {
              that.addOption(item);
            });
          }
        },
      },
      valueSetter: (rule, value) => {
        rule.$el.find('.rule-value-container input')[0].selectize.setValue(value);
      },
    },
    {
      id: 'bedexits',
      label: 'Bed exits',
      type: 'integer',
      validation: {
        min: 0,
        max: 10,
      },
      plugin: 'slider',
      plugin_config: {
        min: 0,
        max: 10,
        value: 0,
      },
      valueSetter: (rule, value) => {
        rule.$el.find('.rule-value-container input').slider('setValue', value);
      },
      valueGetter: (rule) => (
        [rule.$el.find('.rule-value-container input').slider('getValue').toString()]
      ),
    },
    {
      id: 'hourssleep',
      label: 'Hours of sleep',
      type: 'integer',
    },
    {
      id: 'sleeplatency',
      label: 'Sleep latency',
      type: 'integer',
      validation: {
        min: 0,
        max: 120,
      },
      plugin: 'slider',
      plugin_config: {
        min: 0,
        max: 120,
        value: 0,
      },
      valueSetter: (rule, value) => {
        rule.$el.find('.rule-value-container input').slider('setValue', value);
      },
      valueGetter: (rule) => (
        [rule.$el.find('.rule-value-container input').slider('getValue').toString()]
      ),
    },
    {
      id: 'awakenings',
      label: 'Sleep awakenings',
      type: 'integer',
      validation: {
        min: 0,
        max: 10,
      },
      plugin: 'slider',
      plugin_config: {
        min: 0,
        max: 10,
        value: 0,
      },
      valueSetter: (rule, value) => {
        rule.$el.find('.rule-value-container input').slider('setValue', value);
      },
      valueGetter: (rule) => (
        [rule.$el.find('.rule-value-container input').slider('getValue').toString()]
      ),
    },
    {
      id: 'caloriesburned',
      label: 'Calories (burned)',
      type: 'integer',
    },
    {
      id: 'duration',
      label: 'Activity duration',
      type: 'integer',
    },
    {
      id: 'distance',
      label: 'Distance (activity)',
      type: 'integer',
      validation: {
        min: 0,
        max: 50,
      },
      plugin: 'slider',
      plugin_config: {
        min: 0,
        max: 50,
        value: 0,
      },
      valueSetter: (rule, value) => {
        rule.$el.find('.rule-value-container input').slider('setValue', value);
      },
      valueGetter: (rule) => (
        [rule.$el.find('.rule-value-container input').slider('getValue').toString()]
      ),
    },
    {
      id: 'steps',
      label: 'Steps',
      type: 'integer',
    },
  ],
};

class CompRuleEditor extends React.Component {
  componentDidMount() {
    $(this.refs.builder)
      .on('afterCreateRuleInput.queryBuilder', (e, rule) => {
        if (rule.filter.plugin === 'selectize') {
          rule.$el.find('.rule-value-container').css('min-width', '200px')
            .find('.selectize-control')
            .removeClass('form-control');
        }
      });

    if (this.props.loadedQuery) {
      const loadedRules = rebuildQueryBuilderRules(this.props.loadedQuery);
      queryBuilderObj.rules = loadedRules;

      $(this.refs.builder)
        .queryBuilder(queryBuilderObj);
    } else {
      $(this.refs.builder)
        .queryBuilder(queryBuilderObj);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loadedQuery) {
      const loadedRules = rebuildQueryBuilderRules(nextProps.loadedQuery);
      queryBuilderObj.rules = loadedRules;

      $(this.refs.builder).queryBuilder('destroy');

      $(this.refs.builder)
        .queryBuilder(queryBuilderObj);
    } else {
      $(this.refs.builder)
        .queryBuilder(queryBuilderObj);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="box box-solid box-info box-nested">
        <div className="box-header">
          <h3 className="box-title">
            Rules Editor
          </h3>
          <div className="box-tools pull-right">
            <button className="btn btn-box-tool" data-widget="collapse">
              <i className="fa fa-minus"></i>
            </button>
          </div>
        </div>
        <div className="box-body">
          <div id="builder" ref="builder"></div>
        </div>
      </div>
    );
  }
}

CompRuleEditor.propTypes = {
  loadedQuery: PropTypes.object,
};

export default CompRuleEditor;

