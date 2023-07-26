import Header from './Header/Header';
import Hero from './Hero/Hero';
import Our_client from './Our_client/Our_client';
import Business from './Business/Business';
import Video_section from './VideoSection/Video_section';
import Client_reviews from './Client_reviews/Client_reviews';
import Subscribe from './Subscribe/Subscribe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Our_client/>
      <Business/>
      <Video_section/>
      <Client_reviews/>
      <Subscribe/>
    </div>
  );
}

export default App;
