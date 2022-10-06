import React from 'react'

function ProductThumnails({info}) {
  return (
    <div>
        <img src={info?.image}
        width='100%'
        ></img>
    </div>
  )
}

export default ProductThumnails