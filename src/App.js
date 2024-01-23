import { ReactComponent as Logo } from './logo.svg';
import ShopIcon  from './icon_shop_1.png';

function App() {
  return (
    <div className='title'>
        
        <div className='logoItem'>
            <Logo className="logo"/>
            <p className="tagLine">
              <span>Your one stop shop</span> 
             <img src={ShopIcon} alt="shop icon" />
            </p>
        </div>
        <div className='comingsoonText'>
          <i className="fa-solid fa-gear"></i>
          <h1>Coming Soon!</h1>
        </div>
        <div>
          <a href="mailto:internals.theinfini@gmail.com" className="getInTouch">Get in touch</a>
        </div>
    </div>
  );
}

export default App;
