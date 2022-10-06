import { useContext } from "react";
import AuthContext from "../context/useUser";
import "./HomePage.css";

const HomePage: React.FC = ({}) => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <div className="main_body">
        <p style={{ fontSize: "40px" }}>Homepage</p>
      </div>

      <button onClick={authCtx?.onLogout}>Logout</button>
    </>
  );
};

export default HomePage;
