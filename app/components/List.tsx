import * as React from "react";
import { connect } from "react-redux";
import { itemsFetchData, deleteData} from "../actions/items";
import { Link } from "react-router";
import "./List.less";

interface IProps {
    fetchData: any;
    items: any;
    deleteData: any;
    error: any;
    isLoading: boolean
}

class List extends React.Component<IProps, any> {
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        const {items} = this.props;
        if (items.error == undefined) {
            return <div>Сервер не отвечает</div>;
        }
        if (items.items.length == 0) {
            return <div>Данные отсутствуют</div>;
        }
        if (items.isLoading) {
            return <p>Загрузка…</p>;
        }
        return (
            <div>
                <ul className="itemList">
                    {items && items.items && items.items.map((item) => (
                        <div className="itemWrap" key={item.id}>
                            <li className="item">
                                <Link className="general_link" to={`/view/${item.id}`}><b>{item.name}</b><div className="phone">тел. {item.phone}</div></Link>
                                <Link to={`/counter/${item.id}`}><div className="btn edit">Редактировать</div></Link>
                                <div className="btn delete" onClick={() => this.props.deleteData(item.id)}>Удалить</div>
                                <br/>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        error: state.error,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(itemsFetchData()),
        deleteData: (id) => dispatch(deleteData(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);