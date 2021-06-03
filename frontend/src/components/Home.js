import Hero from './Hero';
import MainItem from './MainItem';
import './Home.css';
import FeaturedSection from './FeaturedSection';

export default function Home() {
    return (
        <div className='Home'>
            <Hero />
            <MainItem />
            <FeaturedSection />
        </div>
    )
}
