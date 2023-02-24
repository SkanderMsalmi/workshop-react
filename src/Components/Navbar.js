import { Navbar, Container,Nav} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
const NavigationBar = ()=>{
    return (
      
        <Navbar bg="light" variant="light">

        <Container>
        
        <Navbar.Brand to="/products">MyStore</Navbar.Brand>
        
        <Nav className="me-auto">
        
        <Nav.Link as={NavLink} to="/products" >Products</Nav.Link>
        
        </Nav>
        
        </Container>
        
        </Navbar>
       
    );
}

export default NavigationBar;