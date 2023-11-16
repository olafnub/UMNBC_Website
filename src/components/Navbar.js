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
    const navLi = {

    }
    const header = {
      "color": "red"
    };
    return (
    <div className="navbar">
        <h3 style={header}>UMNBC</h3>
        <nav>
          <ul style={navUl}>
            <li style={navLi}><a href="/#" style={navAhref}>About us</a></li>
            <li style={navLi}><a href="/#" style={navAhref}>Resources</a></li>
            <li style={navLi}><a href="/#" style={navAhref}>Events</a></li>
          </ul>
        </nav>
    </div>
    );
}
export default NavBar;