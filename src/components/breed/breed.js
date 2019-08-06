import React, { Component } from 'react';
import Lang from './../../translate';
import images from '../../assets';
import './breed.scss';

const features =[
    ["coleira", "collar", "collar"],
    ["coleira de obediência", "obedience collar", "obedience"],
    ["guia", "leash", "leash"],
    ["guia", "leash ruff", "leash_ruff"],
    ["peitoral", "harness", "stepin"],
    ["peitoral mesh-plus", "mesh plus harness", "meshplus"],
]

// let firstUpdate = true
class Breed extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterValue: '', 
            openDropdown: false
        };

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
        const { language, handleBack, breed} = this.props;
        const { openDropdown, filterValue } = this.state
        const isPt = language == "pt";
        const t = Lang[language];
        const urlImg = "https://zeedog.vteximg.com.br/arquivos"
        let imageBreed = urlImg + breed.imageIpad
        console.log(breed)
        if(imageBreed.indexOf("white")===-1){
            imageBreed = imageBreed.replace(".png", "_white.png")
        };
        return ( 
            <div 
                id="breed" 
                style={{backgroundColor: isPt ? "#23b2e3" : "#fa7b24"}}
            >
                <img src={isPt ? images.returnBtn2 : images.returnBtn2En} alt="" className="back-btn" onClick={() => handleBack()} />
                <div className="container">
                    <h3 className="title-breed">{breed[isPt ? 'pt_name': 'en_name'].toUpperCase()}</h3>
                    <p className="subtitle-breed">{t['or similar size']}</p>
                    <img src={imageBreed} alt="" className="breed-img"/>
                    <div className="table" style={{backgroundImage: `url(${isPt ? images.tableBG : images.tableBGEn})`}}>
                       
                        {features.map(feature=>
                            <div className="row" key={feature[2]}>
                                <p>{feature[isPt ? 0 : 1].toUpperCase()}</p>
                                <span style={{backgroundImage: `url(${isPt ? images.tdBG : images.tdBGEn})`}}>{breed[feature[2]][isPt ? 0 : 1].toUpperCase()}</span>
                            </div>
                        )}
                        {/* <div className="col">
                        </div>
                        <div className="col">
                            <div className="row"></div>
                        </div> */}
                    </div>
                </div>
                <div className="disclaimer-container">
                    <img src={isPt ? images.disclaimerBreed : images.disclaimerBreedEn} alt="" className="disclaimer" />
                </div>
            </div> 
        );
    }
}
 
export default Breed;