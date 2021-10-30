import React from "react";
import Header from "../Header/Header";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/Searchbox";
import "./App.css";

const name= require('@rstacruz/startup-name-generator');

class App extends React.Component {
  state={
    headerText:"Outname",
    headerChange: true,
    suggestedNames:[],
  }

  handleInputChange=(inputText)=>{

    this.setState({
      headerChange: !(inputText.length > 0),
      suggestedNames: inputText ? name(inputText) : [],
    })
  }

  render() {
    return (
      <div>
        <Header headerChange={this.state.headerChange}
          headtitle={this.state.headerText}/>
        <SearchBox onInputChange={this.handleInputChange}/>
        <ResultContainer suggestedNames={this.state.suggestedNames}/>
      </div>
    );
  }
}

export default App;
