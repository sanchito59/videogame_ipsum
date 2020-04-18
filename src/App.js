import React from 'react';
// Pages
import Homepage from './pages/Homepage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraphNumber: '1'
    };
    this.ipsumGeneration = this.ipsumGeneration.bind(this)
    this.handleIpsumGeneration = this.handleIpsumGeneration.bind(this);
  }

  ipsumGeneration(e) {
    e.preventDefault();
    const paragraphs = this.state.paragraphNumber;
    console.log(`User wants ${paragraphs} paragraph/s`)
  }

  handleIpsumGeneration = e => {
    e.preventDefault();
    this.setState({ paragraphNumber: e.target.value })
    console.log(e.target.value)
  }



  render() {
    return (
      <div className="App">
        <Homepage
          handleIpsumGeneration={this.handleIpsumGeneration}
          ipsumGeneration={this.ipsumGeneration}
          paragraphNumber={this.state.paragraphNumber}
        />
      </div>
    );
  }
}

export default App;
