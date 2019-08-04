import React from 'react';
import Lang from './../../translate';
import images from '../../assets';
import './select-breed.scss';

// let firstUpdate = true

const SelectBreed = (props) => {
    const { width, language, opacity, handleBack, breeds } = props;
    const isPt = language == "pt";
    const t = Lang[language];
    console.log(breeds)
    return ( 
    <div 
        id="select-breed" 
        style={{backgroundColor: isPt ? "#23b2e3" : "#fa7b24", width: width}}
    >
        <img src={isPt ? images.returnBtnPt : images.returnBtnEn} alt="" className="backBtn" onClick={() => handleBack()} />
        <div className="container" style={{ opacity: opacity }}>
            <h2 className="title">{t['find out']}</h2>
            <img alt="" className="dropdown-baloon" src={isPt ? images.dropdownBallon : images.dropdownBallonEn}/>
        </div>
        <img src={isPt ? images.disclaimerPt : images.disclaimerEn} alt="" className="disclaimer" />
    </div> );
}
 
export default SelectBreed;