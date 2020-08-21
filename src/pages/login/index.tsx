import React from "react";
import { Card } from "components/card";
import { LoginRoot } from "./styles";
import { Link } from "react-router-dom";

interface Props {}

const Login = (props: Props) => {
  return (
    <LoginRoot>
      <Card>
        <h2>LOGIN</h2>

        <Link to={"/"}>Home</Link>
      </Card>
    </LoginRoot>
  );
};

export default Login;
