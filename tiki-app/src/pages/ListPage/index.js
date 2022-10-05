import React, { useEffect, useState } from "react";
import { Row, Col, Card ,Pagination} from "antd";
import "./listPage.scss";
import ProductSkelatons from "../Product/ProductSkeletons";
import ProductList from "../Product/ProductList";
import ProductSort from "../Product/ProductSort";
import ProductFilters from "../Product/ProductFilters";

function ListPage() {

    // save productList
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const [pagination, setPagination] = useState({
        count : 1,
        page : 1
    });

    //page ,limit nhung tham so minh dung de loc danh sach san pham
    // sau nay co the tim kiem theo ten , theo gia 
    //=> dieu kien loc lai san pham
    const [filters,setFilters] = useState({
        _page : 1,
        _limit : 9,
        
    });

    

    useEffect(() => {
        try {
            fetch(`https://fakestoreapi.com/products${filters._sort ? `?sort=${filters._sort == 1 ? 'DESC' : filters._sort == 2 && 'ASC'}` : ''}`)
            .then(res=>res.json())
            .then(json=>
                {
                    const data = structuredClone(json);
                    setProductList(data);
                   
                    // trong qua trinh loading se hien thi cai skeletons
                    setPagination({total : data[19].id, limit : 9 })

                }
                )
        }
        catch(error) {
            console.log('Failed to loading Product list',error);
        }
        // loading = true hay false cung se tat loading di
         setLoading(false);
       
    },[filters])

    const handlePageChange = (page, pageSize) => {
        // nhiem vu cua minh khi nhan vao pagi thay doi thi minh se update lai cai filter
        // sau khi filter thay doi thi se chay lai cai useEffet, khi filter thay doi thi co filter moi
        setFilters(preFilter => ({
            ...preFilter,
            page : pageSize
        }))
        // khi set lai , thi gia tri cua filter la page hien tai se thay doi 
        // =>  load lai api

    }
    const handleSortChange = (newSortValue) => {

        // setFilters(preFilter => ({
        //     ...preFilter,
        //     sort : newSortValue == 1 ? 'ASC' : 'DESC'
        // }))
        console.log(newSortValue);
    }
    const handleFiltersChange = (newFilters) => {
      setFilters(preFilter => ({
        ...preFilter,
        newFilters
      }))
    }
  return (
    <Col span={24} className="listpage-container ">
      <Row className="d-flex w-100" gutter={5} >
        <Col className="left-listpage">
          <Card title="Card title" bordered={false}>
           {/* Tao product filter , moi lan thay doi gi truyen bo filter minh xuong */}
           <ProductFilters filters={filters} onChange={handleFiltersChange} />
          </Card>
        </Col>
        <Col  className="right-listpage">
            <ProductSort currentSort={filters.sort}  onChange={handleSortChange} />
            <Row>

            {
                loading ? <ProductSkelatons /> : <ProductList data={productList} />
            }
            <Pagination defaultCurrent={1} total={pagination.total} 
            onChange={handlePageChange}
            />
            </Row>
        </Col>
      </Row>
    </Col>
  );
}
export default ListPage;
