import React from 'react';
import Particles from './components/Particles/Particles';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    };
  }
  onUrlInputChange = (event) => {
    console.log(event.target.value);
  };

  onDetectSummit = () => {
    console.log('click');
  };
  render() {
    return (
      <div className='App'>
        <Particles />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onUrlInputChange={this.onUrlInputChange}
          onDetectSummit={this.onDetectSummit}
        />
      </div>
    );
  }
}

export default App;
