
import React from "react";
import { Row, Col } from "antd";

function ProductInfo({ info = {} }) {
    console.log(info);
  return (
    <div>
    <Row gutter={[16,16]}>
        <Col SPAN={24}> {info.title}</Col>
        <Col SPAN={24}> {info.price}</Col>
        <Col SPAN={24}> {info.description}</Col>
        </Row>
    
    </div>
  );
}

export default ProductInfo;
