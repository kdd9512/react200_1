import React, {Component} from "react";
import axios from "axios";

class R096_floatingPopulationList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi();
    }

    callFloatPopulListApi = async () => {
        axios.get("http://openapi.seoul.go.kr:8088/sample/xml/SPOP_LOCAL_RESD_DONG/1/5/",
            {}).then(resp => {
            try {
                this.setState({
                    responseFPList: resp
                });
            } catch (e) {
                alert(e)
            }
        }).catch(err => {
            alert(err);
            return false;
        })
    }

    render() {
        return (
            <>
                <table class="table_ty1 fp_tlist">
                    <tr>
                        <th>Row</th>
                        <th>기준일</th>
                        <th>시간대</th>
                        <th>행정동코드</th>
                        <th>총생활인구수</th>
                    </tr>
                </table>
                <table class="table_ty2 fp_tlist">
                    <tr class="hidden_type">
                        {this.state.responseFPList.data}
                    </tr>
                </table>
            </>
        );
    }


}

export default R096_floatingPopulationList;