import Header from './components/Header'
import About from './components/About'
import Connect from './components/Connect';
import Members from './components/Members';
import './App.css';

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
