import * as P from "../styles/profile.styles.js";
import Button from "../components/Button.jsx";

import { useState } from "react"; //등호로 변경 안됨
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [like, setLike] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleLikeClick = () => {
    setLike(like + 1);
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <P.Body>
      <P.Row>
        <P.S_box>
          <P.Photo>
            <img src="photo.jpg" width="200" />
          </P.Photo>
          <P.Name>
            <h2>김지연</h2>
            <P.LikeButton onClick={handleLikeClick} $isClicked={isClicked}>
              ♥<span> {like}</span>
            </P.LikeButton>
          </P.Name>
          <P.Part>Frontend</P.Part>
          <p style={{ margin: 0 }}>아직은 개발자 연습생</p>
        </P.S_box>
      </P.Row>

      <P.D_box>
        <h1>김지연</h1>
        <P.Part>Frontend</P.Part>
        <p>INU LIKELION</p>
        <P.Title>자기소개</P.Title>
        <p>
          웹 프론트엔드 개발에 관심을 가지고 학습하고 있는 학생입니다. 단순히
          화면을 만드는 것을 넘어서 사용자 경험을 고려하여 직관적인 인터페이스를
          구현하는 개발자가 되고 싶습니다.
        </p>
        <P.Title>연락처</P.Title>
        <ul>
          <li>Email: jiyoeo2@gmail.com</li>
          <li>
            Website:{" "}
            <a href="https://velog.io/@jiyoeo" title="velog">
              {" "}
              https://velog.io/@jiyoeo/posts
            </a>
          </li>
          <li>Phone: 010-8619-6763</li>
        </ul>
        <P.Title>관심 기술</P.Title>
        <ul>
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <P.Title>한 마디</P.Title>
        <p>
          기초를 탄탄히 다져 꾸준히 성장하는 프론트엔드 개발자가 되겠습니다.
        </p>
      </P.D_box>
      <Button onClick={() => navigate("/")}> 홈으로 돌아가기 </Button>
    </P.Body>
  );
}

export default Profile;

const techs = ["HTML", "CSS", "JavaScript", "React"];
