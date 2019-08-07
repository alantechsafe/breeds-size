import React, { Component } from 'react';
import './footer.scss'
import images from '../../assets/';
class Footer extends Component {
    state = {  }
    render() { 
        return ( <div id="footer">
            <img src={images.logo} />
        </div> );
    }
}
 
export default Footer;