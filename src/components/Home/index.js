import { Link } from 'react-router-dom';
import './index.scss';
// import HomeWallpaper from './../../assets/images/Home-background.png';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Let Us Focus On Your <br /> INNOVATION</h1>
                <Link to="/contact" className="flat-button">Contact Us</Link>
            </div>
            <div className='homeImg'>
                {/* <img src={HomeWallpaper} alt='DarktoLight' /> */}
            </div>
        </div>
    )

}

export default Home