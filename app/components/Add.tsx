import * as React from "react";
import { connect } from "react-redux";
import { addData } from "../actions/items";
import SelectList from "./SelectList";
import "./Add.less";

interface IProps {
    items: any;
    addData: any;
    isLoading: boolean;
    error: any
}

interface IState {
    id: number;
    name: string;
    email: string;
    phone: string;
    contact: any;
    name_contact: string;
    email_contact: string;
    phone_contact: string;
    name_responsible: string;
    email_responsible: string;
    phone_responsible: string;
}

class Add extends React.Component<IProps, IState> {
    state: IState = {
        id: 1,
        name: "",
        email: "",
        phone: "",
        contact: [],
        name_contact: "",
        email_contact: "",
        phone_contact: "",
        name_responsible: "",
        email_responsible: "",
        phone_responsible: ""
};

    handleOnChange = (value) => {
        this.setState({
            id: value
        })
    };

    addAgent() {
        console.log(
            this.state.name,
            this.state.email,
            this.state.phone,
            this.state.id,
            this.state.contact,
            this.state.name_responsible,
            this.state.email_responsible,
            this.state.phone_responsible
        );
        this.props.addData(
            this.state.name,
            this.state.email,
            this.state.phone,
            this.state.id,
            this.state.contact,
            this.state.name_responsible,
            this.state.email_responsible,
            this.state.phone_responsible
        );
    };

    onStateChange = (e) => {
        const id =  e.target.id;
        this.setState({[id]: e.target.value});
    };

    onContactAdd = () => {
        let name  = this.state.name_contact;
        let email  = this.state.email_contact;
        let phone  = this.state.phone_contact;
        this.setState(
            {
                contact: [...this.state.contact,
                    {
                        email: email,
                        name: name,
                        phone: phone
                    }
                ]
            }
        );
        this.state.name_contact = "";
        this.state.email_contact = "";
        this.state.phone_contact = "";
    };

    render() {
        return(
            <div className="add">
                <h1>Создание нового контрагента</h1>
                <span className="italic inp">Компания: </span>
                <SelectList onChange={this.handleOnChange}/>
                <br/>
                <span className="italic inp">Ф.И.О.: </span>
                <input className="inp" type="text" id="name" value={this.state.name} onChange={this.onStateChange} />
                <br/>
                <span className="italic inp">E-mail: </span>
                <input className="inp" type="text" id="email" value={this.state.email}  onChange={this.onStateChange} />
                <br/>
                <span className="italic inp">Телефон: </span>
                <input className="inp" type="text" id="phone" value={this.state.phone} onChange={this.onStateChange} />
                <hr/>

                <h2>Котактные лица</h2>
                <span className="italic inp">Ф.И.О.: </span>
                <input className="inp" type="text" id="name_contact" value={this.state.name_contact} onChange={this.onStateChange} />
                <br/>
                <span className="italic inp">E-mail: </span>
                <input className="inp" type="text" id="email_contact" value={this.state.email_contact} onChange={this.onStateChange} />
                <br/>
                <span className="italic inp">Телефон: </span>
                <input className="inp" type="text" id="phone_contact" value={this.state.phone_contact} onChange={this.onStateChange} />
                <br/>
                <div className="btn btnAdd" onClick={() => this.onContactAdd()}>Добавить контактное лицо</div>
                <br/>
                <br/>
                <p>
                    {this.state.contact.map((item) => (
                        <p><b>Имя: {item.name}</b><br/>Телефон: {item.phone}<br/>E-mail: {item.email}<br/></p>
                    ))}
                </p>
                <br/>
                <hr/>

                <h2>Ответственное лицо</h2>
                <span className="italic inp">Ф.И.О.: </span>
                <input className="inp" type="text" id="name_responsible" value={this.state.name_responsible} onChange={this.onStateChange} />
                <br/>
                <span className="italic inp">E-mail: </span>
                <input className="inp" type="text" id="email_responsible" value={this.state.email_responsible} onChange={this.onStateChange} />
                <br/>
                <span className="italic inp">Телефон: </span>
                <input className="inp" type="text" id="phone_responsible" value={this.state.phone_responsible} onChange={this.onStateChange} />
                <br/>
                <div className="btn btnAdd" onClick={() => this.addAgent()}>Добавить</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.counterparty,
        error:  state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addData: (name, email, phone, legalEntity,
            contact,
            name_responsible, email_responsible, phone_responsible) => dispatch(addData(name, email, phone, legalEntity,
            contact,
            name_responsible, email_responsible, phone_responsible))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Add);