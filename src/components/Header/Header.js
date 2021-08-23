import logo from '../../logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <span> Some header presentation </span>
        </header>
    );
}

export default Header;
