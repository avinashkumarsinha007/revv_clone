import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { AuthReducer } from "./Auth/AuthReducer";
import { ExploreCarsReducer } from "./ExploreCars/exploreCarsReducer";
import { carReducer } from "./Car/carReducer";



const rootReducer = combineReducers({
  auth: AuthReducer,
  carExplore: ExploreCarsReducer,
  singleCar:carReducer
});

const customThunks = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const composedEnhancer = compose(
  applyMiddleware(customThunks),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composedEnhancer);
export { store };
