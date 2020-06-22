import React, { Fragment } from 'react';
import './App.css';
import Background from './components/background/';
import Sidebar from './components/sidebar/';
import Header from './components/header/';
import Main from './components/main/';
import Modal from './components/modal/';
import AboutMe from './components/aboutme/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  showModal = () => {
    this.setState(prev=>({
      show: !prev.show
    }));
  };
  render() {  
    return (
      <Fragment>
        <Background />
        <div className="framework">
          <Sidebar />
          <Header />
          <Main />
          <button  onClick={e => {
              this.showModal();
          }}
          > 
          show Modal 
          </button>
        </div>
        <Modal onClose={this.showModal} show={this.state.show}>
          <AboutMe />
        </Modal>
      </Fragment>
    );
  }
}

export default App;