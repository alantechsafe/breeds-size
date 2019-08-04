import React, { Component } from 'react';
import './App.scss';
import HalfScreen from './components/half-screen/half-screen';
import Footer from './components/footer/footer';
import SelectBreed from './components/select-breed/select-breed';

class App extends Component {
  state = { 
    language : "",
    selectScreen : null,
    breeds : []
   }

   componentDidMount(){
    this.loadBreeds()
   }

  expandPt = () => {
    this.setState({language: "pt"})
    this.showSelectScreen()
  }
  
  expandEn = () => {
    this.setState({language: "en"})
    this.showSelectScreen()
  }
  
  showSelectScreen = () => {
    setTimeout(()=>{
      this.setState({selectScreen: true})
    }, 300)
  }
  
  resetState = () => {
    this.setState({language : "",
    selectScreen : null,
    breeds : []})
  }
  
  loadBreeds = () => {
    fetch("https://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json").then(response => { 
      return response.json()
    }).then(data => {
      console.log(data)
      this.setState({breeds: data})
    })
  }

  render() { 
    const { language, selectScreen, breeds } = this.state
    console.log("APP BREEDS --> ", breeds)
    return ( 
      <div className="app">
      {!selectScreen && (
        <React.Fragment>
          <HalfScreen 
            handleExpand={this.expandPt}
            language="pt"
            btnImg="btnPt"
            width = {language === "en" && "0%" }
          />
          <HalfScreen 
            handleExpand={this.expandEn}
            language="en"
            btnImg="btnEn"
            width = {language === "pt" && "0%" }
          />
        </React.Fragment>
      )}
      {selectScreen && <SelectBreed
                          handleBack={this.resetState}
                          onClick={this.expandPt}
                          language={language}
                          btnImg="btnPt"
                          breeds={breeds}
                        >
                        </SelectBreed>
      }
    <Footer />
  </div>
     );
  }
}
 
export default App;
