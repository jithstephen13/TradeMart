import {legacy_createStore,compose,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { Authreducer } from "./Auth/auth.reducer"

 
 
import { solarpanelreducer } from "./solarpanel/solarpanel.reducer"
import { projectorreducer } from "./projector/projector.reducer"
import { medicinesreducer } from "./medicines/medicines.reducer"
import { Cartreducer } from "./Carts/Cart.reducer"

const rootReducer=combineReducers({
    solarpanel:solarpanelreducer,
    projector:projectorreducer,
    medicines:medicinesreducer,
    auth: Authreducer,
    Cart:Cartreducer
 
import { Cartreducer } from "./Cart/car.reducer"
import { Productreducer } from "./Product/product.reducer"
import AdminReducer from "./ADMIN/admin.reducer"

const rootReducer=combineReducers({
    product:Productreducer,
    cart:Cartreducer,
    auth: Authreducer,
    admin:AdminReducer

})

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))