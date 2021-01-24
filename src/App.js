import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './component/header/Header';
import Requests from './component/requests/Requests';
import GenerateInvoice from './component/generate_invoice/GenerateInvoice';
import PreviewInvoice from './component/preview_invoice/PreviewInvoice';
import NotFound from './component/NotFound';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Requests} />
        <Route exact path='/generate-invoice' component={GenerateInvoice} />
        <Route exact path='/generate-invoice/preview-your-invoice' component={PreviewInvoice} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
