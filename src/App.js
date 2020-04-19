import React from 'react';
// Pages
import Homepage from './pages/Homepage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraphNumber: 1,
      loremIpsum: ['pizza'],
      sampleIpsum: ["1-Up",
        "A",
        "AA",
        "AAA",
        "Achievements",
        "AFK",
        "Aggro",
        "AI",
        "Aimbot",
        "Alpha",
        "Animation Cancel",
        "Ambient Occlusion",
        "Anti-Aliasing",
        "AoE",
        "Assist",
        "Avatar",
        "Ban",
        "Barrel Stuffing",
        "Beat 'Em Up",
        "Beta",
        "Bonus",
        "Boosting",
        "Boss",
        "Camping/Active Camping",
        "Campaign",
        "Casual",
        "Chams",
        "Character design",
        "Cheat",
        "Checkpoint",
        "Chems",
        "Class",
        "Combo",
        "Commonwealth",
        "Continue",
        "Console",
        "Controller",
        "Co-op",
        "CoD",
        "CP",
        "Creeps/CS",
        "Crowd control",
        "Critical Hit",
        "Cutscene",
        "Deathmatch",
        "Debuff",
        "Demo",
        "Die-and-Retry",
        "Difficulty",
        "DLC",
        "D-Pad",
        "DPS",
        "Draw distance",
        "Driving simulator",
        "DRM",
        "Dual Wield",
        "Easter egg",
        "Emulator",
        "Epistle ",
        "Exploit",
        "Faceroll",
        "Fatality",
        "Farming",
        "Feeding",
        "FOV",
        "Fighting Game",
        "Flying Simulator",
        "FPS",
        "Frag",
        "Frame",
        "FP",
        "GameBattles",
        "Game Over",
        "Gamer",
        "Ghosting",
        "God Mode",
        "GG",
        "GG no re",
        "GG ez",
        "Gimp",
        "Glitch",
        "Griefing",
        "Grinding",
        "Guard",
        "Hacker",
        "Healer",
        "Headshot",
        "Hit Points (HP)",
        "Holy Trinity",
        "Indie",
        "Job",
        "JRPG",
        "Juan",
        "KDR",
        "Kick",
        "Kite",
        "Kill stealing",
        "KK",
        "KO",
        "Konami code",
        "LAN",
        "LoL",
        "Level (experience)",
        "Level (map)",
        "Level design",
        "Mana",
        "Manic shooter",
        "Map",
        "Magic Points (MP)",
        "MLG",
        "MMO",
        "MOBA",
        "Model",
        "Mute",
        "Nerf",
        "Noob",
        "Noob tube",
        "NPC",
        "OHKO",
        "One-shot-kill",
        "OP",
        "Open world",
        "OST",
        "Party game",
        "Permadeath",
        "Platformer",
        "Point-and-click",
        "Pre-firing",
        "PvP",
        "PvE",
        "Quickscope",
        "QQ",
        "QTE",
        "Ragequit",
        "Respawn",
        "Resolution",
        "Rekt",
        "RNG",
        "Rocket jump",
        "RPG",
        "RQ",
        "RTS",
        "Rush",
        "Sandbox",
        "Screen-peeking",
        "Shoot 'em up",
        "Sidescroller",
        "Sidequest",
        "Smoothskin",
        "Smurf",
        "SnD",
        "Speedhacks",
        "Speedrun",
        "Spoiler",
        "Sprite",
        "Stats",
        "Strafing",
        "Sweaty goal",
        "SWTOR",
        "Tank",
        "Trickshot",
        "Troll/Trolling",
        "Tryhard",
        "Twink",
        "ÜberCharge",
        "VAC",
        "Warrior",
        "Walling/Wall hack",
        "WoW",
        "Wombo Combo",
        "W+M1",
        "XP",
        "Z-targeting",],
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
    return sentence;
  }

  ipsumGeneration(e) {
    e.preventDefault();
    const paragraphs = this.state.paragraphNumber;
    let shuffledIpsum = this.shuffle(this.state.sampleIpsum.slice());
    let wordsPerSentence = this.between(4, 10);
    let sentencesPerParagraph = this.between(3, 6);
    let sentence = [];
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
          let processedSentence = sentence.join(' ');
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
          loremIpsum={this.state.loremIpsum}
        />
      </div>
    );
  }
}

export default App;
