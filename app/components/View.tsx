import * as React from "react";
import { connect } from "react-redux";
import { counterpartyFetchData } from "../actions/counterparty";
import { cloneDeep } from "lodash";
import "./View.less";

interface IProps {
    fetchData: any;
    counterparty: any;
    error: any;
    isLoading: boolean;
    id: number
}

class View extends React.Component<IProps, any> {
    componentDidMount() {
        this.props.fetchData(this.props.id);
    }

    render() {
        const {counterparty} = this.props;
        console.log(counterparty)
        if (counterparty.error == undefined) {
            return <div>Сервер не отвечает</div>;
        }
        if (counterparty.error.length !=0 ) {
            return (
                    <p>
                        {counterparty && counterparty.error && counterparty.error.map((item) => (
                            <p>Ошибка: <b>{item.field}</b> - {item.message}</p>
                        ))}
                    </p>
                )
        }
        if (counterparty.isLoading) {
            return <p>Загрузка…</p>;
        }
        return (
            <div className="view">
                <h1>Контактная информация контрагента</h1>
                <h2>{counterparty && counterparty.counterparty && counterparty.counterparty.legalEntity && counterparty.counterparty.legalEntity.name}<br /></h2>
                <b><span className="italic">ИНН: </span>{counterparty && counterparty.counterparty && counterparty.counterparty.legalEntity && counterparty.counterparty.legalEntity.inn}</b><br />
                <hr />
                <div className="responsible">
                    <span className="italic">Имя: </span>{counterparty && counterparty.counterparty && counterparty.counterparty.bailee && counterparty.counterparty.bailee.name}<br />
                    <span className="italic">Телефон: </span>{counterparty && counterparty.counterparty && counterparty.counterparty.bailee && counterparty.counterparty.bailee.phone}<br />
                    <span className="italic">E-mail: </span>{counterparty && counterparty.counterparty && counterparty.counterparty.bailee && counterparty.counterparty.bailee.email}<br />
                </div>
                <hr />
                <h3>Контактные лица</h3>
                <div className="contactPerson">
                </div>
                {counterparty && counterparty.counterparty && counterparty.counterparty.legalEntity && counterparty.counterparty.contactPersons.map((item) => (
                    <div className="itemWrap" key={item.id}>
                        <span className="italic">Имя: </span>{item.name}<br />
                        <span className="italic">Телефон: </span>{item.phone}<br />
                        <span className="italic">E-mail: </span>{item.email}<br />
                    </div>
                ))}
                <hr />
                <h3>Ответственный</h3>
                <div className="responsible">
                    <span className="italic">Имя: </span>{counterparty && counterparty.counterparty && counterparty.counterparty.person && counterparty.counterparty.person.name}<br />
                    <span className="italic">Телефон: </span>{counterparty && counterparty.counterparty && counterparty.counterparty.person && counterparty.counterparty.person.phone}<br />
                    <span className="italic">E-mail: </span>{counterparty && counterparty.counterparty && counterparty.counterparty.person && counterparty.counterparty.person.email}<br />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counterparty: state.counterparty,
        error: state.error,
        isLoading: state.isLoading,
        id: ownProps.params.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(counterpartyFetchData(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);