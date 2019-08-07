import React, { Component } from 'react';
import './App.scss';
import HalfScreen from './components/half-screen/half-screen';
import Footer from './components/footer/footer';
import SelectBreed from './components/select-breed/select-breed';
import Breed from './components/breed/breed';

class App extends Component {
  state = { 
    language : "",
    selectScreen : null,
    breeds : [],
    breed: null,
    color: "#fff"
   }

  componentDidMount(){
    this.loadBreeds()
  }

  expandPt = () => {
    this.setState({language: "pt", color: "#23b2e3"})
    this.showSelectScreen()
  }
  
  expandEn = () => {
    this.setState({language: "en", color: "#fa7b24"})
    this.showSelectScreen()
  }
  
  showSelectScreen = () => {
    setTimeout(()=>{
      this.setState({selectScreen: true})
    }, 300)
  }
  
  resetState = () => {
      this.setState({language : "",
      selectScreen : null
    })
  }

  setBreed = breed => {
    console.log(breed)
    this.setState({breed: this.state.breeds[breed]})
  }

  clearBreed = () => {
    this.setState({breed: null})
  }
  
  loadBreeds = () => {
    fetch("https://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json").then(response => { 
      return response.json()
    }).then(data => {
      this.setState({breeds: data, breedsNames: Object.keys(data)})
    })
  }

  render() { 
    const { language, selectScreen, breeds, breedsNames, breed } = this.state
    if(breed){
      return(
      <div className="app">
        <Breed 
          breed={breed} 
          handleBack={this.clearBreed}
          language={language}
        />
        <Footer />
      </div>
      )
    }
    return ( 
      <div className="app">
        {!selectScreen && (
          <React.Fragment>
            <HalfScreen 
              handleExpand={this.expandPt}
              language="pt"
              btnImg="btn"
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
                            language={language}
                            btnImg="btn"
                            handleSelectBreed={this.setBreed}
                            breedsNames={breedsNames}
                          >
                          </SelectBreed>
        }
        <Footer />
      </div>
    );
  }
}
 
export default App;
