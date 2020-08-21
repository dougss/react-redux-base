import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store.config";
import { sendMessage } from "store/root/root.actions";
import { Card } from "components/card";
import { HomeRoot } from "./styles";
import { Link } from "react-router-dom";

interface Props {}

const Home = (props: Props) => {
  const { user } = useSelector((state: RootState) => state.root);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendMessage({ user: "dadsa", message: "dasdas", timestamp: 123 }));
  }, [dispatch]);
  return (
    <HomeRoot>
      <Card>
        <h2>HOME</h2>

        <p>Store data: {user.user}</p>
        <Link to={"/login"}>Login</Link>
      </Card>
    </HomeRoot>
  );
};

export default Home;
