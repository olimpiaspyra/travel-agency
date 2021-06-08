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
export const REMOVE_TAGS = createActionName ('REMOVE_TAGS');
export const ADD_TAGS = createActionName ('ADD_TAGS');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDuration = payload => ({payload, type: CHANGE_DURATION});
export const removeTags = payload => ({payload, type: REMOVE_TAGS});
export const addTags = payload => ({payload, type: ADD_TAGS});

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
      console.log (statePart, action.payload.type, action.payload.value);
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: (action.payload.value)},
      };
    case REMOVE_TAGS:
      return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag !== action.payload),
      };
    case ADD_TAGS:
      // console.log (statePart, action.payload);
      return {
        ...statePart,
        // tags: [...statePart, action.payload],
        tags: statePart.tags.concat(action.payload),
      };
    default:
      return statePart;
  }
}
