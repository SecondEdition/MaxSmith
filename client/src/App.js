import React, { Fragment } from 'react';
import './App.css';
import Background from './components/background';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <Fragment>
      <Background />
      <div className="framework">
        <Sidebar />
        <Header />
        <Main />
      </div>
    </Fragment>
  );
}

export default App;