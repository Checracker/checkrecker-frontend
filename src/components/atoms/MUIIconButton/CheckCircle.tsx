import { IconButtonProps } from '@/components/atoms/MUIIconButton/IconButtonProps'
import React, { useState } from 'react'
import { IconButton, styled as muiStyled } from "@mui/material";
import Cookie from '@/components/atoms/MUIIconButton/Cookie';

type CheckCircleProps = IconButtonProps & {
  checked?: boolean;
  };

const CheckCircle = ({ width = 24, height = 24, color = "#C91725", checked = false }: CheckCircleProps) => {
  
  const [isChecked, setIsCheck] = useState(checked);

  const onClickHandler = ()=> {
      setIsCheck(!isChecked)
  }
  return (
    <div onClick = {onClickHandler}>{
    isChecked ? <IconButton><CircleIcon width={width} height={height} color={color}/></IconButton> : 
    <Cookie width={width} height={height} color={color}/>}
    </div>
    
  );
};

export default CheckCircle;

const CircleIcon = muiStyled("div")<IconButtonProps>(({width, height, color })=>({
    width: width,
    height: height,
    boxSizing:"border-box",
    backgroundColor:"white",
    border:"2px solid",
    borderRadius:"20px",
    borderColor: color
}))

