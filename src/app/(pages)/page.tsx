"use client";

import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import MenuTab from "@/components/atoms/MenuTab/MenuTab";
import { Black_Han_Sans } from "next/font/google";

type Props = {};

const blackHansSans = Black_Han_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function page({}: Props) {
  return (
    <div>page</div>
  );
}

const NavigationBar = styled.div`
  padding: 4px 21px;
  background-color: #c91725;
  box-sizing: border-box;
  color: white;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr 1fr; /* 3개의 열로 분할 */
`;

const UserBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;
const UserImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 100px;
  box-sizing: border-box;
  padding: 5px;
  background-color: white;
`;
const UserNickname = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  vertical-align: middle;
  line-height: 1;
  margin-top: 5px;
  box-sizing: border-box;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 13px;
`;

const SearchIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 55px;
  height: 55px;
  box-sizing: border-box;
  border-radius: 100px;
`;
