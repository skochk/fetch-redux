import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers as getUsersAction , deleteUser as deleteUserAction } from '../../actions/getUsers';
import Todo from '../../components/Todos/Todo';
import { Router , Link , Route , BrowserRouter} from 'react-router-dom';
export class index extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const {  getUsers } = this.props;
        getUsers();
    }
    

    render() {
        const { status, users, deleteUser } = this.props;
        let data;
        if(status === 'loading'){
            data = <h1>Loading</h1>
        } else if (status === 'success') {
            data = users.map((el, idx) => {
                return (
                    <>
                        <Link to={`/todos/${idx+1}`}>
                        <div style={{border: '1px solid'}}>
                            <h4>{el.id}</h4>
                            <h4>{el.title}</h4>
                        </div>
                        </Link>
                        <div style={{border:'1px solid red'}} onClick={()=>deleteUser(idx)}>delete</div>

                    </>
                )
            })
        } else {
            data = 'error'
        }
        return (
            <>
          
            <div>
                {data}
            </div>
            </>
        )
    }
}

index.defaultProps = {
    users: []
}

const mapStateToProps = (state) => ({
    status: state.appReducer.status,
    users: state.appReducer.users
})

const mapDispatchToProps = dispatch => {
    return {
        getUsers: ()=>{ dispatch(getUsersAction()) },
        deleteUser: (idx)=>{ dispatch(deleteUserAction(idx))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
