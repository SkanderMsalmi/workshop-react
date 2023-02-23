import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert } from "react-bootstrap";
import { useState } from "react";

function Product (props){
   const [product,setProduct] = useState(props.product);
const className=product.like>5?"text-center BestSeller":"text-center"
   const  addLike = ()=>{
    setProduct({...product,like:product.like +1});
   }

   const buyProducts = ()=>{
    setProduct({...product,quantity:product.quantity-1});
   }
    // constructor(props){
    //     super(props);
    //     this.state =  {like : this.props.product.like,quantity:this.props.product.quantity, alertVisible:false};
    //     this.addLikes = this.addLikes.bind(this);
    //     this.buyProducts = this.buyProducts.bind(this);
    //     this.handleVisible = this.handleVisible.bind(this);
    // }

    // addLikes(){
    //     this.setState((oldState)=>({
    //         like : oldState.like +1
    //     }));
    // }

    // buyProducts (){
    //     this.setState((oldState)=>({
    //         quantity:oldState.quantity-1
    //     }));
    //     this.handleVisible()
    // }   

    // handleVisible = () => { 
    //     this.setState({alertVisible:true})
    //     setTimeout(() => { 
    //         this.setState({alertVisible:false})
    //     }, 2000);
    // } 

    // render(){

        return (<>
            <Card style={{ width: '25rem' , minHeight:'650px',display:'flex',padding:'20px'}} className={className}>
            <Card.Img variant="top" src={require('../assets/images/'+product.img)} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Card.Text>
                {product.price} DT
              </Card.Text>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Button variant="primary" onClick={addLike} style={{margin :'15px'}} >Like</Button> <small style={{marginRight:'25px'}}>{product.like} Likes</small>
              {/* <Button variant="primary" onClick={this.buyProducts} disabled={this.state.quantity === 0} style={{margin :'15px'}}>Buy</Button> <small>{this.state.quantity} Products</small> */}
              </div>
            </Card.Body>
            {/* <Alert variant="primary" show={this.state?.alertVisible}  >you bought an Item !!!!</Alert>     */}
          </Card>
          </>
        );
    // }
}
export default Product;