import { Component } from "react";
import styledComponent from "styled-components";


const Nav = styledComponent.div`
    height: 9vh;
    background: linear-gradient(45deg,red,blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styledComponent.div`
   margin-left:30px ;
    padding: 20px;
    color: white;
`;

const Cart = styledComponent.div`
    margin-right:30px;
    padding:10px;
`;

const Img = styledComponent.img`
    width:40px;
    height: 40px;
    color:white;


`;

const Span = styledComponent.span`
    color:white;
    font-size:1.2rem;
`;

class Navbar extends Component{

    render()
    {
        return(
            <>
            <Nav>
                <Title>
                    <h1>Movie Flix</h1>
                </Title>
                <Cart>
                    <Img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png" alt="cart" />
                    <Span><strong>5</strong></Span>
                </Cart>
            </Nav>
            
            
            </>
        )
    }

}

export default Navbar;
