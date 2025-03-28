import * as React from "react";
import { Link } from "react-router";
import "./App.less";
import List from "./List";

class App extends React.Component {
    render() {
        return(
            <div className="wrap">
                <h1>Список контрагентов</h1>
                <div>
                    <Link to="/add" className="but new">Добавить контрагента</Link>
                    <Link to="/import" className="but import">Импорт</Link>
                </div>
                <br />
                <List/>
                <br />
                <a href="http://localhost:8888/persist/exportExcel" className="but export">Экспорт</a>
            </div>
        );
    }
}

export default App;