import React from "react";
import {
  Button,
  Form,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";

const Trynow = () => {
  return (
    <main id="main" className="p-3">
      <section id="about" className="about">
        <div
          className="container-fluid p-4"
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            paddingBottom: "50px",
          }}
        >
          {/* Mobile View */}
          <div className="d-block d-sm-none">
            <Row className="mb-3 justify-content-center">
              {/* Line 1: Upload Button */}
              <Col xs="auto" className="text-center">
                <Button
                  variant="light"
                  className="border"
                  style={{ fontSize: "0.9rem", padding: "4px 10px" }}
                >
                  <i className="bi bi-upload"></i> Upload
                </Button>
              </Col>
            </Row>

            {/* Line 2: Source Dropdown, Arrow Button, Target Dropdown */}
            <Row className="mb-3 justify-content-center">
              <Col xs="auto" className="px-2">
                <DropdownButton
                  id="dropdown-source"
                  title="Source"
                  variant="light"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  <Dropdown.Item eventKey="as">Assamese</Dropdown.Item>
                  <Dropdown.Item eventKey="bn">Bengali</Dropdown.Item>
                  <Dropdown.Item eventKey="brx">Bodo</Dropdown.Item>
                  <Dropdown.Item eventKey="doi">Dogri</Dropdown.Item>
                  <Dropdown.Item eventKey="en">English</Dropdown.Item>
                  <Dropdown.Item eventKey="gu">Gujarati</Dropdown.Item>
                  <Dropdown.Item eventKey="hi">Hindi</Dropdown.Item>
                  <Dropdown.Item eventKey="ks">Kashmiri</Dropdown.Item>
                  <Dropdown.Item eventKey="kn">Kannada</Dropdown.Item>
                  <Dropdown.Item eventKey="gom">Konkani</Dropdown.Item>
                  <Dropdown.Item eventKey="ml">Malayalam</Dropdown.Item>
                  <Dropdown.Item eventKey="mai">Maithili</Dropdown.Item>
                  <Dropdown.Item eventKey="mr">Marathi</Dropdown.Item>
                  <Dropdown.Item eventKey="ne">Nepali</Dropdown.Item>
                  <Dropdown.Item eventKey="or">Oriya</Dropdown.Item>
                  <Dropdown.Item eventKey="pa">Punjabi</Dropdown.Item>
                  <Dropdown.Item eventKey="sa">Sanskrit</Dropdown.Item>
                  <Dropdown.Item eventKey="sd">Sindhi</Dropdown.Item>
                  <Dropdown.Item eventKey="ta">Tamil</Dropdown.Item>
                  <Dropdown.Item eventKey="te">Telugu</Dropdown.Item>
                  <Dropdown.Item eventKey="ur">Urdu</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col xs="auto">
                <Button
                  variant="light"
                  className="border"
                  style={{ fontSize: "1rem", padding: "4px 8px" }}
                >
                  <i className="bi bi-arrow-left-right"></i>
                </Button>
              </Col>
              <Col xs="auto" className="px-2">
                <DropdownButton
                  id="dropdown-target"
                  title="Target"
                  variant="light"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  <Dropdown.Item eventKey="as">Assamese</Dropdown.Item>
                  <Dropdown.Item eventKey="bn">Bengali</Dropdown.Item>
                  <Dropdown.Item eventKey="brx">Bodo</Dropdown.Item>
                  <Dropdown.Item eventKey="doi">Dogri</Dropdown.Item>
                  <Dropdown.Item eventKey="en">English</Dropdown.Item>
                  <Dropdown.Item eventKey="gu">Gujarati</Dropdown.Item>
                  <Dropdown.Item eventKey="hi">Hindi</Dropdown.Item>
                  <Dropdown.Item eventKey="ks">Kashmiri</Dropdown.Item>
                  <Dropdown.Item eventKey="kn">Kannada</Dropdown.Item>
                  <Dropdown.Item eventKey="gom">Konkani</Dropdown.Item>
                  <Dropdown.Item eventKey="ml">Malayalam</Dropdown.Item>
                  <Dropdown.Item eventKey="mai">Maithili</Dropdown.Item>
                  <Dropdown.Item eventKey="mr">Marathi</Dropdown.Item>
                  <Dropdown.Item eventKey="ne">Nepali</Dropdown.Item>
                  <Dropdown.Item eventKey="or">Oriya</Dropdown.Item>
                  <Dropdown.Item eventKey="pa">Punjabi</Dropdown.Item>
                  <Dropdown.Item eventKey="sa">Sanskrit</Dropdown.Item>
                  <Dropdown.Item eventKey="sd">Sindhi</Dropdown.Item>
                  <Dropdown.Item eventKey="ta">Tamil</Dropdown.Item>
                  <Dropdown.Item eventKey="te">Telugu</Dropdown.Item>
                  <Dropdown.Item eventKey="ur">Urdu</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>

            {/* Line 3: Clear and Submit Buttons */}
            <Row className="mb-3 justify-content-center">
              <Col xs="auto">
                <Button
                  variant="link"
                  className="text-dark"
                  style={{ fontSize: "0.9rem", fontWeight: "bold" }}
                >
                  Clear
                </Button>
              </Col>
              <Col xs="auto">
                <Button
                  variant="primary"
                  style={{ fontSize: "0.9rem", padding: "4px 12px" }}
                >
                  Submit
                </Button>
              </Col>
            </Row>

            {/* Textarea Row: Source and Target Textareas */}
            <Row>
              <Col xs={12} className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter Source text here."
                  className="border border-primary"
                  maxLength="5000"
                  style={{
                    fontSize: "0.9rem",
                    padding: "10px",
                  }}
                />
                <small
                  className="d-block text-end text-muted"
                  style={{ fontSize: "0.8rem" }}
                >
                  0/5000
                </small>
              </Col>
              <Col xs={12}>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Translated text will appear here upon clicking submit."
                  className="border"
                  readOnly
                  style={{
                    fontSize: "0.9rem",
                    padding: "10px",
                  }}
                />
              </Col>
            </Row>
          </div>

          {/* PC View (unchanged) */}
          <div className="d-none d-sm-block">
            <Row className="mb-4 align-items-center">
              <Col xs="auto">
                <Button
                  variant="light"
                  className="border"
                  style={{ fontSize: "1rem", padding: "5px 15px" }}
                >
                  <i className="bi bi-upload"></i> Upload
                </Button>
              </Col>
              <Col className="text-center">
                <Row className="justify-content-center align-items-center">
                  <Col xs="auto" className="px-2">
                    <DropdownButton
                      id="dropdown-source"
                      title="Source"
                      variant="light"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      <Dropdown.Item eventKey="as">Assamese</Dropdown.Item>
                  <Dropdown.Item eventKey="bn">Bengali</Dropdown.Item>
                  <Dropdown.Item eventKey="brx">Bodo</Dropdown.Item>
                  <Dropdown.Item eventKey="doi">Dogri</Dropdown.Item>
                  <Dropdown.Item eventKey="en">English</Dropdown.Item>
                  <Dropdown.Item eventKey="gu">Gujarati</Dropdown.Item>
                  <Dropdown.Item eventKey="hi">Hindi</Dropdown.Item>
                  <Dropdown.Item eventKey="ks">Kashmiri</Dropdown.Item>
                  <Dropdown.Item eventKey="kn">Kannada</Dropdown.Item>
                  <Dropdown.Item eventKey="gom">Konkani</Dropdown.Item>
                  <Dropdown.Item eventKey="ml">Malayalam</Dropdown.Item>
                  <Dropdown.Item eventKey="mai">Maithili</Dropdown.Item>
                  <Dropdown.Item eventKey="mr">Marathi</Dropdown.Item>
                  <Dropdown.Item eventKey="ne">Nepali</Dropdown.Item>
                  <Dropdown.Item eventKey="or">Oriya</Dropdown.Item>
                  <Dropdown.Item eventKey="pa">Punjabi</Dropdown.Item>
                  <Dropdown.Item eventKey="sa">Sanskrit</Dropdown.Item>
                  <Dropdown.Item eventKey="sd">Sindhi</Dropdown.Item>
                  <Dropdown.Item eventKey="ta">Tamil</Dropdown.Item>
                  <Dropdown.Item eventKey="te">Telugu</Dropdown.Item>
                  <Dropdown.Item eventKey="ur">Urdu</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col xs="auto">
                    <Button
                      variant="light"
                      className="border"
                      style={{ fontSize: "1.2rem", padding: "5px 10px" }}
                    >
                      <i className="bi bi-arrow-left-right"></i>
                    </Button>
                  </Col>
                  <Col xs="auto" className="px-2">
                    <DropdownButton
                      id="dropdown-target"
                      title="Target"
                      variant="light"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      <Dropdown.Item eventKey="as">Assamese</Dropdown.Item>
                  <Dropdown.Item eventKey="bn">Bengali</Dropdown.Item>
                  <Dropdown.Item eventKey="brx">Bodo</Dropdown.Item>
                  <Dropdown.Item eventKey="doi">Dogri</Dropdown.Item>
                  <Dropdown.Item eventKey="en">English</Dropdown.Item>
                  <Dropdown.Item eventKey="gu">Gujarati</Dropdown.Item>
                  <Dropdown.Item eventKey="hi">Hindi</Dropdown.Item>
                  <Dropdown.Item eventKey="ks">Kashmiri</Dropdown.Item>
                  <Dropdown.Item eventKey="kn">Kannada</Dropdown.Item>
                  <Dropdown.Item eventKey="gom">Konkani</Dropdown.Item>
                  <Dropdown.Item eventKey="ml">Malayalam</Dropdown.Item>
                  <Dropdown.Item eventKey="mai">Maithili</Dropdown.Item>
                  <Dropdown.Item eventKey="mr">Marathi</Dropdown.Item>
                  <Dropdown.Item eventKey="ne">Nepali</Dropdown.Item>
                  <Dropdown.Item eventKey="or">Oriya</Dropdown.Item>
                  <Dropdown.Item eventKey="pa">Punjabi</Dropdown.Item>
                  <Dropdown.Item eventKey="sa">Sanskrit</Dropdown.Item>
                  <Dropdown.Item eventKey="sd">Sindhi</Dropdown.Item>
                  <Dropdown.Item eventKey="ta">Tamil</Dropdown.Item>
                  <Dropdown.Item eventKey="te">Telugu</Dropdown.Item>
                  <Dropdown.Item eventKey="ur">Urdu</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
              </Col>
              <Col xs="auto" className="text-end">
                <Button
                  variant="link"
                  className="text-dark ms-2"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                >
                  Clear
                </Button>
                <Button
                  variant="primary"
                  style={{ fontSize: "1rem", padding: "5px 15px" }}
                >
                  Submit
                </Button>
              </Col>
            </Row>

            {/* Textarea Row */}
            <Row>
              <Col md={6} className="mb-4">
                <Form.Control
                  as="textarea"
                  rows={10}
                  placeholder="Enter Source text here."
                  className="border border-primary"
                  maxLength="5000"
                  style={{
                    fontSize: "1.1rem",
                    padding: "15px",
                    minHeight: "400px",
                  }}
                />
                <small
                  className="d-block text-end text-muted"
                  style={{ fontSize: "1rem" }}
                >
                  0/5000
                </small>
              </Col>
              <Col md={6}>
                <Form.Control
                  as="textarea"
                  rows={10}
                  placeholder="Translated text will appear here upon clicking submit."
                  className="border"
                  readOnly
                  style={{
                    fontSize: "1.1rem",
                    padding: "15px",
                    minHeight: "400px",
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>
        {/* Sample Buttons Row */}
        <Row className="mt-4">
          {/* PC and Tablet View */}
          <Col xs="auto" className="d-none d-sm-block">
            <Button
              variant="primary"
              className="me-2"
              style={{ fontSize: "1rem", padding: "8px 15px" }}
            >
              Sample English
            </Button>
            <Button
              variant="primary"
              className="me-2"
              style={{ fontSize: "1rem", padding: "8px 15px" }}
            >
              Sample Hindi
            </Button>
            <Button
              variant="primary"
              style={{ fontSize: "1rem", padding: "8px 15px" }}
            >
              Sample Urdu
            </Button>
          </Col>

          {/* Mobile View */}
          <Col xs="auto" className="d-block d-sm-none text-center mb-2">
            <Button
              variant="primary"
              className="me-2"
              style={{ fontSize: "0.9rem", padding: "5px 10px" }}
            >
              Sample English
            </Button>
            <Button
              variant="primary"
              className="me-2"
              style={{ fontSize: "0.9rem", padding: "5px 10px" }}
            >
              Sample Hindi
            </Button>
            <Button
              variant="primary"
              style={{ fontSize: "0.9rem", padding: "5px 10px" }}
            >
              Sample Urdu
            </Button>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Trynow;
