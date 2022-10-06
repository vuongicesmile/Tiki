import React, { useState } from "react";
import { Row, Col, Skeleton } from "antd";
import {useNavigate} from 'react-router-dom';


function ProductList({ data }) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = (i) => {
    navigate(`/productsdetail?${i}`)
  }
   return (
    <Col span={24}>
      <Row className="productskelaton-container">
        {data.map((item,index) => (
          <Col key={index} span={8} style={{ padding: "10px" }}
          onClick={() => handleClick(index)}
          >
            
            <Col span={24}><img src={item.image} width='200px' height={'200px'}></img></Col>
            <Col span={24}>{item.category}</Col>
            
          </Col>
        ))}
      </Row>
    </Col>
  );
}

export default ProductList;
