import React, { Component } from "react";
import Definitions from "./components/Definitions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Phonetics from "./components/Phonetics";
import Search from "./components/Search";

// data flow from parent to child
class App extends Component {

  // constructor
  // copied over the phonetics and definitions things to be part
  // of app's state now

  // prop means input

  // how does this have anything to do with data flow?
  // i guess like why not like store data in definitions
  // and modify / render in definitions?
  constructor(props) {
    super(props);
    this.state = {
      phonetics: [
        {
          text: "/həˈloʊ/",
          audio: "https://lex-audio.useremarkable.com/mp3/hello_us_1_rr.mp3",
        },
        {
          text: "/hɛˈloʊ/",
          audio: "https://lex-audio.useremarkable.com/mp3/hello_us_2_rr.mp3",
        },
      ],
      meanings: [
        {
          partOfSpeech: "exclamation",
          definitions: [
            {
              definition:
                "Used as a greeting or to begin a phone conversation.",
              example: "hello there, Katie!",
            },
          ],
        },
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "An utterance of “hello”; a greeting.",
              example: "she was getting polite nods and hellos from people",
              synonyms: [
                "greeting",
                "welcome",
                "salutation",
                "saluting",
                "hailing",
                "address",
                "hello",
                "hallo",
              ],
            },
          ],
        },
        {
          partOfSpeech: "intransitive verb",
          definitions: [
            {
              definition: "Say or shout “hello”; greet someone.",
              example: "I pressed the phone button and helloed",
            },
          ],
        },
      ],
    };
  }

  // wrapper around setState() to update the data in App
  updateDefinitionsAndPhonetics = (data) => {
    this.setState({ ...data});
  };

  render() {
    return (
      <>
        <Header />
        <Search updateUI={this.updateDefinitionsAndPhonetics} />
        <Phonetics phonetics = {this.state.phonetics} />
        <Definitions meanings = {this.state.meanings} />
        <Footer />
      </>
    );
  }
}

export default App;
