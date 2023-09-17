import './About.css'
import Animation from './Animation'

function About() {
  return (
      <div className='about'>
        <div className='content'>
            <div className='heading'>Who we are</div>
            <div className='bodyText'>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.</p>
                <p>Ut optio veritatis ut inventore internos At distinctio quis vel facere enim ut quasi ipsa in veritatis dolorem. Est incidunt quia aut incidunt perferendis quo illo iure ea fugit quia. </p>  
            </div>
        </div>
        <div className='images'>
            <Animation />
        </div>
      </div>
  );
}

export default About;