import * as React from "react";
import { connect } from "react-redux";
import {addPerson} from "../actions/editing";
import InputEdit from "./InputEdit";

interface IProps {
    id: any;
    addPerson: any;
}

interface IState {
    editing: any;
}

class AddContact extends React.Component<IProps, any> {
    componentDidMount() {
        this.props.id;
    }
    state: IState = {
        editing: false
    }
    refs: {
        name: any;
        email: any;
        phone: any;
    }
    onClickEdit = () => {
        this.setState({editing: true});
    }
    onClickAdd = () => {
        if (this.refs.name.state.editState === "" || this.refs.phone.state.editState === "" || this.refs.name.state.editState === "") {
            alert("Заполните все поля!");
        }
        else {
            this.props.addPerson(
                this.props.id,
                this.refs.name.state.editState,
                this.refs.phone.state.editState,
                this.refs.email.state.editState
            );
            this.setState({editing: false})
        }
    }
    onClickBack = () => {
        this.setState({editing: false});
    }
    renderNormal() {
        return(
            <div>
                <div  className="but new" onClick={this.onClickEdit}>Добавить контактое лицо</div>
                <br/><br/>
            </div>
        );
    }
    renderForm() {
        return(
            <div>
                <label className="italic">Ф.И.О.: <InputEdit ref="name" editValue=""/></label>
                <label className="italic">Телефон: <InputEdit ref="phone" editValue=""/></label>
                <label className="italic">E-mail: <InputEdit ref="email" editValue=""/></label>
                <div className="but new" onClick={this.onClickAdd}>Сохранить</div>
                <div className="but new" onClick={this.onClickBack}>Назад</div>
                <br/><br/>
            </div>
        );
    }
    render() {
        if (this.state.editing) {
            return (
                this.renderForm()
            );
        }
        else {
            return(
                this.renderNormal()
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: (id, name, phone, email) => dispatch(addPerson(id, name, phone, email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);