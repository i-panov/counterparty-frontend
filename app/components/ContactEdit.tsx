import * as React from "react";
import InputEdit from "./InputEdit";
import { connect } from "react-redux";
import {changePerson, deletePerson} from "../actions/editing";

interface IProps {
    id: any;
    contact: any;
    changePerson: any;
    deletePerson: any;
}

interface IState {
    editing: boolean;
    contactName: any;
    contactPhone: any;
    contactEmail: any;
}

class ContactEdit extends React.Component<IProps, IState> {
    componentDidMount() {
        this.props.contact;
    }
    state: IState = {
        editing: false,
        contactName: this.props.contact.name,
        contactPhone: this.props.contact.phone,
        contactEmail: this.props.contact.email
    }
    refs: {
        name: any;
        email: any;
        phone: any;
    }
    onClickEdit = () => {
        this.setState({editing: true});
    }
    onClickSave = (e) => {
        this.props.changePerson(
             e,
             this.refs.name.state.editState,
             this.refs.phone.state.editState,
             this.refs.email.state.editState
        );
        this.setState({editing: false,
            contactName: this.refs.name.state.editState,
            contactPhone: this.refs.phone.state.editState,
            contactEmail: this.refs.email.state.editState
        });
    }
    onClickDelete = (e) => {
        this.props.deletePerson(
            this.props.id,
            e
        );
    }
    renderNormal() {
        return(
            <div>
                <label className="italic">{this.state.contactName}</label><br/>
                <div className="but new" onClick={this.onClickEdit}>Редактировать</div>
                <div className="but delete" onClick={() => {this.onClickDelete(this.props.contact.id)}}>Удалить</div>
                <br/><br/>
            </div>
        );
    }
    renderForm() {
        return(
            <div>
                <InputEdit ref="name" editValue={this.state.contactName}/>
                <InputEdit ref="phone" editValue={this.state.contactPhone}/>
                <InputEdit ref="email" editValue={this.state.contactEmail}/>
                <div className="but new" onClick={() => {this.onClickSave(this.props.contact.id)}}>Сохранить</div>
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
        id: ownProps.id,
        contact: ownProps.contact
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePerson: (id, name, phone, email) => dispatch(changePerson(id, name, phone, email)),
        deletePerson: (id_counter, id_contact) => dispatch(deletePerson(id_counter, id_contact))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactEdit);