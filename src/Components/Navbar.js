import { Navbar, Container,Nav} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
const NavigationBar = ()=>{
    return (
      
        <Navbar bg="light" variant="light">

        <Container>
        
        <Navbar.Brand as={NavLink} to="/" >MyStore</Navbar.Brand>
        
        <Nav className="me-auto">
        
        <Nav.Link as={NavLink} to="/products" style={({isActive})=>({textDecoration:isActive&&'underline'})}>Products</Nav.Link>
        
        </Nav>
        
        </Container>
        
        </Navbar>
       
    );
}

export default NavigationBar;