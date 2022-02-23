import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>You have Successfully logged in</div>
      <br />
      <div className="center">
        <button
          className="btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Success;
