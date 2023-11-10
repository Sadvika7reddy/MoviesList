import React from 'react';
import {Navbar,Button,Container} from 'react-bootstrap';
import {Link,Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header=(props)=>{
    return(
        <div>
            <Navbar bg='dark' expand='sm' variant='dark'>
               <Container>
                 <Navbar.Brand>
                    <Link to='/'>Subject</Link>
                 </Navbar.Brand>  
                </Container>
            </Navbar>
     
        </div>
    )
}
export default Header;