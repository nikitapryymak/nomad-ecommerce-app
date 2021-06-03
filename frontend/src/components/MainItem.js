import { useHistory } from 'react-router';
import studioBag from '../img/studio-bag.png';
import './MainItem.css';

export default function MainItem() {

    const history = useHistory();

    function handleClick() {
        history.push('/product/1');
    }

    return (
        <div className='MainItem'>
            <img src={studioBag} alt="studio bag" />
            <div className="text">
                <h2>Designed for fashion. Crafted for sport.</h2>
                <p>
                    We make products that effortlessly transition from day to night. From the board 
                    room to the fitness studio, and everywhere in between, each Nomads piece is 
                    thoughtfully created to be the perfect balance of form and function.
                </p>
                <button onClick={handleClick}>STUDIO BAG</button>
            </div>
        </div>
    )
}
