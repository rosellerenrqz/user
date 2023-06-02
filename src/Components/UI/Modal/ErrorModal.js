import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";

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

  return (
    <Modal
      title="An error occurred!"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Okay"
      maskClosable={false}>
      <p>
        <ExclamationCircleOutlined /> {content}
      </p>
    </Modal>
  );
};

export default ErrorModal;
