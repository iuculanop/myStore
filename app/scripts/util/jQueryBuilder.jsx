import $ from 'jquery';

export function retrieveRules() {
  const rules = [];
  $('.new_rule').each(function extractName() {
    rules.push((this.innerHTML).replace('&nbsp;&nbsp;', ''));
  });
  return rules;
}

export function retrieveRuleId(fakeID) {
  let string = "span:contains('";
  string += fakeID;
  string += "')";
  const realID = $(string)
    .next()
    .children()
    .first()
    .val();
  return realID;
}

export function resetQueryBuilder() {
  $('#builder').queryBuilder('reset');
}

export function getQueryBuilderState() {
  return $('#builder').queryBuilder('getRules');
}

export function rebuildQueryBuilderRules(objFromDb) {
  const rulesJQB = {};
  rulesJQB.condition = objFromDb.condition;
  rulesJQB.rules = objFromDb.rules;

  return rulesJQB;
}

export function buildHumanReadableCondition(condition) {
  let string = 'Rule ';
  string += condition.valueRuleA;
  if (condition.valueRelRuleA !== 'when') {
    if (condition.checkedNo) {
      string += ' starts and ends ';
      string += condition.valueRelRuleA;
      string += ' rule ';
      string += condition.valueRuleB;
      if (condition.valueRelRuleA === 'before') {
        string += ' starts. ';
      } else if (condition.valueRelRuleA === 'after') {
        string += ' ends. ';
      }
      if (condition.valueSecA !== 'none') {
        string += '[range: between ';
        string += condition.valueSecA;
        string += ' and ';
        string += condition.valueSecB;
        string += ' mins]';
      }
      return string;
    }
    if (!condition.checkedNo) {
      string += ' starts ';
      string += condition.valueRelRuleA;
      string += ' rule ';
      string += condition.valueRuleB;
      string += ' starts';
    }

    if (condition.valueSecA !== 'none') {
      string += ' [range: between ';
      string += condition.valueSecA;
      string += ' and ';
      string += condition.valueSecB;
      string += ' mins] ';
    }
  } else {
    string += ' starts ';
    string += condition.valueRelRuleA;
    string += ' ';
    string += condition.valueRuleB;
    string += ' starts';
  }

  string += ' and ends ';
  string += condition.valueRelRuleB;
  string += ' rule ';
  string += condition.valueRuleB;
  string += ' ends.';

  if (condition.valueRelRuleB !== 'when' && condition.valueSecC !== 'none') {
    string += '[range: between ';
    string += condition.valueSecC;
    string += ' and ';
    string += condition.valueSecD;
    string += ' mins]';
  }

  return string;
}

