import React, { Component } from 'react';
import Lang from './../../translate';
import images from '../../assets';
import './breed.scss';

// let firstUpdate = true
class Breed extends Component {

    constructor(props){
        super(props);
        this.state = {filterValue: '', openDropdown: false};

        this.handleChange = this.handleChange.bind(this);
    }

    resetState = () => {
        this.setState({filterValue: '', openDropdown: false});
    }

    handleChange = (event) => {
        this.setState({filterValue: event.target.value});
    }

    toggleDropdown = () => {
        this.setState({openDropdown: !this.state.openDropdown})
    }

    selectBreed = (breed, callback) => {
        this.resetState();
        callback(breed)
    }

    render() { 
        const { language, opacity, handleBack, breed} = this.props;
        const { openDropdown, filterValue } = this.state
        const isPt = language == "pt";
        const t = Lang[language];
        const urlImg = "https://zeedog.vteximg.com.br/arquivos"
        let imageBreed = urlImg + breed.imageIpad

        if(imageBreed.indexOf("white")===-1){
            imageBreed = imageBreed.replace(".png", "_white.png")
        };
        return ( 
            <div 
                id="breed" 
                style={{backgroundColor: isPt ? "#23b2e3" : "#fa7b24", opacity: 1}}
            >
                <img src={isPt ? images.returnBtn2 : images.returnBtn2En} alt="" className="back-btn" onClick={() => handleBack()} />
                <div className="container" style={{ opacity: opacity }}>
                    <img src={imageBreed} alt="" className="breed-img"/>
                </div>
                <div className="disclaimer-container">
                    <img src={isPt ? images.disclaimerBreed : images.disclaimerBreedEn} alt="" className="disclaimer" />
                </div>
            </div> 
        );
    }
}
 
export default Breed;