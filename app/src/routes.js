import App from './components/App';
import About from './components/About';
import Index from './components/Index';
import Seizure from './components/Seizure';

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
    { path: 'inbox', component: Index },
    { path: 'seizure', component: Seizure }
  ]
};

export { routes };
