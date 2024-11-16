import React, { useState } from "react";
import {
  Button,
  Form,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";

const Trynow = () => {
  const [inputLang, setInputLang] = useState("");
  const [outputLang, setOutputLang] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [responseData, setResponseData] = useState("");

  const langMap = {
    as: "Assamese",
    bn: "Bengali",
    brx: "Bodo",
    doi: "Dogri",
    en: "English",
    gu: "Gujarati",
    hi: "Hindi",
    ks: "Kashmiri",
    kn: "Kannada",
    gom: "Konkani",
    ml: "Malayalam",
    mai: "Maithili",
    mr: "Marathi",
    ne: "Nepali",
    or: "Oriya",
    pa: "Punjabi",
    sa: "Sanskrit",
    sd: "Sindhi",
    ta: "Tamil",
    te: "Telugu",
    ur: "Urdu",
  };

  const handleLangSelect = (eventKey, isInput) => {
    isInput ? setInputLang(eventKey) : setOutputLang(eventKey);
  };

  return (
    <main id="main" className="p-3">
      <section id="try-now" className="try-now">
        <div className="container-fluid bg-white p-4 rounded shadow-sm">
          {/* Upload and Dropdowns */}
          <Row
            className="align-items-center mb-4"
            style={{ flexWrap: "wrap", justifyContent: "space-between" }}
          >
            <Col xs="auto" className="mb-2 mb-md-0">
              <Button variant="light" className="border">
                <i className="bi bi-upload"></i> Upload
              </Button>
            </Col>
            <Col xs="auto" className="d-flex flex-column flex-md-row align-items-center mb-2 mb-md-0">
              <DropdownButton
                id="dropdown-source"
                title={langMap[inputLang] || "Source"}
                variant="light"
                onSelect={(eventKey) => handleLangSelect(eventKey, true)}
                drop="down"
                className="me-2 mb-2 mb-md-0"
              >
                <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                  {Object.entries(langMap).map(([key, value]) => (
                    <Dropdown.Item key={key} eventKey={key}>
                      {value}
                    </Dropdown.Item>
                  ))}
                </div>
              </DropdownButton>
              <Button
                variant="light"
                className="border me-2 mb-2 mb-md-0"
                onClick={() => {
                  setInputLang(outputLang);
                  setOutputLang(inputLang);
                  setFileContent(responseData);
                  setResponseData("");
                }}
              >
                <i className="bi bi-arrow-left-right"></i>
              </Button>
              <DropdownButton
                id="dropdown-target"
                title={langMap[outputLang] || "Target"}
                variant="light"
                onSelect={(eventKey) => handleLangSelect(eventKey, false)}
                drop="down"
              >
                <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                  {Object.entries(langMap).map(([key, value]) => (
                    <Dropdown.Item key={key} eventKey={key}>
                      {value}
                    </Dropdown.Item>
                  ))}
                </div>
              </DropdownButton>
            </Col>
            <Col xs="auto" className="text-center">
              <Button
                variant="link"
                className="text-dark fw-bold me-2"
                onClick={() => {
                  setInputLang("");
                  setOutputLang("");
                  setFileContent("");
                  setResponseData("");
                }}
              >
                Clear
              </Button>
              <Button variant="primary">Submit</Button>
            </Col>
          </Row>

          {/* Textareas */}
          <Row>
            <Col xs={12} md={6} className="mb-4">
              <Form.Control
                as="textarea"
                rows={15}
                placeholder="Enter Source text here."
                maxLength="5000"
                className="border-primary"
                style={{ minHeight: "300px" }}
                value={fileContent}
                onChange={(e) => setFileContent(e.target.value)}
              />
              <small className="d-block text-end text-muted">
                {fileContent.length}/5000
              </small>
            </Col>
            <Col xs={12} md={6}>
              <Form.Control
                as="textarea"
                rows={15}
                placeholder="Translated text will appear here upon clicking submit."
                style={{ minHeight: "300px" }}
                value={responseData}
                onChange={(e) => setResponseData(e.target.value)}
              />
            </Col>
          </Row>

          {/* Sample Buttons */}
          <Row className="mt-4 text-center">
            {[
              {
                label: "Sample English",
                langCode: "en",
                content: "Welcome to Translation system.",
              },
              {
                label: "Sample Hindi",
                langCode: "hi",
                content: "स्वागत है अनुवाद प्रणाली में।",
              },
              {
                label: "Sample Urdu",
                langCode: "ur",
                content: "خوش آمدید ترجمہ سسٹم میں۔",
              },
            ].map(({ label, langCode, content }) => (
              <Col xs="auto" key={label} className="mb-2">
                <Button
                  variant="primary"
                  onClick={() => {
                    setFileContent(content);
                    setInputLang(langCode);
                  }}
                >
                  {label}
                </Button>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </main>
  );
};

export default Trynow;
