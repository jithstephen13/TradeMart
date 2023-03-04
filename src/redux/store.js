import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { Authreducer } from "./Authentication/auth.reducer";

import { solarpanelreducer } from "./solarpanel/solarpanel.reducer";
import { projectorreducer } from "./projector/projector.reducer";
import { medicinesreducer } from "./medicines/medicines.reducer";
import { Cartreducer } from "./Carts/Cart.reducer";

const rootReducer = combineReducers({
  solarpanel: solarpanelreducer,
  projector: projectorreducer,
  medicines: medicinesreducer,
  auth: Authreducer,
  Cart: Cartreducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
