import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import store from "./redux/store";

import Router from './Router';


ReactDOM.createRoot(
  document.getElementById('root')
  ).render(
    <Provider store ={store}>
       <Router />
    </Provider>
   
     
    
);



