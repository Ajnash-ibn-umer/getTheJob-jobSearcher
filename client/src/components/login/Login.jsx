import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ApiContext, AuthContext } from "../../store/context";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const api = useContext(ApiContext);
  const { setUser, user } = useContext(AuthContext);

  return (
    <div className="mainArea">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Card className="formArea">
              <Card.Body>
                <h3>Login</h3>
                <Form className={'form'}   onSubmit={async (e) => {
                    e.preventDefault();
                    console.log({email,password})
                    api
                      .post("/login", {
                        email,
                        password,
                      })
                      .then(async (res) => {
                        //  console.log(res);
                        // console.log(res.data.token);
                        console.log(res.data.userData);
                        await setUser({
                          data: res.data.userData,
                          token: res.data.token,
                        });
                        console.log("user", user.token);
                        await localStorage.setItem("token", res.data.token);
                        history.push("/");
                      })
                      .catch((error) => {
                        console.log(error.response.data);

                        console.log(error.response.status);
                      });
                  }}>
                  <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"   value={email}
                    onChange={(e) => {
                      console.log(e.target.value)
                      setEmail(e.target.value);
                    }}/>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  
                  <Form.Group className="form-group" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"    value={password}
                    onChange={(e) => {

                      setPassword(e.target.value);
                    }}/>
                  </Form.Group>
                  <Button variant="success" type="submit">Login</Button>
                  <p
                    className={'form-text'}
                    onClick={() => history.push("/signup")}
                  >
                    Create an Acoount
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <div className="welcome-cover">
              <div className="content">
                <h3 className="font-weight-bolder">Welcome to Get the Job</h3>
                <p>lGet the job is world fatest growing network</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
