import React, { PureComponent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductComponent from './Products.Component';
import { getproduct } from '../../Redux/ProductRedux/Product.action';
import { connect } from 'react-redux';

const Productrender = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params)
  return <ProductContainer navigate={navigate} params={params} {...props} />
}

const mapStateToProps=(state)=>({
  productData: state.data3.productData
})

const mapDispatchToProps=(dispatch)=>({
  getproduct:(data)=>dispatch(getproduct(data))
})


 class ProductContainer extends PureComponent {

  componentDidMount() {
    this.fetchProductData();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.fetchProductData();
    }
  }


  fetchProductData() {
    const { id } = this.props.params;
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
export default connect(mapStateToProps,mapDispatchToProps) (Productrender)