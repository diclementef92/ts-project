import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Link
          className={`nav-link ${location.pathname} ==="/"? "active":"" `}
          to="/"
        >
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          className={`nav-link ${location.pathname} ==="/blog"? "active":"" `}
          to="/blog"
        >
          Blog
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default MyNav;
