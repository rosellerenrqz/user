import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useEffect } from "react";

const ErrorModal = (props) => {
  const { content } = props;
  const { confirm } = Modal;

  useEffect(() => {
    if (content) {
      confirm({
        title: "An error occurred!",
        icon: <ExclamationCircleOutlined />,
        content: content,
        okText: "Okay",
      });
    }
  }, [confirm, content]);

  return null;
};

export default ErrorModal;
