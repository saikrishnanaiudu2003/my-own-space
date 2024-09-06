import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    return (
        <div className='main-nav'>
            <div className='main-flex-nav-items'>
                <div>
                    <img src='../../../assets/navlogo.svg' alt="Logo" />
                </div>
                <ul className='list-items'>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? '#012B55' : '#677685',
                        })}
                    >
                        <li className='item-hover' style={{ cursor: 'pointer' }}>Home</li>
                    </NavLink>
                    <li style={{ width: '1px', height: '23px', backgroundColor: '#677685' }}></li>

                    <NavLink
                        to="/property"
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? '#012B55' : '#677685',
                        })}
                    >
                        <li className='item-hover' style={{ cursor: 'pointer' }}>Post Your Property</li>
                    </NavLink>
                    <li style={{ width: '1px', height: '23px', backgroundColor: '#677685' }}></li>

                    <NavLink
                        to="/contact"
                        style={({ isActive }) => ({
                            textDecoration: 'none',
                            color: isActive ? '#012B55' : '#677685',
                        })}
                    >
                        <li className='item-hover' style={{ cursor: 'pointer' }}>Contact Us</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
