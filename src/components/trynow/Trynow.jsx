import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TryNowText from "./TrynowText";
import TryNowFiles from "./TrynowFiles";

const TryNow = () => {
  const [activeTab, setActiveTab] = useState("text");

  const tabStyles = {
    active: {
      backgroundColor: "#1fbaec",
      borderColor: "#1fbaec",
      color: "#FFFFFF",
      fontWeight: "600",
      minWidth: "120px",
    },
    inactive: {
      backgroundColor: "transparent",
      borderColor: "#C0C0C0",
      color: "#000000",
      fontWeight: "600",
      minWidth: "120px",
    }
  };

  const tabs = [
    { id: "text", label: "Text" },
    { id: "file", label: "File" },
    { id: "image", label: "Image" },
    { id: "website", label: "Website" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "text":
        return <TryNowText />;
      case "file":
        return <TryNowFiles />;
      case "image":
      case "website":
        return (
          <div className="text-center py-5">
            <h3>Coming Soon...</h3>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="pt-5 mt-5 pb-0 mb-0">
      <Row className="mb-4">
        <Col>
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              className="mx-2"
              style={activeTab === tab.id ? tabStyles.active : tabStyles.inactive}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </Col>
      </Row>

      <Row>
        <Col>{renderContent()}</Col>
      </Row>
    </Container>
  );
};

export default TryNow;