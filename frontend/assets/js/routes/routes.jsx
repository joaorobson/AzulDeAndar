import React from 'react';
import {Route, Switch} from 'react-router-dom';
import StudentForm from "../forms/StudentForm";
export default class Routes extends React.Component {

  render = () => {

    return (
        <div>
            <Switch>
                <Route exact path="/ok/" component={StudentForm} />
            </Switch>
        </div>
    )
}
}
