import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Breed from './pages/Breed';
import Top from './pages/TopBreed';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/breeds/top' exact component={Top} />
        <Route path='/breeds/:name' exact component={Breed} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

export default App;
