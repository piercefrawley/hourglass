import Index from './components/Index';
import About from './components/About';
import Counter from './components/Counter';
import Seizure from './components/Seizure';

const routes = {
  path: '/',
  component: Index,
  childRoutes: [
    { path: 'seizure', component: Seizure },
    { path: 'about', component: About },
    { path: 'counter', component: Counter },
  ],
};

export default routes;
