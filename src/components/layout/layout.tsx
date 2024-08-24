import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  return (
    <Container className="h-full py-5">
      <Row>
        <Col>
          <Outlet />
        </Col>
        <Col className="d-none d-lg-block">image</Col>
      </Row>
    </Container>
  );
};

export default Layout;
