import React, { useEffect, useState } from 'react'
import {Row ,Col} from 'antd'

function FilterByCategory({onChange}) {

    const [categoryList,setCategoryList ] = useState([]);
    console.log('render nek');

    useEffect(() => {
        // get data category
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                setCategoryList(structuredClone(json));
            })
    },[])

    const handleCategoryClick = (category) => {
        
        if(!onChange){
            onChange(category);
        }
    }

  return (
    <div>
        <Col span={24}>DANH MUC SAN PHAM</Col>
        <ul>
            {categoryList.map((category,index) => {
                console.log(category);
                return (
                    <li key={index} onClick={handleCategoryClick(category)}>{category}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default FilterByCategory