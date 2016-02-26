import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom';
import { routes } from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';


function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  render(<Router routes={routes} history={createBrowserHistory()}/>, app);
}

main();
