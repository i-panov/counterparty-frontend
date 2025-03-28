import * as React from "react";
import { connect } from "react-redux";
import { upload } from "../actions/upload";
import "./Import_xls.less";

interface IState {
    file: any
}
interface IProps {
    upload: any
}

class Import_xls extends React.Component<any, IState>  {

    handleChange(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("file", e.target.files[0]);
        this.props.upload(formData)
    }

    render() {
        return (
            <div className="wrap">
                <h1>Импорт контрагентов</h1>
                <form onSubmit={(e)=>this.handleChange(e)}>
                    <input className="fileInput" type="file" onChange={(e)=>this.handleChange(e)} />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        upload: (file) => dispatch(upload(file))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Import_xls);
