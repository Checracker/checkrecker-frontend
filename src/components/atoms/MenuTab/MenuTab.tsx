import { nanumGothic } from "@/app/utils/Fonts";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import Image from "next/image";
import React from "react";
export type MenuTabProps = {
    imgSrc: string;
    alt: string;
    name: string;
};

export default function MenuTab({ imgSrc, alt, name }: MenuTabProps) {
    return (
        <MenuTabBox>
            <MenuTabIcon>
                <Image src={imgSrc} width={50} height={50} alt={alt} />
            </MenuTabIcon>
            <MenuTabText className={nanumGothic.className}>{name}</MenuTabText>
        </MenuTabBox>
    );
}
const MenuTabIcon = styled.div`
    box-sizing: border-box;
    padding: 13px;
    width: 76px;
    height: 76px;
    color: white;
`;
const MenuTabText = styled.div`
  text-decoration:none;

    font-weight: 400;
    font-style: normal;
    font-size: 16px;
`;
const MenuTabBox = muiStyled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:white;
  text-decoration:none;
  `;
