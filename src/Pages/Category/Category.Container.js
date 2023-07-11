import React, { PureComponent } from 'react';
import CategoryComponent from './Category.Component';
import { connect } from 'react-redux';
import { fetchItemCategory } from '../../Redux/CategoryRedux';
import { sortdata } from '../../Redux/CategoryRedux/Category.action';


const mapStateToProps=(state)=>({
  categoryItems: state.data2.categoryItems
})
const mapDispatchToProps=(dispatch)=>({
  fetchItemCategory: (data)=>dispatch(fetchItemCategory(data)),
  sortdata:(sortby)=>{dispatch(sortdata(sortby))}
})



 class CategoryContainer extends PureComponent {

  componentDidUpdate(prevProps) {
    if (prevProps.params.items !== this.props.params.items) {
      this.apidata();
      console.log(prevProps)
    }
  }
  apidata = () => {
    const {items}=this.props.params;
    fetch(`https://fakestoreapi.com/products/category/${items}`)
      .then(res => res.json())
      .then((data) => {this.props.fetchItemCategory(data)}
      ).catch(err => {
        console.log(err)
      });
  };

 
  handleSortChange = (event) => {
    const sortby = event.target.value;
    this.props.sortdata({ sortby });
  };
  


  render() {
    return (
      <div>
        <CategoryComponent {...this.props}
          handleSortChange={this.handleSortChange}
        />

      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CategoryContainer)