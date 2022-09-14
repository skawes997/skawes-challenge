import React,{useEffect,useState} from 'react'
import {Container,Row,Col,Modal,Button} from "react-bootstrap";
import { ADD_QTY,SUBS_QTY, } from "../redux/cart-constants";
import { useSelector,useDispatch } from "react-redux";
import { ManipulateCart } from "../redux/cart-action";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function ModalBody() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartItem);
    
const [total,setTotal] = useState(0)

    useEffect(()=>{
        const arr = [...state]
        const newArr = arr.map((elem)=>{
            return elem.price * elem.qty
        })
        const sumWithInitial = newArr.reduce((previousValue, currentValue) => previousValue + currentValue,0);
        setTotal(sumWithInitial)
    },[state])

  return (
    <Modal.Body>
 <Container>
  {state?.map((item,index)=>(

      <Row key={index} className="Row-modal-container">
        <Col>{item?.name}</Col>
        <Col xs={3}>{item?.qty}</Col>
        <Col>
        <Button  className="btnForMinusPLus" onClick={()=>{
          dispatch(ManipulateCart(ADD_QTY,item))}}>
            <AddIcon style={{fontSize:"14px"}}/>
          </Button>
        <Button  className="btnForMinusPLus" variant="danger" onClick={()=>dispatch(ManipulateCart(SUBS_QTY,item))} ><RemoveIcon style={{fontSize:"14px"}}/></Button>
        </Col>
      </Row>
  ))}
      <Row  className="Row-modal-container">
        <Col>Total(INR) :  {total}</Col>
      </Row>
      </Container>

</Modal.Body>
  )
}

export default ModalBody