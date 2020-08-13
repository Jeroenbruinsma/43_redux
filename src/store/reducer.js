import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import countriesReducer from './countries/reducer'
import detailsReducer from './details/reducer'
import userReducer from './user/reducer'

const reducer = combineReducers({
  countries: countriesReducer,
  details : detailsReducer,
  user: userReducer
});

export default reducer;