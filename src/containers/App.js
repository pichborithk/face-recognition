import React from 'react';
import Clarifai from 'clarifai';
import Particles from '../components/Particles';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Rank from '../components/Rank';
import ImageLinkForm from '../components/ImageLinkForm.js';
import FaceRecognition from '../components/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: '0a731ccfa9dd47f69eb1534351ac0e09',
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    };
  }
  onUrlInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onDetectSummit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        '6dc7e46bc9124c5c8824be4822abe105',
        'https://images.squarespace-cdn.com/content/v1/51a39504e4b093105c265c24/1443545413860-JF2PAASSLHVQRDHDIZSX/people-photography-examples.jpg?format=1000w'
      )
      .then(
        function (response) {
          console.log(response);
        },
        function (err) {}
      );
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
