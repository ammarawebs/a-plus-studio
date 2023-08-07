import Header from './Header/Header';
import Hero from './Hero/Hero';
import Our_client from './Our_client/Our_client';
import Business from './Business/Business';
import Video_section from './VideoSection/Video_section';
import Client_reviews from './Client_reviews/Client_reviews';
import Footer from './Footer/Footer';
import Subscribe from './Subscribe/Subscribe';
import Scroll_btn from './Scroll_button/Scroll_btn';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

    const focus = useRef()
    const scroll_top = useRef()
    const scroll_btn = useRef()    

    useEffect(()=>{

      focus.current.scrollIntoView() 
      window.onscroll = function(){

        // console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop > 269){
          scroll_btn.current.style.display ='block'
        }
        else{
          scroll_btn.current.style.display ='none'
        }
      }

    })



    const scroll_to_top = ()=> {
      
      scroll_top.current.scrollIntoView({ block: 'end',  behavior: 'smooth' }) 
      
     
      
      
    }



  return (
    <div className="App">
      <Header ref={scroll_top}/>
      <Hero/>
      <Our_client/>
      <Business/>
      <Video_section/>
      <Client_reviews/>
      <Subscribe ref={focus}/>
      <Footer/>
      <Scroll_btn
        onClick={scroll_to_top}
        ref={scroll_btn}
      />
    </div>
  );
}

export default App;
