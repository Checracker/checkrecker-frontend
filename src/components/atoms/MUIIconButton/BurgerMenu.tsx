"use client"

import {  IconButton } from '@mui/material';
import React from 'react';
import Burger from "/public/image/icons/burger.svg";
import { IconButtonProps } from '@/components/atoms/MUIIconButton/IconButtonProps';


export default function BurgerMenu({width=30,height=30,color="#C91725"}: IconButtonProps) {
  return (
    <IconButton>
      <Burger color={color} width={width} height={height} />
    </IconButton>
  )
}