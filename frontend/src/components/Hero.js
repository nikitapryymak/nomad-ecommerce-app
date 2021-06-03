import { useHistory } from 'react-router';
import HeroImg from '../img/hero.jpg';
import './Hero.css';

export default function Hero() {

    const history = useHistory();

    return (
        <div className='Hero' style={{ backgroundImage: `url(${HeroImg})`}}>
            <div className="content">
                Bags reimagined for modern life.
                <button 
                    className='shop-btn'
                    onClick={() => history.push('/shop')} 
                    >SHOP NOW</button>
            </div>
        </div>
    )
}
