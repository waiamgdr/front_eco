import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import ALLproducts from './ALLproducts.jsx'
import watchhome from "../assets/watchhome.png";
import watchhome2 from "../assets/watchhome2.png";
import "../styles/hero-section.css";
import Video from "../components/video/Video.js";

const Home = () => {
  return (
    <Helmet   title="store">
      <section>
        <Container className="new-collections" >
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Start here</span>  for healthy habits
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/product">
                    Products <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={watchhome} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
<div className="video">
<Video/>
</div>
          

          <div className="new-collections">
      <h1>NEW COLLECTIONS </h1>
        <hr/>
        
        
      <ALLproducts  >
      
      </ALLproducts>
      

      <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
               
                <h1 className="mb-4 hero__title">
                  <span>Start here</span>  Official Smart Watch
                </h1>
                
<h5> Buy the best connected watches at the best prices!</h5>
<h6 className="mb-3">Easy order & fast delivery</h6>
               
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={watchhome2} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>

      </div>
        </Container>
      </section>
      
    </Helmet>
  );
};

export default Home;
