import {render} from "react-dom";
import { Provider } from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import store from "./redux/store";
import * as actions from "./redux/actions";
import App from "./components/app";
import EliquidListContainer from "./components/eliquidlist/eliquid-list-container";
import EliquidAddContainer from "./components/eliquidadd/eliquid-add-container";
import EliquidEdit from "./components/eliquidedit/eliquid-edit";
import EliquidDelete from "./components/eliquiddelete/eliquid-delete";
import EliquidDetails from "./components/eliquiddetails/eliquid-details";

// bootstrap the app with its data by dispatching an async action (via
// middleware redux-thunk) which returns a promise. When the promise
// resolves the callback will call render.
store.dispatch(actions.bootstrapEliquids()).then(() => {
    console.log("index module dispatched action bootstrapEliquids");
    render((
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={EliquidListContainer} />
                    <Route path="/eliquid/create" component={EliquidAddContainer} />
                    <Route path="/eliquid/:id" component={EliquidDetails} />
                    <Route path="/eliquid/:id/edit" component={EliquidEdit} />
                    <Route path="/eliquid/:id/delete" component={EliquidDelete} />
                </Route>
            </Router>
        </Provider>
    ), document.getElementById("app"));
});
