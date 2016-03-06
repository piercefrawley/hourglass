import App from './components/App';
import About from './components/About';
import Counter from './components/Counter';
import Seizure from './components/Seizure';

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
    { path: 'realm', component: Counter },
    { path: 'seizure', component: Seizure }
  ]
};

export { routes };
