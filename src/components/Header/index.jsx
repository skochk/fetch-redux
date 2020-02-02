import React, { Component } from 'react';

import TableComponent from '../../components/TableComponent';
import KokoitaComponent from '../../components/KokoitaComponent';
import Todos from '../../components/Todos';
import { Router , Link , Route , BrowserRouter, Switch} from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todos">Todos</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
            </>
        );
    }
}

export default index;