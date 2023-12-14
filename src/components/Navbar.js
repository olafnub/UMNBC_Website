import './Navbar.css'

function NavBar() {
    return (
    <div className="navbar">
        <h3><a href="/" className="navAhref">UMNBC</a></h3>
        <nav>
          <ul className="navUl">
            <li><a href="#aboutUs" className="navAhref">About us</a></li>
            <li><a href="/#" className="navAhref">Resources</a></li>
            <li><a href="/#" className="navAhref">Events</a></li>
          </ul>
        </nav>
    </div>
    );
}
export default NavBar;