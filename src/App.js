import React from 'react';
// Pages
import Homepage from './pages/Homepage';
// Lorem Ipsum
const ipsumText = require('./videogametext');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraphNumber: 1,
      loremIpsum: ['pizza'],
    };
    this.ipsumGeneration = this.ipsumGeneration.bind(this)
    this.handleIpsumGeneration = this.handleIpsumGeneration.bind(this);
  }


  shuffle = function (array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  between = function (min, max) {
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

  sentence = function (sentence, wordsPerSentence, shuffledIpsum) {
    for (let i = 0; i < wordsPerSentence; i++) {
      sentence.push(shuffledIpsum[i]);
      shuffledIpsum.shift();
    }
    console.log('sentence is: ', sentence)
    sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].substr(1);
    return sentence;
  }

  ipsumGeneration(e) {
    e.preventDefault();
    const paragraphs = this.state.paragraphNumber;
    let shuffledIpsum = this.shuffle(ipsumText.slice());
    let wordsPerSentence = this.between(4, 10);
    let sentencesPerParagraph = this.between(3, 6);
    let sentence = [];
    let processedSentence = '';
    let loremParagraph = [];
    if (paragraphs > 7) {
      return null;
    } else {
      let finalIpsum = [];
      for (let i = 0; i < paragraphs; i++) {
        for (let i = 0; i < sentencesPerParagraph; i++) {
          this.sentence(sentence, wordsPerSentence, shuffledIpsum);
          let lastWordInSentence = sentence.pop() + ".";
          sentence.push(lastWordInSentence)
          processedSentence = sentence.join(' ');
          // debugger;
          sentence = [];
          wordsPerSentence = this.between(8, 15);
          sentencesPerParagraph = this.between(4, 6);
          loremParagraph.push(processedSentence);
          processedSentence = '';
        }
        loremParagraph.push('<br/>')
      }
      finalIpsum.push(loremParagraph.join(' '))
      finalIpsum = finalIpsum.join('')
      finalIpsum = finalIpsum.split('<br/>')
      loremParagraph = [];
      this.setState({
        loremIpsum: finalIpsum
      })
    }
  }

  defaultIpsum() {
    const paragraphs = this.state.paragraphNumber;
    let shuffledIpsum = this.shuffle(ipsumText.slice());
    let wordsPerSentence = this.between(4, 10);
    let sentencesPerParagraph = this.between(3, 6);
    let sentence = [];
    let processedSentence = '';
    let loremParagraph = [];
    if (paragraphs > 7) {
      return null;
    } else {
      let finalIpsum = [];
      for (let i = 0; i < paragraphs; i++) {
        for (let i = 0; i < sentencesPerParagraph; i++) {
          this.sentence(sentence, wordsPerSentence, shuffledIpsum);
          let lastWordInSentence = sentence.pop() + ".";
          sentence.push(lastWordInSentence)
          processedSentence = sentence.join(' ');
          sentence = [];
          wordsPerSentence = this.between(8, 15);
          sentencesPerParagraph = this.between(4, 6);
          loremParagraph.push(processedSentence);
          processedSentence = '';
        }
        loremParagraph.push('<br/>')
      }
      finalIpsum.push(loremParagraph.join(' '))
      finalIpsum = finalIpsum.join('')
      finalIpsum = finalIpsum.split('<br/>')
      loremParagraph = [];
      this.setState({
        loremIpsum: finalIpsum
      })
    }
  }

  componentDidMount() {
    this.defaultIpsum();
  }

  handleIpsumGeneration = e => {
    e.preventDefault();
    this.setState({ paragraphNumber: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <Homepage
          handleIpsumGeneration={this.handleIpsumGeneration}
          ipsumGeneration={this.ipsumGeneration}
          loremIpsum={this.state.loremIpsum}
          paragraphNumber={this.state.paragraphNumber}
        />
      </div>
    );
  }
}

export default App;
