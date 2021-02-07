import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
class ProductWarehouse extends Component {


  constructor(props){

   super(props)

   this.state={

        productId:"",
        productName:"",
        productDescription:"",
        productImage:[],
        productPrice:"",

        show:true
   }


  }

  b(){

    
    if(this.state.show === true){


      return(  <Redirect from="/ProductWarehouse" to="/shopping"></Redirect>)

     }

  }

  
    render() {
    

        
    
    return (
      <div>
        <h1 className="text-center"> Product Entry Warehouse</h1>

        {/* id,name,description, inage ,price */}
       <div className="container">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputId"><b>Product ID</b></label>
              <input
                type="text"
                class="form-control"
                id="inputId4"
                placeholder="Product ID"
              ></input>
            </div>
            <div class="form-group col-md-6">
              <label for="ProductName"><b>Product Name</b></label>
              <input
                type="text"
                class="form-control"
                id="ProductName"
                placeholder="Product Name"
              ></input>
            </div>
          </div>
          <div class="form-group">
            <label for="ProductDescription"><b>Product Description</b></label>
            <input
              type="text"
              class="form-control"
              id="ProductDescription"
              placeholder="Product Description"
            ></input>
          </div>

          <div class="form-group">
            <label for="Image"><b>Upload Image</b></label>
            <div>
            <input
              type="file"
              id="Image"
              ></input>
              </div>
          </div>
          
          <div class="form-group">
            <label for="ProductPrice"><b>Product Price</b></label>
            <input
              type="text"
              class="form-control"
              id="ProductPrice"
              placeholder="Product Price"
            ></input>
          </div>
            
         
          <button type="submit" class="btn btn-primary" onClick={this.b.bind(this)}>
           <b> Enter Product </b>
          </button>
        </form>
        </div>
      </div>
    );
  }
}

export default ProductWarehouse;
