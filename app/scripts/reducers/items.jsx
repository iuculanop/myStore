import _ from 'lodash';
import { FETCH_ITEMS,
         FETCH_ITEMS_COMPLETED,
         FETCH_ITEM,
         FETCH_ITEM_COMPLETED,
         CREATE_ITEM,
         CREATE_ITEM_COMPLETED,
} from 'actions';

const initialState = {
  items: [],
  item: {},
  loading: false,
};

const itemsInfo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        item: {},
        loading: true,
      };
    case FETCH_ITEMS_COMPLETED:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case FETCH_ITEM:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ITEM_COMPLETED:
      return {
        ...state,
        item: action.payload,
        loading: false,
      };
    case CREATE_ITEM:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ITEM_COMPLETED:
      {
        if (action.error) {
          return {
            ...state,
            loading: false,
          };
        }
        const newItems = _.cloneDeep(state.items);
        newItems.push(action.payload);
        return {
          ...state,
          items: newItems,
          loading: false,
        };
      }
    default:
      return state;
  }
};

export default itemsInfo;
