import {render} from "react-dom";
import { Provider } from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import store from "./redux/store";
import App from "./components/app";
import EliquidListContainer from "./components/eliquidlist/eliquid-list-container";
import EliquidAdd from "./components/eliquidadd/eliquid-add";
import EliquidEdit from "./components/eliquidedit/eliquid-edit";
import EliquidDelete from "./components/eliquiddelete/eliquid-delete";
import EliquidDetails from "./components/eliquiddetails/eliquid-details";

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={EliquidListContainer} />
                <Route path="/eliquid/create" component={EliquidAdd} />
                <Route path="/eliquid/:id" component={EliquidDetails} />
                <Route path="/eliquid/:id/edit" component={EliquidEdit} />
                <Route path="/eliquid/:id/delete" component={EliquidDelete} />
            </Route>
        </Router>
    </Provider>
), document.getElementById("app"));
