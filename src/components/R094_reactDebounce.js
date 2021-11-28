import React, {Component} from "react";
import {debounce} from "lodash";

class R094_reactDebounce extends Component {

    debounceFunc = debounce(() => {
        console.log("Debounce API Call...")
    }, 1000);

    render() {
        return (
            <div>
                <h2>검색어 입력</h2>
                <h3>lodash debounce 함수.</h3>
                <p>
                    onChange 는 현 상태가 변화하면 반응하여 실행되는 함수이므로,
                    원래 글자 하나를 입력할 때 마다 onChange 가 반응하여 console.log()가 실행되어
                    불필요한 작업이 늘어난다.
                </p>
                <p>
                    이 문제는 debounce 함수를 이용하여 방지할 수 있다.
                    debounce 는 마지막 함수 호출(onChange)이 끝난 뒤, 지정한 시간 이후에 실행된다(이 예제에서는 1초).
                </p>
                <br/>
                <input type="text" onChange={this.debounceFunc}/>
            </div>
        );
    }

}

export default R094_reactDebounce;