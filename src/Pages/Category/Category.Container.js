import React, { PureComponent } from 'react';
import CategoryComponent from './Category.Component';
import { connect } from 'react-redux';
import { fetchItemCategory } from '../../Redux/CategoryRedux';
import { sortdata } from '../../Redux/CategoryRedux/Category.action';
import { getproduct } from '../../Redux/ProductRedux/Product.action';


const mapStateToProps=(state)=>({
  categoryItems: state.category.categoryItems,
  items: state.data.item,
  loading: state.category.loading,
})
const mapDispatchToProps=(dispatch)=>({
  fetchItemCategory: (data)=>dispatch(fetchItemCategory(data)),
  sortdata:(sortby)=>{dispatch(sortdata(sortby))},
  grtproduct:(itemId)=>dispatch(getproduct(itemId))
})


 class CategoryContainer extends PureComponent {


  fetchdata = (items) => {
    fetch(`https://fakestoreapi.com/products/category/${items}`)
      .then((res)=>res.json())
      .then((data) => {this.props.fetchItemCategory(data)}
      ).catch((err)=>{
        console.log(err)
      })

  };
 
  handleSortChange = (event) => {
    const sortby = event.target.value;
    this.props.sortdata({ sortby });
  };
  

  handleProduct=(itemId)=>{
    console.log(itemId)
    this.props.grtproduct(itemId);

  }

  componentDidMount(){
    this.fetchdata(this.props.items);
  }
  
    componentDidUpdate(prevProps) {
      if (prevProps.items !== this.props.items) {
        this.fetchdata(this.props.items);
      }
    }
  render() {

    const {loading}=this.props
    if (loading) {
      return <div>Loading...</div>; 
    }

    return (
      <div>
        <CategoryComponent {...this.props}
          handleSortChange={this.handleSortChange}
          handleProduct={this.handleProduct}
        />

      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CategoryContainer)