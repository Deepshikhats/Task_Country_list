import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
interface HeaderProps {
  filterOptions: string[];
  activeOption: TFilterOptions;
  setActive: React.Dispatch<React.SetStateAction<TFilterOptions>>;
}
const Header: React.FC<HeaderProps> = ({
  activeOption,
  filterOptions,
  setActive,
}) => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <h3>Countries</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {filterOptions.map((option: string, index: number) => (
                //@ts-ignore
                <Nav.Link
                  href="#home"
                  key={index}
                  onClick={() => setActive(option)}
                  className={`${activeOption === option && 'nav-link_active'}`}
                >
                  {option}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
