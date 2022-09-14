import React, { useEffect, useState } from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "../components/NavBar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import { Badge } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import ModalBody from "../components/ModalBody";

import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const cartLength = useSelector((state) => state.cartItem);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const state = useSelector((state) => state.cartItem);

  const dispatch = useDispatch();

  const handleGotoCheckOutPage = () => {
    handleClose();
    navigate("/CheckOut");
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="nav-wrapper">
        <span className="nav-txt">
          <RestaurantIcon />
          <h2>food's restaurant</h2>
        </span>
        <span className="cartIcon">
          <Link className="link" to="/">
            Login
          </Link>
          <LoginIcon style={{ marginRight: "30px" }} />
          {cartLength.length ? (
            <Badge badgeContent={cartLength.length} color="primary">
              <ShoppingCartIcon
                onClick={() => {
                  setShow(true);
                }}
                style={{ cursor: "pointer" }}
              />
            </Badge>
          ) : null}
        </span>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Order Summary</Modal.Title>
        </Modal.Header>
        <ModalBody />
        <Modal.Footer>
          <Button variant="primary" onClick={handleGotoCheckOutPage}>
            SAVE AND CHECKOUT
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
