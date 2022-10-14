import "./index.scss";
import { Link, NavLink } from 'react-router-dom';
import AsutrioLogo from '../../assets/images/AsutrioWhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter, faSalesforce } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to= "/">
            <img src={AsutrioLogo} alt='logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="salesforce-link" to="/salesforce">
            <FontAwesomeIcon icon={faSalesforce} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a  target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/asutrio">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a  target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/asutrio">
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a  target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/asutrio">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar;