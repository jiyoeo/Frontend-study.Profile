import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import * as H from "../styles/home.styles.js";

const Home = () => {
  const navigate = useNavigate();

  return (
    <H.Body>
      <H.Container>
        <img src="syt.png" />
        <H.Box>
          <p>
            제가 어떤 사람인지 <br /> 궁금하시다면 <br />
            👇아래 버튼을 눌러보세용👇
          </p>
          <Button onClick={() => navigate("/profile")}>소개 보러 가기</Button>
        </H.Box>
      </H.Container>
    </H.Body>
  );
};

export default Home;
