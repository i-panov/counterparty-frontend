import * as React from "react";
import { connect } from "react-redux";
import { legalEntitiesFetchData } from "../actions/select";
import "./Add.less";

interface IProps {
    legalEntities: any;
    error: any;
    legalEntitiesisLoading: boolean;
    onChange?: Function;
}

interface IAction {
    fetchData1: Function;
}

class SelectList extends React.Component<IProps & IAction, null> {
    componentDidMount() {
        this.props.fetchData1();
    }
    handleFilterChange = (e) => {
        this.props.onChange && this.props.onChange(e.target.value);
    };
    render() {
        const {legalEntities} = this.props;
        if (legalEntities.error.length !=0 ) {
            return (
                <p>
                    {legalEntities && legalEntities.errors && legalEntities.items.map((item) => (
                        <p>Ошибка: <b>{item.field}</b> - {item.message}</p>
                    ))}
                </p>
            )
        }
        if (legalEntities.error == undefined) {
            return <div>Сервер не отвечает</div>;
        }
        if (legalEntities.legalEntitiesisLoading) {
            return <p>Загрузка…</p>;
        }
        return (
            <div  className="company">
                <select onChange={this.handleFilterChange}>
                    {legalEntities && legalEntities.legalEntities && legalEntities.legalEntities.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        legalEntities: state.legalEntities,
        error: state.error,
        legalEntitiesisLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData1: () => dispatch(legalEntitiesFetchData())
    };
};

export default connect<IProps, IAction, null>(mapStateToProps, mapDispatchToProps)(SelectList) as any;