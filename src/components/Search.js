import PropTypes from "prop-types";
import axios from "axios"; // axios fetches api data for us, like word definitions from the server
import React, { Component } from "react";

// search bar
// app is appearing fancy on the front end
// but the primary purpose of requesting and fetching word data 
// maybe from a database
// is not yet working.
// need to be able to actually get the data
// from a server, not just display it on the screen.

// now a class component, not a function component

// we will make it a controlled component soon so it can interact with react

class Search extends Component {

  // constructor
  constructor(props) {
    super(props);
    // the state of a component is
    // the changeable data it has
    // https://cs280spring.github.io/15-dictionary-app/step17.html
    // the word will be changeable depending on what is typed in the search bar
    // since react controls the state so far
    // user can't change the word value just yet


    
    // another approach: declare as field instead of inside the constructor
    this.state = {
      word: "hello"
    }
    //   this.changeWord = this.changeWord.bind(this);
    // binding above if needed
  }

  // function - arrow syntax
  // changeWord = (event) => {
  //   this.setState({word: event.target.value});
  // }
  // this is the better way that madooei prefers

  // like a function now with arrow syntax
  // no binding needed because arrow functions have no context
  
  changeWord = (event) => {
    // change the state's word to the specified value
    // allows us to type in the search bar
    // normally we would do
    // this.state.word = event.target.value; // let user type in search bar and change state's word
    // but React won't know about it if we do it like above
    // we need to go through React's process of using the setState() method
    // which is from the React.Component class
    // this way, React will automatically re-render the user interface by
    // comparing the past state and the current state
    // and reconciling the two in its own way
    // basically, by setting the state via setState(), we let React
    // know that we are changing the state and let
    // it handle all of the reconciling / updating
    // so we just have to update the state
    // and it will do all of the re-rendering and re-drawing / heavy-lifting.
    this.setState({word: event.target.value});
  }  

  // this actually fetches the definitions from the API / external source
  // this is the fetching/retrieving data functionality
  // not just the front end
  // this is more like the back end

  // this gets the word definition data and outputs it to the console

  // fetchDefinitions = (event) => {
  //   event.preventDefault();
  //   const dictionaryAPI = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
  //   const wordToDefine = this.state.word;
  //   fetch(`${dictionaryAPI}${wordToDefine}`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data[0]))
  //     .catch((err) => console.log(err));
  // };

  // using async/await below to schedule the fast tasks first before the longer ones
  fetchDefinitions = async (event) => {
    event.preventDefault();
    const dictionaryAPI = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
    const wordToDefine = this.state.word;
    try {
      //const response = await fetch(`${dictionaryAPI}${wordToDefine}`);
      // axios fetching api data for us
      const response = await axios.get(`${dictionaryAPI}${wordToDefine}`);

      //const data = await response.json();
      // axios fetching for us
      const data = response.data;
      // console.log(data[0]); // instead of sending data to console,
      // we output it to the setState() wrapper, updateDefinitionsAndPhonetics
      this.props.updateUI(data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  

  // function
  render() {
    return (
      <section className="section">
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input is-large is-fullwidth"
              id="define-input"
              placeholder="Enter a word"
              type="text"
              value={this.state.word}
              onChange={this.changeWord}
            />
          </div>
          <div className="control">
            <button
              className="button is-info is-large"
              id="define-btn"
              onClick={this.fetchDefinitions}
            >
              Define
            </button>
          </div>
        </div>
      </section>
    );
  }
}

// Search component needs a UI prop
Search.propTypes = {
  updateUI: PropTypes.func.isRequired
};

export default Search;