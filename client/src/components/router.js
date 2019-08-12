import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Contact  from "./pages/contact"
import TaskNew from "./tasks/new"
import Tasks from "./tasks/index"
import TasksShow from "./tasks/show"
import TasksEdit from "./tasks/edit"
import TasksDelete from "./tasks/delete"

function Routes () {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/tasks/new" component={TaskNew}/>
            <Route exact path="/tasks" component={Tasks}/>
            <Route exact path="/tasks/:id" component={TasksShow}/>
            <Route exact path="/tasks/:id/edit" component={TasksEdit}/>
            <Route exact path="/tasks/:id/delete" component={TasksDelete}/>
        </Switch>
    );
}

export default Routes;