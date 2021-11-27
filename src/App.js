import React, {Component} from "react";
import {Routes, Route} from "react-router-dom";
import ReactRouter from "./components/reactRouter";
import ReactRouter2 from "./components/reactRouter2";

// const App = () => {
class App extends Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<ReactRouter/>}/>
                    <Route path="/router2" element={<ReactRouter2/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
