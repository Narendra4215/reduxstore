import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import CategoryContainer from "./Category.Container";
const Productrender = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    console.log(params)
    return <CategoryContainer navigate={navigate} params={params} {...props} />
  }

  export default Productrender

