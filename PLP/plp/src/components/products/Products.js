import React, {Component} from 'react';
import ProductTile from '../productTile/ProductTile';

class Products extends Component{
  constructor(props){
    super(props);
    //console.log(this.props);
    this.state = {
      products : []
    };
  }
  componentWillReceiveProps(nextProps){
    if(this.state.products !== nextProps){
      this.setState({
        products: nextProps
      });

    }
  }
  render(){
    var productCollection = [], productsArray = this.state.products;
    //console.log(this.state.products);
    if(productsArray.products){
      productsArray = productsArray.products;
      for(var i = 0; i<productsArray.length; i++){
        //console.log(productsArray[i]);
        productCollection.push(<ProductTile key = {i} productDetail = {productsArray[i]}/>);
      }
    }
    return(
      <section className="products">
        <h1>Products</h1>
        <section className="tileContainer">
          {productCollection}
        </section>
      </section>
    );
  }
}

export default Products;
