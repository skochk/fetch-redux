import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import TableComponent from './components/TableComponent';
import KokoitaComponent from './components/KokoitaComponent';
import Todos from './components/Todos';
import Todo from './components/Todos/Todo';
import { Router , Link , Route , BrowserRouter, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter> 
      <Provider store={store}>
        
        <Route exact path="/" component={Header}/>
        <Route exact path="/todos" component={Todos}/>
        <Route exact path="/" component={KokoitaComponent}/>
        <Route path="/todos/:id" component={Todo}/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
