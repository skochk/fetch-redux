import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../store';
import {
    BrowserRouter as Router,
    Route,
    Switch, 
    useParams
  } from 'react-router-dom';


class index extends Component {

    render() {
        
        const { users } = this.props;
        console.log(this.props);
        console.log(store.getState().appReducer.users);
        let id = this.props.match.params.id-1;
        return (
            <div>
                <div>
                    <h1>Article ID: {this.props.users[id].id}</h1>
                    <h1>Title: {this.props.users[id].title}</h1>
                    <h2>User ID: {this.props.users[id].userId}</h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.appReducer.users,
});

export default connect(mapStateToProps,null)(index);