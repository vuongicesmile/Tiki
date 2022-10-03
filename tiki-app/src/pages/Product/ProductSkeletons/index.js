import React, {useState} from "react";
import { Row, Col ,Skeleton} from "antd";

function ProductSkelatons({ length = 6 }) {
    const [active, setActive] = useState(false);
  return (
    <Col span={24}>
      <Row className="productskelaton-container">
        {Array.from(new Array(length)).map((x, index) => (
          <Col key={index} span={8} style={{padding : '10px'}}>
              <Skeleton.Image active={active} />
          </Col>
        ))}
      </Row>
    </Col>
  );
}

export default ProductSkelatons;
