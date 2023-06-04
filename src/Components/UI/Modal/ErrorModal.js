import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ErrorModal = ({ content, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (content) {
      setIsVisible(true);
    }
  }, [content]);

  const handleOk = () => {
    setIsVisible(false);
    onClose();
  };

  const handleCancel = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible
    ? ReactDOM.createPortal(
        <Modal
          title="An error occurred!"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Okay"
          maskClosable={true}
          keyboard={true}
          getContainer={() => document.getElementById("modal")}>
          <p style={{ fontSize: "1rem" }}>
            <ExclamationCircleOutlined style={{ color: "#CD1818" }} /> {content}
          </p>
        </Modal>,
        document.getElementById("modal")
      )
    : null;
};

export default ErrorModal;
