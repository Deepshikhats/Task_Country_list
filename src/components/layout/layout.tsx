import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
const Layout: React.FC = () => {
  return (
    <Container className="h-100 py-5">
      <Row className="h-100">
        <Col className="my-auto">
          <Outlet />
        </Col>
        <Col className="d-none d-lg-block">image</Col>
      </Row>
    </Container>
  );
};

export default Layout;
