import React, { Component } from 'react';
import Lang from './../../translate';
import images from '../../assets';
import './select-breed.scss';

// let firstUpdate = true
class SelectBreed extends Component {

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
        const { width, language, opacity, handleBack, handleSelectBreed, breedsNames = [] } = this.props;
        const { openDropdown, filterValue } = this.state
        const isPt = language == "pt";
        const t = Lang[language];
        return ( 
            <div 
                id="select-breed" 
                style={{backgroundColor: isPt ? "#23b2e3" : "#fa7b24", width: width}}
            >
                <img src={isPt ? images.returnBtn : images.returnBtnEn} alt="" className="back-btn" onClick={() => handleBack()} />
                <div className="container" style={{ opacity: opacity }}>
                    <h2 className="title">{t['find out']}</h2>
                    <div className="dropdown-baloon-container">
                        <img onClick={this.toggleDropdown} alt="" className="dropdown-baloon" src={isPt ? images.dropdownBallon : images.dropdownBallonEn}/>
                        <div className="list-container" style={{height: !openDropdown ? "0px" : null}}>
                            <input type="text" id="filter-breed" value={this.state.filterValue} onChange={this.handleChange}/>
                            <div className="list-container-scroll">
                                {breedsNames.map(breed =>
                                    breed.includes(filterValue) && (
                                        <div className="list-item" key={breed} onClick={() => this.selectBreed(breed, handleSelectBreed)}>
                                            {breed}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="disclaimer-container">
                    <img src={isPt ? images.disclaimer : images.disclaimerEn} alt="" className="disclaimer" />
                </div>
            </div> 
        );
    }
}
 
export default SelectBreed;