import { PUSH_TEMPCONDITION } from 'actions';

const condition = (state, action) => {
  switch (action.type) {
    case PUSH_TEMPCONDITION:
      return {
        id: action.id,
        properties: action.payload,
      };
    default:
      return state;
  }
};

const conditions = (state = [], action) => {
  switch (action.type) {
    case PUSH_TEMPCONDITION:
      return [
        ...state,
        condition(undefined, action),
      ];
    default:
      return state;
  }
};

export default conditions;
