import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ManipulateCart } from "../redux/cart-action";
import { ADD_ITEM, REMOVE_ITEM } from "../redux/cart-constants";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Cards({ item }) {
  const [items,setItems] = useState({});
  const { name, price, image, index } = item;

  const selector = useSelector((state) => state.cartItem);
  
  const arr = [...selector]

  const ind = arr?.findIndex((elem)=>{
    return elem.name===name
  })



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 
  const dispatch = useDispatch();

  const handleAddToDelete = (item) => {
    dispatch(ManipulateCart(REMOVE_ITEM, item.id));
  };

  const handleAddToCart = (item) => {
    // console.log(item);
    dispatch(ManipulateCart(ADD_ITEM,item));
    // console.log("hi")
  };
  return (
    
    <div className="card-container">
      <Card style={{ width: "300px",height:"100%" }} key={index} >
        <Card.Img
          variant="top"
          src={image}
          style={{ height: "150px", objectFit: "cover" }}
        />
        <Card.Body>
          <div className="textOfCard">
          <Card.Title>{name}s</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
          
          {ind!==-1?<Card.Text>Total: {arr[ind]?.qty}</Card.Text>:<Card.Text> </Card.Text>}
          {ind!==-1?<Card.Text>Cost(INR):{price*arr[ind]?.qty} </Card.Text>:<Card.Text> </Card.Text>}
          </div>
          <div className="btns">
          <Button  className="btnForMinusPLus" variant="primary" onClick={() => handleAddToCart(item)}>
            <AddIcon style={{fontSize:"14px"}}/>
          </Button>
          <Button  className="btnForMinusPLus" variant="danger" onClick={() => handleAddToDelete(item)}>
          <RemoveIcon style={{fontSize:"14px"}}/>
          </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
