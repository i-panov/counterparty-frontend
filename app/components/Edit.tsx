import * as React from "react";
import { connect } from "react-redux";
import mapValues from "lodash/mapValues";

interface IProps {
    counterpartys: any,
    onAddCounterparty: any,
}

class Edit extends React.Component<IProps, any> {
    counterpartyNameInput;
    counterpartyPhoneInput;
    addCounterparty() {
        this.props.onAddCounterparty(Date.now(), this.counterpartyNameInput.value, this.counterpartyPhoneInput.value);
        this.counterpartyNameInput.value = "";
        this.counterpartyPhoneInput.value = "";
    };
    render() {
        console.log(this.props.counterpartys);
        return(
            <div>
                <input type="text" ref={(input) => {this.counterpartyNameInput = input}}/><br />
                <input type="text" ref={(input) => {this.counterpartyPhoneInput = input}}/><br />
                <button onClick={this.addCounterparty.bind(this)}>Добавить</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        counterpartys: state.counterpartys
    }),
    dispatch => ({
        onAddCounterparty: (id, name, phone) => {
            dispatch({type: "ADD", payload: {id, name, phone}})
        }
    })
)(Edit);
