import { IconButtonProps } from '@/components/atoms/MUIIconButton/IconButtonProps'
import React from 'react'
import { IconButton, styled as muiStyled } from "@mui/material";
import Cookie from '@/components/atoms/MUIIconButton/Cookie';

type CheckCircleProps = IconButtonProps & {
    check?: boolean;
  };

const CheckCircle = ({ width = 24, height = 24, color = "#C91725", check = false }: CheckCircleProps) => {
  return (
    check ? <IconButton><CircleIcon width={width} height={height} color={color}/></IconButton> : 
    <Cookie color={color}/>
  );
};

export default CheckCircle;

const CircleIcon = muiStyled("div")<IconButtonProps>(({width, height, color })=>({
    width: width,
    height: height,
    backgroundColor:"white",
    border:"2px solid",
    borderRadius:"20px",
    borderColor: color
}))

