import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './containers/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import { Provider } from 'react-redux';
import store from './Store';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
    </Provider>
  );
}

export default App;
