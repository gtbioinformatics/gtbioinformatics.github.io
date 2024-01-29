import Header from './components/Header'
import About from './components/About'
import Connect from './components/Connect';
import Members from './components/Members';
import './App.css';

import ReactGA from 'react-ga4';

const TRACKING_ID = "G-E0H8DVT55C";
ReactGA.initialize(TRACKING_ID);


function App() {
  return (
      <body className="mainApp">
      <Header />
      <About />
      <Members />
      <Connect />
      </body>
  );
}

export default App;
