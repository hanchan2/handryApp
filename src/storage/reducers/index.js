import {combineReducers} from 'redux';
import PlaceReducer from './placeReducer';

const appReducer = combineReducers({
  places: PlaceReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
