import React from 'react';
import {Route, Switch} from 'react-router-dom';
import StudentForm from "../forms/StudentForm";
import StudentsList from "../pages/studentsList";
import ClassesList from "../pages/classesList";
import StudentsByClassList from "../pages/studentsByClassList";

export default class Routes extends React.Component {

  render = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/" component={StudentsList} />
                <Route exact path="/classes/" component={ClassesList} />
                <Route path="/classes/:class_name/" component={StudentsByClassList} />
                <Route render={() => <div><h1>404</h1><h2>Page not found</h2></div>} />
            </Switch>
        </div>
    )
}
}
