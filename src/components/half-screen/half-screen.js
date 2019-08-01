import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import images from '../../assets';
import './half-screen.scss'


function HalfScreen(props) {
    const { t, i18n } = useTranslation();
    i18n.changeLanguage(props.language);
    
    return ( 
    <div id="half-screen" style={{backgroundColor: props.color}}>
        <div className="container" >
            <p className="text">{props.language.toUpperCase()}</p>
            <h2 className="title">{t('not sure')} <br /> {t('about size')}</h2>
            <p className="text">{t('we help')}</p>
            <img src={images[props.btnImg]} />
        </div>
    </div> );
}
 
export default HalfScreen;