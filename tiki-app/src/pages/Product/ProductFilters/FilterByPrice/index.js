import React ,{useState} from "react";
import { Input, Button,Row,Col } from "antd";

function FilterByPrice({onChange}) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleSubmit = () => {

    console.log(values);
    if(onChange) {
      onChange(values)
    }

  };
  return (
    <div>
      <Col span={24}>Filter By Price</Col>
      <Input
        value={values.salePrice_gte}
        onChange={(value) => {
          setValues({
            ...values,
            salePrice_gte: value,
          });
        }}
      ></Input>
      <span>--</span>
      <Input
        value={values.salePrice_lte}
        onChange={(value) => {
          setValues({
            ...values,
            salePrice_lte: value,
          });
        }}
      ></Input>

      <Button onClick={handleSubmit} />
    </div>
  );
}

export default FilterByPrice;
