import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className='NotFound'>
            Error 404. Page not found. Back to <Link to='/'>home.</Link>
        </div>
    )
}
