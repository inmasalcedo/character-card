import React, { Component } from 'react';
import './App.scss';
import picture from './profile.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


library.add(faHeart)

class App extends Component {
 render() {
   const header = (
     <div className="header">
    <img src={picture} className="pict" alt="imagen" />
     <div className="data">
     <h1 className="title">O-Ren Ishii</h1>
     <h2 className="subtitle">Kill Bill, Vol 1, 2003</h2>
     </div> 
     </div>
   )
   
   const paragraph = (
     <p className="paragraph">Dainty-looking Chinese-Japanese-American. Don’t be deceived. Saw her parents murdered at age nine and now runs the Tokyo Yakuza. Has 44 bodyguards who call themselves the Crazy 88. In boardroom situations, super-touchy about her ancestry. Best not go there, or swift decapitation may ensue.</p>
   )

   const footer = (
     <div className="footer">
     <span className="read">Leer más...</span>
     <span className="number">37</span>
     <span className="heart"><FontAwesomeIcon icon="heart" /></span>
     </div>
   )

   const card = (
     <div className="container">
     <div className="card">
     {header} {paragraph} {footer}
     </div>
     </div>
   )
   return [card];

 }
}

export default App;