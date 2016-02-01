import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom';
import { routes } from './routes';


function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  render(<Router routes={routes} />, app);
}

main();
