import _ from 'lodash';
import { FETCH_BOXES,
         FETCH_BOXES_COMPLETED,
         FETCH_BOX,
         FETCH_BOX_COMPLETED,
         CREATE_BOX,
         CREATE_BOX_COMPLETED,
} from 'actions';

const initialState = {
  boxes: [],
  box: {},
  loading: false,
};

const boxes = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOXES:
      return {
        ...state,
        box: {},
        loading: true,
      };
    case FETCH_BOXES_COMPLETED:
      return {
        ...state,
        boxes: action.payload,
        loading: false,
      };
    case FETCH_BOX:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOX_COMPLETED:
      return {
        ...state,
        box: action.payload,
        loading: false,
      };
    case CREATE_BOX:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BOX_COMPLETED:
      {
        if (action.error) {
          return {
            ...state,
            loading: false,
          };
        }
        const newBoxes = _.cloneDeep(state.boxes);
        newBoxes.push(action.payload);
        return {
          ...state,
          boxes: newBoxes,
          loading: false,
        };
      }
    default:
      return state;
  }
};

export default boxes;
