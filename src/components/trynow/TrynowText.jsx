import React, { useState } from "react";
import {
  Button,
  Form,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { url } from "../../creds";
import "bootstrap-icons/font/bootstrap-icons.css";

const TrynowText = () => {
  const [inputLang, setInputLang] = useState("");
  const [outputLang, setOutputLang] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [responseData, setResponseData] = useState("");
  const isUrdu = inputLang === "urd";
  const isUrdu_o = outputLang === "urd";
  const langMap = {
    asm: "Assamese",
    ben: "Bengali",
    bod: "Bodo",
    guj: "Gujarati",
    hin: "Hindi",
    kan: "Kannada",
    kok: "Konkani",
    mal: "Malayalam",
    mar: "Marathi",
    nep: "Nepali",
    ori: "Oriya",
    pan: "Punjabi",
    eng: "Roman(ENG)",
    tam: "Tamil",
    tel: "Telugu",
    urd: "Urdu",
  };

  const handleLangSelect = (eventKey, isInput) => {
    isInput ? setInputLang(eventKey) : setOutputLang(eventKey);
  };
  const handleSubmit = async () => {
    setResponseData("");
    if (!inputLang) {
      toast.error("Please select a source language.");
      return;
    }
    if (!outputLang) {
      toast.error("Please select a target language.");
      return;
    }
    if (inputLang === outputLang) {
      toast.error("Source and Target Languages cannot be same.");
      return;
    }
    if (fileContent.length === 4999) {
      toast.error("File content exceeds 5000 characters limit.");
      return;
    }
    if (fileContent === "") {
      toast.error("Please enter Source text");
      return;
    } else {
      toast.info("fetching..", { autoClose: 15000 });
    }

    try {
      const response = await fetch(url + "transliterate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          src: inputLang,
          tar: outputLang,
          inp: fileContent,
        }),
      });
      const data = await response.json();
      const target = data[0].output;
      const status = data[1].status;
      toast.dismiss();
      setResponseData(target);
      console.log(target);
      console.log(status);
    } catch (error) {
      console.error("Error:", error);
      setTimeout(() => {
        toast.dismiss();
        toast.error("Server down, Please try after sometime.");
      }, 1000);
    } finally {
    }
  };
  return (
    <div className="bg-white p-3 rounded shadow-sm mt-0"> {/* Changed container-fluid to simple div and adjusted padding */}
      {/* Dropdowns for Source and Target Languages */}
      <Row className="align-items-center mb-3 flex-wrap justify-content-center"> {/* Reduced mb-4 to mb-3 */}
        <Col
          xs="auto"
          md="auto"
          lg="auto"
          className="d-flex align-items-center mb-2 mb-md-0"
        >
          <DropdownButton
            id="dropdown-source"
            title={langMap[inputLang] || "Source"}
            variant="light"
            onSelect={(eventKey) => handleLangSelect(eventKey, true)}
            drop="down"
            className="me-2 btn-sm"
          >
            <div style={{ maxHeight: "550px", overflowY: "auto" }}>
              {Object.entries(langMap).map(([key, value]) => (
                <Dropdown.Item key={key} eventKey={key}>
                  {value}
                </Dropdown.Item>
              ))}
            </div>
          </DropdownButton>
        </Col>

        <Col xs="auto" className="mb-2 mb-md-0">
          <Button
            variant="light"
            className="border me-2"
            onClick={() => {
              setInputLang(outputLang);
              setOutputLang(inputLang);
              setFileContent(responseData);
              setResponseData("");
            }}
          >
            <i className="bi bi-arrow-left-right"></i>
          </Button>
        </Col>

        <Col
          xs="auto"
          md="auto"
          lg="auto"
          className="d-flex align-items-center mb-2 mb-md-0"
        >
          <DropdownButton
            id="dropdown-target"
            title={langMap[outputLang] || "Target"}
            variant="light"
            onSelect={(eventKey) => handleLangSelect(eventKey, false)}
            drop="down"
            className="btn-sm"
          >
            <div style={{ maxHeight: "550px", overflowY: "auto" }}>
              {Object.entries(langMap).map(([key, value]) => (
                <Dropdown.Item key={key} eventKey={key}>
                  {value}
                </Dropdown.Item>
              ))}
            </div>
          </DropdownButton>
        </Col>
      </Row>
      {/* Text Areas */}
      <Row className="mb-3"> {/* Reduced mb-4 to mb-3 */}
        <Col xs={12} md={6}>
          <Form.Control
            as="textarea"
            rows={20}
            placeholder="Enter Source text here."
            maxLength="5000"
            className="border-primary"
            style={{
              minHeight: "150px",
              maxHeight: "300px",
              fontSize: "20px",
              direction: isUrdu ? "rtl" : "ltr",
              fontFamily: isUrdu
                ? "Nafees Web Naskh, sans-serif"
                : "inherit",
            }}
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
            rows={20}
            placeholder="Transliterated text will appear here upon clicking submit."
            maxLength="5000"
            style={{
              minHeight: "150px",
              maxHeight: "300px",
              direction: isUrdu_o ? "rtl" : "ltr",
              fontSize: "20px",
              fontFamily: isUrdu_o
                ? "Nafees Web Naskh, sans-serif"
                : "inherit",
            }}
            value={responseData}
            onChange={(e) => setResponseData(e.target.value)}
          />
        </Col>
      </Row>

      {/* Clear and Submit Buttons */}
      <Row className="justify-content-end mb-3"> {/* Reduced mb-4 to mb-3 */}
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
          <Button
            variant="primary"
            onClick={handleSubmit}
            style={{
              backgroundColor: "#1fbaec",
              borderColor: "#1fbaec",
              color: "#FFFFFF",
              fontWeight: "600",
            }}
          >
            Submit
          </Button>
        </Col>
      </Row>

      {/* Sample Buttons */}
      <Row className="mt-3 text-center"> {/* Reduced mt-4 to mt-3 */}
        {[
          {
            label: "Sample Roman",
            langCode: "eng",
            content: "Transliteration system main aap kaa swaagat hai",
          },
          {
            label: "Sample Hindi",
            langCode: "hin",
            content: "ट्रांसलिट्रेशन सिस्टम मैं आप का स्वागत हैं। ",
          },
          {
            label: "Sample Urdu",
            langCode: "urd",
            content: "ٹرانسلٹیریشن سس्टم میں آپ کا سواگت ہے.",
          },
        ].map(({ label, langCode, content }) => (
          <Col xs="auto" key={label} className="mb-2">
            <Button
              variant="primary"
              onClick={() => {
                setFileContent(content);
                setInputLang(langCode);
              }}
              style={{
                backgroundColor: "#1fbaec",
                borderColor: "#1fbaec",
                color: "#FFFFFF",
                fontWeight: "600",
                minWidth: "120px",
              }}
              className="hover-effect"
            >
              {label}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TrynowText;