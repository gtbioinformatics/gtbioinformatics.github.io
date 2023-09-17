import Header from './components/Header'
import About from './components/About'
import './App.css';

function App() {
  return (
    <body className="mainApp">
      <Header />
      <About />
      <div className='contactLinks'>
        <ul>
          <li>Discord</li>
          <li>Instagram</li>
          <li>Newsletter</li>
          <li>Engage</li>
          <li>Email</li>
        </ul>
      </div>
    </body>
  );
}

export default App;
