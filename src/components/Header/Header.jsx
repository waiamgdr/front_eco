import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "reactstrap";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";
import { logout } from "../../store/Userslice";
 

const nav__defaults = [

  {
    display: "Home",
    path: "/home",
  },
  {
    display: "product",
    path: "/product",
  },
  {
    display: "Contact",
    path: "/contact",
  },

];
const nav__links = [

  {
    display: "Home",
    path: "/home",
  },
  {
    display: "product",
    path: "/product",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },

];
const nav__admin = [
  {
    display: "Dashbord",
    path: "/Dashbord",
  },
  {
    display: "Addproduct",
    path: "/addproduct",
  },
  {
    display: "Listproduct",
    path: "/listproduct",
  },
  {
    display: "All user",
    path: "/alluser",
  },
  {
    display: "Orders",
    path: "/orders",
  },

];
// const nav__logout = [

//   {
//     display: "Home",
//     path: "/home",
//   },

// ];

const Header = () => {
  const menuRef = useRef();
  const headerRef = useRef();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.user)
  const { userData } = useSelector(state => state.user)
  const { role } = useSelector(state => state.user)
  console.log('role_hedar', role)
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  let navigate = useNavigate();

const data= localStorage.getItem("data")
  

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  console.log(menuRef?.current?.classList.value);

  






  return (
    <header className="header" ref={headerRef}>
      <Container>

        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo" onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />

          </div>
          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu d-flex align-items-center gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>

              </div>
              {role===""? <> {nav__defaults.map((item, index) => (


                <NavLink

                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>


              ))} </> : role==="user" ? <> {nav__links.map((item, index) => (


                <NavLink

                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>


              ))} </>: <> {nav__admin.map((item, index) => (


                <NavLink

                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>


              ))} </>
              }

            </div>
          </div>
          {isAuth ?
            <>
              <Link to='/login'><button className="logout" onClick={() => { dispatch(logout()) }} >login out  </button> </Link>

              {/* ======== nav right icons ========= */}
              {role === "user" ? <div className="nav__right d-flex align-items-center gap-4">
                <span className="cart__icon" onClick={toggleCart}>
                  <i className="ri-shopping-basket-line"></i>
                  <span className="cart__badge">{totalQuantity}</span>
                </span>

                <span className="mobile__menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div> : null}

            </>
            : <>
              
              <Link to='/login'><button className="login">login </button> </Link>
            </>}

        </div>

      </Container>
    </header>
  );
};

export default Header;