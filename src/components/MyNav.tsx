import { Component, ReactNode } from "react";
import { Nav } from "react-bootstrap";

class MyNav extends Component {
  state = {
    selected: "/",
  };

  handleSelect = (selectedKey: string | null) => {
    this.setState({ selected: selectedKey });
    console.log("selected:", this.state.selected);
  };

  render() {
    return (
      <Nav
        variant="pills"
        activeKey={this.state.selected}
        onSelect={(s) => this.handleSelect(s)}
      >
        <Nav.Item>
          <Nav.Link href="/" eventKey="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog" eventKey="/blog">
            Blog
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}
export default MyNav;
