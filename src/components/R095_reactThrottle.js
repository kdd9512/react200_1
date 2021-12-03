import React, {Component} from "react";
import {throttle} from "lodash";

class R095_reactThrottle extends Component {

    throttleFunc = throttle(() => {
        console.log("Throttle API Call..")
    }, 1000);

    render() {
        return (
            <div>
                <h2>R095 ReactThrottle </h2>
                <h3>검색어 입력</h3>
                <input type="text" onChange={this.throttleFunc}/>
            </div>
        );
    }

}

export default R095_reactThrottle;