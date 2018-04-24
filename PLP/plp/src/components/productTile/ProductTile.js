import React from 'react';

const ProductTile = (props) => {
  //console.log(props);
  const productDetail = props.productDetail;
  //console.log(productDetail);
  return(
        <div className='tile' data-id={productDetail.id} >
            <img src={productDetail.image} alt={productDetail.title}/>
            <p>{productDetail.title}</p>
            <p>{productDetail.rating}</p>
            <p>
              <span className='final_price'>{productDetail.price.final_price}</span>
              <span className='mrp'>{(productDetail.price.mrp)? (productDetail.price.mrp) : ""}</span>
              <span className='discount'>{productDetail.discount}% off</span>
            </p>
        </div>
  );
};

export default ProductTile;
