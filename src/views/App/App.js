import React from 'react';
import Header from '../../components/Header/Header.js';
import Wall from '../Wall/Wall.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <Route>
                    <Switch>
                        <Redirect exact from="/" to="/feed" />
                        <Route path="/feed">
                            <Wall />
                        </Route>
                    </Switch>
                </Route>
            </Router>
        </div>
    );
}

export default App;
