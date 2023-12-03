import './Navbar.css'

function NavBar() {
    const navUl = {
      "list-style": "none",
      "display": "flex",
      "flex-direction": "row",
      "gap": "2rem",
      "margin": "2rem"
    };
    const navAhref = {
      "color": "white",
      "text-decoration": "none"
    }
    return (
    <div className="navbar">
        <h3><a href="/" style={navAhref}>UMNBC</a></h3>
        <nav>
          <ul style={navUl}>
            <li><a href="#aboutUs" style={navAhref}>About us</a></li>
            <li><a href="/#" style={navAhref}>Resources</a></li>
            <li><a href="/#" style={navAhref}>Events</a></li>
          </ul>
        </nav>
    </div>
    );
}
export default NavBar;