import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>Future</span>

            <Outlet />

            <span className='tags bottom-tags'>
            Vision
            </span>
            
        </div>
    </div>
    )
}

export default Layout