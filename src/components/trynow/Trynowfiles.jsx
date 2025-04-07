import React, { useState } from "react";
import {
  Button,
  Form,
  Dropdown,
  DropdownButton,
  Row,
  Col,
  Container,
  Card,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TryNowFiles = () => {
  const navigate = useNavigate();
  const [inputLang, setInputLang] = useState("");
  const [outputLang, setOutputLang] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = [
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      ];

      if (validTypes.includes(file.type)) {
        setSelectedFile(file);
      } else {
        toast.error(
          "Unsupported file type. Please upload .docx, .txt, .xlsx, or .pptx files."
        );
      }
    }
  };

  const handleSubmit = async () => {
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
    if (!selectedFile) {
      toast.error("Please select a file.");
      return;
    }

    setIsProcessing(true);
    const formData = new FormData();
    formData.append("src", inputLang);
    formData.append("tar", outputLang);
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/transliterate",
        formData,
        {
          responseType: "blob",
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Create download link for the returned file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `transliterated_${selectedFile.name}`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      toast.success("File transliterated successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error processing file. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main id="main" className="p-3">
      <section id="try-now-files" className="try-now-files">
        <Container fluid className="bg-white p-4 rounded shadow-sm">
          <Button
            variant="light"
            className="mb-3"
            onClick={() => navigate("/trynow")}
          >
            <i className="bi bi-arrow-left"></i> Back to Text Input
          </Button>

          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <Row className="align-items-center mb-4 flex-wrap justify-content-center">
                <Col
                  xs="auto"
                  md="auto"
                  lg="auto"
                  className="d-flex align-items-center mb-2 mb-md-0"
                >
                  <DropdownButton
                    id="dropdown-source-files"
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
                    id="dropdown-target-files"
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

              <div className="text-center py-5">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label className="d-block mb-3 fs-5">
                    Or choose a file
                  </Form.Label>
                  <div className="border border-2 border-dashed rounded p-5 bg-light">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".docx,.txt,.xlsx,.pptx"
                      id="file-upload"
                      className="d-none"
                    />
                    <label
                      htmlFor="file-upload"
                      className="btn btn-primary px-4 py-2"
                      style={{
                        backgroundColor: "#1fbaec",
                        borderColor: "#1fbaec",
                        fontWeight: "600",
                      }}
                    >
                      <i className="bi bi-cloud-arrow-up me-2"></i>
                      Browse your files
                    </label>
                    <p className="mt-3 text-muted">
                      Supported file types: .docx, .txt, .xlsx, .pptx
                    </p>
                    {selectedFile && (
                      <div className="mt-3">
                        <i className="bi bi-file-earmark-text me-2"></i>
                        {selectedFile.name}
                      </div>
                    )}
                  </div>
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  disabled={
                    !selectedFile || !inputLang || !outputLang || isProcessing
                  }
                  style={{
                    backgroundColor: "#1fbaec",
                    borderColor: "#1fbaec",
                    color: "#FFFFFF",
                    fontWeight: "600",
                    minWidth: "120px",
                  }}
                >
                  {isProcessing ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Processing...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </main>
  );
};

export default TryNowFiles;
