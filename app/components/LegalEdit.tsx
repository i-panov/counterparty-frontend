import * as React from "react";
import { connect } from "react-redux";
import { legalEntitiesFetchData } from "../actions/select";
import { changeEntity } from "../actions/editing";

interface IProps {
    legalEntities: any;
    legalEntitieshasErrored: any;
    legalEntitiesisLoading: boolean;
    fetchData: any;
    changeEntity: any;
    id: any;
    idEntity: any;
}

class LegalEdit extends React.Component<IProps, any> {
    componentDidMount() {
        this.props.fetchData();
        this.props.id;
    }
    handleFilterChange = (e) => {
        this.props.changeEntity(this.props.id, e.target.value);
    };
    render() {
        const {legalEntities} = this.props;
        if (legalEntities.legalEntitieshasErrored) {
            return <p>Error: {legalEntities.legalEntitieshasErrored}</p>;
        }

        if (legalEntities.legalEntitiesisLoading) {
            return <p>Loading…</p>;
        }
        return(
            <div>
                <select defaultValue={this.props.idEntity} onChange={this.handleFilterChange}>
                    {legalEntities && legalEntities.legalEntities && legalEntities.legalEntities.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
                <br/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        legalEntities: state.legalEntities,
        legalEntitieshasErrored: state.error,
        legalEntitiesisLoading: state.isLoading,
        id: ownProps.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(legalEntitiesFetchData()),
        changeEntity: (id_counter, id_entity) => dispatch(changeEntity(id_counter, id_entity))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LegalEdit);