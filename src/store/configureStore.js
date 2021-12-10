import { createStore, applyMiddleware, compose } from "redux";
import { devToolsEnhancer, composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import rootReducer from "./routeReducer";

export function configureStore() {
    // return createStore(
    //     rootReducer,
    //     applyMiddleware(thunk, devToolsEnhancer())
    // )
    return createStore(rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk),
            // other store enhancers if any
        ));
}


//redux devtools chrome extension