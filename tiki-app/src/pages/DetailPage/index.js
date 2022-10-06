import React, {useEffect, useState} from 'react'
import {Row, Col} from 'antd'
import ProductThumnails from './ProductThumnails'
import { useLocation, useParams } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import AddToCart from './AddToCart';



function DetailPage() {

  const  pathname  = useLocation();
  


  const b = (txt) => {
    var numb = txt.match(/\d/g);
    numb = numb.join("");
    return numb;
  }

  const [change,setChange] = useState(b(pathname.search));

  console.log(change);
  const [info,setInfo] = useState();


  useEffect (() => {
    fetch(`https://fakestoreapi.com/products/${change}`)
            .then(res=>res.json())
            .then(json=> setInfo(json))
  },[change])

  const handleAddToCartSubmit = (formValues) => {
    console.log('Form submit',formValues);
  }

  return (
    <Col span={24} className='detailpage-container'>
        <Row>
            <Col span={8} className='detailpage-left'>
                <ProductThumnails info={info} />
            </Col>
            <Col span={16} className='detailpage-right'>
                <ProductInfo info={info} />
                <AddToCart  onSubmit ={handleAddToCartSubmit} />
            </Col>
           
        </Row>
    </Col>
  )
}

export default DetailPage