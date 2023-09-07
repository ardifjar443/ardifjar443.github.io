import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function AppNavbar({ activeTab, setActiveTab }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsNavExpanded(false); // Menutup navbar pada tampilan mobile setelah tautan diklik
  };

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      className="border border-black border-5 rounded-bottom-5 loading-halaman navbar-expand-lg "
      expanded={isNavExpanded}
    >
      <Container fluid>
        <Navbar.Brand className="fs-2 fw-bold" href="#" id="ehe">
          ArdiFjar443
          <span className="me-5 ms-2 text-secondary fs-4">{activeTab}</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          className="customToggle border-3"
          style={{ borderColor: "#078080" }}
        />

        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="ml-end">
            {" "}
            {/* Mengatur tombol kanan pada tampilan desktop */}
            <Nav.Link
              className={`fs-3 modal-button ${
                activeTab === "home"
                  ? "text-light rounded-2 p-2 border border-5 border-black"
                  : ""
              }`}
              href="#"
              id="content"
              onClick={() => handleTabClick("home")}
              style={activeTab == "home" ? { backgroundColor: "#078080" } : {}}
            >
              Home
            </Nav.Link>
          </Nav>
          <Nav className="ml-end">
            {" "}
            {/* Mengatur tombol kanan pada tampilan mobile */}
            <Nav.Link
              className={`fs-3 modal-button ${
                activeTab === "contact"
                  ? "text-light rounded-2 p-2 border border-5 border-black"
                  : ""
              }`}
              href="#"
              id="content"
              onClick={() => handleTabClick("contact")}
              style={
                activeTab == "contact" ? { backgroundColor: "#078080" } : {}
              }
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
