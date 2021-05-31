/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const CHANGE_DURATION = createActionName ('CHANGE_DURATION');
export const REMOVE_TAG = createActionName ('REMOVE_TAG');
export const ADD_TAG = createActionName ('ADD_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDuration = payload => ({payload, type: CHANGE_DURATION});
export const removeTag = payload => ({payload, tye: REMOVE_TAG});
export const addTag = payload => ({payload, tye: ADD_TAG});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: action.payload,
      };
    case REMOVE_TAG:
      return {
        ...statePart,
        tag: action.payload,
      };
    case ADD_TAG:
      return {
        ...statePart,
        tag: action.payload,
      };
    default:
      return statePart;
  }
}
