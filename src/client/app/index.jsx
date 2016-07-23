import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import App from "./components/app";
import EliquidListIndex from "./components/eliquidlist/eliquid-list-index";
import EliquidAdd from "./components/eliquidadd/eliquid-add";
import EliquidEdit from "./components/eliquidedit/eliquid-edit";
import EliquidDelete from "./components/eliquiddelete/eliquid-delete";
import EliquidDetails from "./components/eliquiddetails/eliquid-details";

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={EliquidListIndex} />
            <Route path="/eliquid/create" component={EliquidAdd} />
            <Route path="/eliquid/:id" component={EliquidDetails} />
            <Route path="/eliquid/:id/edit" component={EliquidEdit} />
            <Route path="/eliquid/:id/delete" component={EliquidDelete} />
        </Route>
    </Router>
), document.getElementById("app"));
