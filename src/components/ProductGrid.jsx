import React from "react";
import {products} from "../constants.js";
import Product from "./Product.jsx";

class ProductGrid extends React.Component{
    constructor(){
        super();
        this.state={
            productsList:products
        }
    }
    render(){
        return(
            <>
                <h2>Products List </h2>
                <div style={{display:"flex"}}>
                    {this.state.productsList.map((product)=>{
                    return <Product  product={product}/>
                })}
                </div>
            </>
        )
    }
}

export default ProductGrid;