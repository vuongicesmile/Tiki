import React from "react";
import { Tabs } from "antd";

function ProductSort({onChange, currentSort}) {
  const handleSortChange = (key) => {
    console.log(key);
    if (onChange) onChange(key);
  };

  return (
    <Tabs
      onChange={handleSortChange}
      type="card"
      items={new Array(2).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab ${id}`,
          key: id,
          children: `Content of Tab Pane ${id}`,
        };
      })}
    />
  );
}

export default ProductSort;
