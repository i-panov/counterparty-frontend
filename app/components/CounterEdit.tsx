import * as React from "react";
import { connect } from "react-redux";
import { counterpartyFetchData} from "../actions/counterparty";
import {changePerson} from "../actions/editing";
import ContactEdit from "./ContactEdit";
import { cloneDeep } from "lodash";
import InputEdit from "./InputEdit";
import AddContact from "./AddContact";
import LegalEdit from "./LegalEdit";

interface IProps {
    fetchData: any,
    changePerson: any,
    items: any;
    hasErrored: any,
    isLoading: boolean
    id: any;
}

interface IState {
    contacts: any;
}

class CounterEdit extends React.Component<IProps, IState> {
    componentDidMount() {
        this.props.fetchData(this.props.id);
    }
    state: IState = {
        contacts: null
    }
    refs: {
        name: any;
        phone: any;
        email: any;
        name_responsible;
        phone_responsible;
        email_responsible;
    }
    setAgent(e) {
        this.props.changePerson(
            e,
            this.refs.name.state.editState,
            this.refs.phone.state.editState,
            this.refs.email.state.editState
            );
    }
    setResponsible(e) {
        this.props.changePerson(
            e,
            this.refs.name_responsible.state.editState,
            this.refs.phone_responsible.state.editState,
            this.refs.email_responsible.state.editState
        );
    }
    onShowContact(e) {
        alert(e.email);
    }
    render() {
        const {counterparty} = this.props.items;
        console.log(counterparty);
        if (counterparty.hasErrored) {
            return <p>Error: {counterparty.hasErrored}</p>;
        }
        if (counterparty.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className="view">
                <h1>Контактная информация контрагента</h1>
                <label className="italic">Компания: <LegalEdit id={this.props.id} idEntity={counterparty && counterparty.legalEntity && counterparty.legalEntity.id}/></label><br/>
                <label className="italic">Ф.И.О.:<InputEdit ref="name" editValue={counterparty && counterparty.bailee && counterparty.bailee.name}/></label> <br/>
                <label className="italic">Телефон:<InputEdit ref="phone" editValue={counterparty && counterparty.bailee && counterparty.bailee.phone}/> </label> <br/>
                <label className="italic">E-mail:<InputEdit ref="email" editValue={counterparty && counterparty.bailee && counterparty.bailee.email}/> </label> <br/>
                <div className="but new" onClick={() => this.setAgent(counterparty && counterparty.bailee && counterparty.bailee.id)}>Сохранить</div>
                <hr/>
                <h3>Ответственное лицо</h3>
                <label className="italic">Ф.И.О.:<InputEdit ref="name_responsible" editValue={counterparty && counterparty.person && counterparty.person.name}/></label> <br/>
                <label className="italic">Телефон:<InputEdit ref="phone_responsible" editValue={counterparty && counterparty.person && counterparty.person.phone}/> </label> <br/>
                <label className="italic">E-mail:<InputEdit ref="email_responsible" editValue={counterparty && counterparty.person && counterparty.person.email}/> </label> <br/>
                <div className="but new" onClick={() => this.setResponsible(counterparty && counterparty.person && counterparty.person.id)}>Сохранить</div>
                <hr/>
                <h3>Контактные лица</h3>
                <AddContact id={this.props.id}/>
                <br/>
                {counterparty && counterparty.legalEntity && counterparty.contactPersons.map((contact) => {return (
                    <ContactEdit key={contact.id} id={this.props.id} contact={contact}/>
                )})}
            </div>
        );
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.counterparty,
        hasErrored: state.counterpartyHasErrored,
        isLoading: state.counterpartyIsLoading,
        id: ownProps.params.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(counterpartyFetchData(id)),
        changePerson: (id, name, phone, email) => dispatch(changePerson(id, name, phone, email))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterEdit);