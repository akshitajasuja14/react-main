import React from 'react';
import ReactDOM from 'react-dom';


import Homerouter from './Homerouter';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <>
    <BrowserRouter> <Homerouter> </Homerouter> </BrowserRouter>

  </>,
  document.getElementById('root')
);


