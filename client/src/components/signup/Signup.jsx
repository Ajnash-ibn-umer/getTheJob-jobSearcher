import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import { ApiContext } from "../../store/context";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfrim_password] = useState("");

  const api = useContext(ApiContext);
  const history = useHistory();
  return (
    <div className="mainArea">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Card className="formArea">
              <Card.Body>
                <h3>Signup</h3>
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    //console.log({name,email,password})
                    api
                      .post("/signup", {
                        name,
                        email,
                        password,
                        confirm_password,
                      })
                      .then((res) => {
                        console.log(res);
                        history.push("/login");
                      })
                      .catch((error) => {
                        console.log(error.response.data);
                        console.log(error.response.status);
                      });
                  }}
                >
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                        console.log(name);
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>ConfirmPassword</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => {
                        setConfrim_password(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Button type="submit" variant="success">
                      Signup
                    </Button>
                    <Form.Text
                      className="form-text"
                      onClick={() => history.push("/login")}
                    >
                      I Already Have an acoount
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
