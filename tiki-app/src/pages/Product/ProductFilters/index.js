import React from 'react'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice';

function ProductFilters({filters,onChange}) {

    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return ;
        const newFilters ={
            ...filters,
            categoryId : newCategoryId
        };
        onChange(newFilters);
    }

    const handlePriceChange = (values) => {
      if(!onChange) return;

      onChange(values);
    }

    const handleFilterByService = () => {

    }

  return (
    <div>
        <FilterByCategory onChange={handleCategoryChange} />
        <FilterByPrice onChange={handlePriceChange} />
        {/* <FilterByService onChange={handleFilterByService} /> */}
    </div>
  )
}

export default ProductFilters