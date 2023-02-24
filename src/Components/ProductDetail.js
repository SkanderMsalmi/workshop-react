import { Card  } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styles from './ProductDetail.module.css';
// import data from '../products.json';
import ProductsList from '../products.json';

const ProductDetail  = ()=>{

    // const [seaarchParams,setSearchParams] = useSearchParams({name:""});
    const {name}=useParams();
    const product = ProductsList.find((p)=>name === p.name);
   
 
    return (
        <>
       <div className={styles.detail}>
       <Card.Img variant="top" src={require('../assets/images/'+product.img)} className={styles.image}/>
       <div>
       <h2>{product.name}</h2>
        <h4>Description </h4>
        <p> {product.description}</p>
        <h4>Price</h4>
        <p>{product.price} DT</p>
        <h4>Likes</h4> 
        <p>{product.like}</p>
       </div>
       </div>
        
        </>
    );
}

export default ProductDetail;