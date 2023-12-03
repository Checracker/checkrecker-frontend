"use client";
import styled from "@emotion/styled";

import { Black_Han_Sans } from "next/font/google";
import { Button } from "@mui/material";

const blackHansSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
});

const ConfirmButton = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "330px",
  height: "40px",
  borderRadius: "7px",
  color: "white",
  fontSize: "16px",
  fontFamily: ["Nanum Gothic"],
  fontWeight: "700",
  backgroundColor: "#c91725",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#c91725",
  },
};

export default function Login() {
  return (
    <Container>
      <PatternBox></PatternBox>
      <LoginBox>
        <TitleBox>
          <Logo src="/img/logo.svg"></Logo>
          <Title className={blackHansSans.className}>Checracker!</Title>
        </TitleBox>
        <InputBox>
          <Input placeholder="이메일을 입력해주세요"></Input>
          <Button sx={ConfirmButton}>시작하기</Button>
        </InputBox>

        <SocialBox>
          <img src="/img/social.png" style={{ marginTop: "50px" }}></img>
        </SocialBox>
      </LoginBox>
    </Container>
  );
}

const Logo = styled.img``;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
const Title = styled.div`
  font-size: 65px;
  font-weight: 800;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 700;
  gap: 20px;
  font-size: 16px;
`;
const Input = styled.input`
  width: 330px;
  height: 40px;
  text-align: center;

  border: 1px solid #d3d3d3;
  border-radius: 7px;
  &::placeholder {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #adadad;
  }
`;
const SocialBox = styled.div``;
// const ConfirmButton = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 330px;
//   height: 40px;
//   border-radius: 7px;
//   color: white;
//   font-family: "Nanum Gothic", sans-serif;
//   background-color: #c91725;
//   &:hover {
//     cursor: pointer;
//     opacity: 0.8;
//   }
// `;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.4;
  background-image: url("/img/logo.png");
`;

const PatternBox = styled.div`
  display: flex;
  flex: 0.6;
  background-image: url("/img/pattern.png");
`;

const Container = styled.div`
  width: 100%;
  height: 100vh; /* 뷰포트 높이로 설정 */

  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex: 1;
`;
