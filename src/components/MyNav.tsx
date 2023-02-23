import { Component, ReactNode } from "react";
import { Nav } from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Nav variant="pills" defaultActiveKey="home">
        <Nav.Item>
          <Nav.Link href="/" eventKey="home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog" eventKey="blog">
            Blog
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
export default MyNav;
