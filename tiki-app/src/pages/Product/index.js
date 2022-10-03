import React from 'react'
import { BrowserRouter as Router, Routes, Route, useMatch } from "react-router-dom";
import ListPage from '../ListPage';

function Product() {

    // const match = useMatch(); && useRouteMatch : chetcmnr
    // console.log('useRouteMatch',match);
  return (
    <div>
        day la link toi product feature
        <Routes>
          <Route path="" element={<ListPage />}>
          
          </Route>
        </Routes>

    </div>
  )
}

export default Product