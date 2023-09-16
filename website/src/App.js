import Header from './components/Header'
import './App.css';

function App() {
  return (
    <body className="mainApp">
      <Header />
      <div className='aboutUs'>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
      </div>
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
