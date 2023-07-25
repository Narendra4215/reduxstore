import React, { PureComponent } from 'react';
import ProductComponent from './Products.Component';
import { getproduct } from '../../Redux/ProductRedux/Product.action';
import { connect } from 'react-redux';



const mapStateToProps=(state)=>({
  productData: state.product.productData,
  id: state.category.product,
})

const mapDispatchToProps=(dispatch)=>({
  getproduct:(data)=>dispatch(getproduct(data))
})


 class ProductContainer extends PureComponent {

  componentDidMount() {
    this.fetchProductData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id)
     {
      this.fetchProductData();
    }
  }


  fetchProductData() {
    const { id } = this.props;
    console.log(id)
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.props.getproduct(data)
      })
      .catch((error) => console.log(error))
  }



  render() {
    const { productdata } = this.props;
    if(productdata){

      <div>Loading.....</div>
    }
    return (
      <>
        <ProductComponent {...this.props}

        />

      </>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (ProductContainer)