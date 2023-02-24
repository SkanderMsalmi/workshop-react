import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  useState } from "react";
import { Alert } from 'react-bootstrap';
import styles from './Product.module.css';
import {Link} from 'react-router-dom';
// const add = addLikes() =>{
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
  function Product ({product}){
    const [like, addLikes] = useState(product.like);
    const [quantity, addQuantity] = useState(product.quantity);
    const [alertVisible,toggleAlertVisible] =useState(false);
    const [bestProduct,setBestProduct]= useState(false);

    let bestProductBackground = bestProduct ? styles.bestProduct : null;
    const toggleBestProduct = ()=> {
        if (like >= 4){
          setBestProduct(true);
        }
      }

    const setAlertVisible = ()=>{
      toggleAlertVisible(true);
      setTimeout(() => {
        toggleAlertVisible(false);
      }, 2000);
    }

    const setLikes = ()=>{
        addLikes(like+1);
        toggleBestProduct();
    }

    const setQuantity = ()=>{
        addQuantity(quantity-1);
        setAlertVisible();
    }

        return (
        <>
            <Card style={{ width: '25rem' , minHeight:'650px',display:'flex',padding:'20px'}} className={bestProductBackground}>
            <Card.Img variant="top" src={require('../assets/images/'+product.img)} />
            <Card.Body>
              <Card.Title><Link to={"/products/"+product.name}>{product.name}</Link></Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Card.Text>
                {product.price} DT
              </Card.Text>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Button variant="primary" style={{margin :'15px'}} onClick={setLikes} >Like</Button> <small style={{marginRight:'25px'}}> {like} Likes</small>
              <Button variant="danger"  style={{margin :'15px'}} onClick={setQuantity} disabled={quantity<1}>Buy</Button> <small> {quantity} Products</small>
              </div>
            </Card.Body>
            <Alert variant="primary" show={alertVisible}  >you bought an Item !!!!</Alert>    
          </Card>
          </>
        );
}

export default Product;