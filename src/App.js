import React, {Component} from "react";
import {Routes, Route} from "react-router-dom";
import ReactRouter from "./components/ReactRouter";
import ReactRouter2 from "./components/ReactRouter2";
import Footer from "./components/template/Footer";
import Header from "./components/template/Header";
import R094 from "./components/R094_reactDebounce";

// const App = () => {
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<ReactRouter/>}/>
                    <Route path="/router2" element={<ReactRouter2/>}/>
                </Routes>
                <R094/>
                <Footer/>
            </div>
        );
    }
}

export default App;
