import * as P from "../styles/profile.styles.js";
import Button from "../components/Button.jsx";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient.js";

function Profile() {
  const navigate = useNavigate();
  const [like, setLike] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const getInitialLikes = async () => {
      try {
        const { data, error } = await supabase
          .from("likes")
          .select("count")
          .eq("id", 1)
          .single();

        if (error) throw error;
        if (data) setLike(data.count);
      } catch (err) {
        alert("좋아요 데이터를 가져오는데 실패하였습니다.");
      }
    };

    const localLikedStatus = localStorage.getItem("Jiyeon_profile_liked");

    if (localLikedStatus === "true") {
      setHasLiked(true);
    }

    getInitialLikes();
  }, []);

  const handleLikeClick = async () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);

    if (hasLiked) {
      localStorage.removeItem("Jiyeon_profile_liked");
      setHasLiked(false);

      const updatedLikeCount = Math.max(0, like - 1);
      setLike(updatedLikeCount);

      try {
        const { error } = await supabase
          .from("likes")
          .update({ count: updatedLikeCount })
          .eq("id", 1);

        if (error) throw error;
      } catch (err) {
        alert(`좋아요 취소 반영 실패 원인: ${err.message || err}`);
      }
    } else {
      localStorage.setItem("Jiyeon_profile_liked", "true");
      setHasLiked(true);

      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 200);

      const updatedLikeCount = like + 1;
      setLike(updatedLikeCount);

      try {
        const { error } = await supabase
          .from("likes")
          .update({ count: updatedLikeCount })
          .eq("id", 1);

        if (error) throw error;
      } catch (err) {
        alert(`DB 업데이트 실패 원인: ${err.message || err}`);
      }
    }
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
            <P.LikeButton
              onClick={handleLikeClick}
              $isClicked={isClicked || hasLiked}
            >
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
