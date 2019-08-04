import React, { Component } from 'react';
import Lang from './../../translate';
import images from '../../assets';
import './half-screen.scss'



const HalfScreen = props => {



    const { width, language, btnImg, handleExpand } = props;
    const t = Lang[language];        
        console.log(t)
        return ( 
            <div 
                onClick={handleExpand} 
                id="half-screen" 
                style={{backgroundColor: language == "pt" ? "#23b2e3" : "#fa7b24" , width: width}}
            >
                <div className="container">
                    <p className="text">{language.toUpperCase()}</p>
                    <h2 className="title">{t['not sure']} <br /> {t['about size']}</h2>
                    <p className="text">{t['we help']}</p>
                    <img alt="" src={images[btnImg]} />
                </div>
            </div> 
         );
    
}
 
export default HalfScreen;
