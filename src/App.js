import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './component/header/Header';
import GenerateInvoice from './component/generate_invoice/GenerateInvoice';
import Requests from './component/requests/Requests';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Requests} />
        <Route path='/generate-invoice' component={GenerateInvoice} />
      </Switch>
    </div>
  );
}

export default App;
