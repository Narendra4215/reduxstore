import React from "react";
import { fetchCategory } from "../../Redux/NavbarRedux";
import { PureComponent } from "react";
import { connect } from "react-redux";
import NavbarComponent from "./Navbar.Component";
import { getitem } from "../../Redux/NavbarRedux/Navbar.action";
const mapStateToProps=(state)=>({
  categories: state.data.categories,
  loading: state.data.loading,
});

const mapDispatchToProps = (dispatch)=>({
  fetchCategory:(data)=>dispatch(fetchCategory(data)),
  getitem:(items)=>dispatch(getitem(items))
});

class NavbarContainer extends PureComponent {



handleItems=(event)=>{
  const items=event.target.innerHTML;
  this.props.getitem(items)
}
  fetchData=()=>{
    fetch("https://fakestoreapi.com/products/categories").then((res)=>res.json())
    .then((data)=>{this.props.fetchCategory(data)
    })
  }
  componentDidMount(){
    this.fetchData();
  }
  render() {
    const {loading}=this.props
    if (loading) {
      return <div>Loading...</div>; 
    }
    return (
      <div>
        <NavbarComponent {...this.props}
        handleItems={this.handleItems}
        />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

