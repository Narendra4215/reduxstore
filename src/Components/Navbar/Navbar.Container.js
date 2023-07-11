import React from "react";
import { fetchCategory } from "../../Redux/NavbarRedux";
import { PureComponent } from "react";
import { connect } from "react-redux";
import NavbarComponent from "./Navbar.Component";
const mapStateToProps=(state)=>({
  categories: state.data.categories,
});

const mapDispatchToProps = (dispatch)=>({
  fetchCategory:(data)=>dispatch(fetchCategory(data))
});

class NavbarContainer extends PureComponent {

componentDidMount(){
  this.fetchData();
}


  fetchData=()=>{
    fetch("https://fakestoreapi.com/products/categories").then((res)=>res.json())
    .then((data)=>{this.props.fetchCategory(data)
    })
  }
  
  render() {

    return (
      <div>
        <NavbarComponent {...this.props}/>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

