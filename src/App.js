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
      shuffledIpsum: this.shuffle(ipsumText.slice()),
    };
    this.ipsumGeneration = this.ipsumGeneration.bind(this)
    this.handleIpsumGeneration = this.handleIpsumGeneration.bind(this);
  }

  clearSelection = function () {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else if (document.selection) {
      document.selection.empty();
    }
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
      sentence.push(shuffledIpsum[shuffledIpsum.length - 1]);
      shuffledIpsum.pop();
    }
    sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].substr(1);
    return sentence;
  }

  processSentence = (loremParagraph, sentence, sentencesPerParagraph, processedSentence) => {
    let lastWordInSentence = sentence.pop() + ".";
    sentence.push(lastWordInSentence)
    for (let i = 0; i < sentencesPerParagraph; i++) {
      processedSentence = sentence.join(' ');
    }
    loremParagraph.push(processedSentence);
    return loremParagraph;
  }

  processIpsum = (loremParagraph, finalIpsum) => {
    finalIpsum.push(loremParagraph.join(' '));
    finalIpsum = finalIpsum.join('');
    finalIpsum = finalIpsum.split('<br/>');
    return finalIpsum;
  }

  ipsumGeneration(e) {
    e.preventDefault();
    this.clearSelection();

    let sentence = [];
    let processedSentence = '';
    let loremParagraph = [];
    let finalIpsum = [];
    let wordsPerSentence = this.between(4, 10);
    let sentencesPerParagraph = this.between(3, 6);

    if (this.state.paragraphNumber > 9) {
      return null;
    } else {
      for (let i = 0; i < this.state.paragraphNumber; i++) {
        sentencesPerParagraph = this.between(3, 6);
        for (let i = 0; i < sentencesPerParagraph; i++) {
          this.sentence(sentence, wordsPerSentence, this.state.shuffledIpsum);
          this.processSentence(loremParagraph, sentence, sentencesPerParagraph, processedSentence)
          sentence = [];
          wordsPerSentence = this.between(4, 10);
          processedSentence = '';
        }
        loremParagraph.push('<br/>');
      }

      let processedLoremIpsum = this.processIpsum(loremParagraph, finalIpsum);
      this.setState({ loremIpsum: processedLoremIpsum })
      this.setState({ shuffledIpsum: this.shuffle(ipsumText.slice()) })
    }
  }

  defaultIpsum() {
    let sentence = [];
    let processedSentence = '';
    let loremParagraph = [];
    let finalIpsum = [];
    let wordsPerSentence = this.between(4, 10);
    let sentencesPerParagraph = this.between(3, 6);

    for (let i = 0; i < this.state.paragraphNumber; i++) {
      for (let i = 0; i < sentencesPerParagraph; i++) {
        this.sentence(sentence, wordsPerSentence, this.state.shuffledIpsum);
        this.processSentence(loremParagraph, sentence, sentencesPerParagraph, processedSentence)
        sentence = [];
        wordsPerSentence = this.between(4, 10);
        processedSentence = '';
      }
    }

    this.processIpsum(loremParagraph, finalIpsum);
    this.setState({ loremIpsum: finalIpsum })
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
