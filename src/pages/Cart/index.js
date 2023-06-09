import React, {useContext} from 'react'
import CartContext from '../../context/cart';
import {MdDelete} from 'react-icons/md';
import { Container, ContainerList, TravelItem, Info, Quality, Subtotal, Total} from './styles';




function Cart () {

    const {state, setState} = useContext(CartContext);  

  return(
     <Container>
      <ContainerList>
       {state.cart.map((el) => (
<TravelItem>
            <img src={el.photo}  alt={el.title}  />
            <Info>
              <p>{el.title}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quality readOnly type="number" value={el.quantity} />
                 <Subtotal>
                  <p>${el.quantity * el.price}</p>          
                  <button type="button">
                      <MdDelete  size={24} color="#0676d9" />
                  </button>
                 </Subtotal>     
                     
          </TravelItem>  
                  
       ))}
     </ContainerList>
     
     </Container>

  );



}




















export default Cart;