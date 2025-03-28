import * as React from "react";

interface IProps {
    editValue: any;
}

interface IState {
    editState: any;
}

class InputEdit extends React.Component<IProps, IState> {
    componentDidMount() {
        this.props.editValue;
        this.setEditValue();
    }
    state: IState = {
        editState: this.props.editValue
    }
    setEditValue = () => {
        let {editState} = this.state;
        this.setState({editState});
    }
    onClickInput = ( event: any ) => {
        let {editState} = this.state;
        editState = event.target.value;
        this.setState({editState});
    };
    render() {
        return(
            <div>
                <input type="text" onChange={this.onClickInput} defaultValue={this.state.editState}/>
            </div>
        );
    }
}

export default InputEdit;