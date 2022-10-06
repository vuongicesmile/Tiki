import React, {useState} from 'react'
import {InputNumber } from 'antd'

function AddToCart({onSubmit = null}) {

    const [a, seta] = useState({
        quantity : 1
    });


  return (
    <div>
        <InputNumber
        value ={a.quantity}
        onChange={(value) => {
            seta({
                ...a,
                quantity : value
            })
        }}
        ></InputNumber>
    </div>
  )
}

export default AddToCart