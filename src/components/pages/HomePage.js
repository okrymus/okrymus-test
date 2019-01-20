import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

// const HomePage = ({ isAuthenticated, logout }) => (
//   <div>
//     <h1>Home Page</h1>
//     {isAuthenticated ? (
//       <button onClick={() => logout()}>Logout</button>
//     ) : (
//       <div>
//         <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
//       </div>
//     )}
//   </div>
// );

const HomePage = () => (
  <Container
    fluid
    style={{
      height: "100vh",
      color: "white",
      background: "linear-gradient(to right, #692022, #1b1819)"
    }}
  >
    <Row
      className="align-items-center justify-content-center text-center"
      style={{ height: "100%" }}
    >
      <Col xs={12} sm={6}>
        <img
          className="img-fluid"
          alt="Adventurers League Logo"
          src="http://media.wizards.com/images/dnd/playevents/DnD_ADVL.png"
        />
      </Col>
      <Col
        xs={12}
        sm={6}
        style={{
          fontFamily: "'Open Sans', sans-serif"
        }}
      >
        <h1
          style={{
            boxShadow:
              "6px 0 0 rgba(20,12,10, .7), -6px 0 0 rgba(20,12,10, .7)",
            background: "rgba(20,12,10, .7)",
            lineHeight: "3rem"
          }}
        >
          BECOME AN ADVENTURER!
        </h1>
        <br />
        <div className="text-center">
          <Link
            to="/signup"
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#9c0b0e",
              border: "none"
            }}
          >
            JOIN THE PARTY!
          </Link>
        </div>
      </Col>
    </Row>
  </Container>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(HomePage);
