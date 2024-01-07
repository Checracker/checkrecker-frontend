"use client"

import {  IconButton } from '@mui/material';
import React from 'react';
import AlarmFilled from "/public/image/icons/bell_fill.svg";
import { IconButtonProps } from '@/components/atoms/MUIIconButton/IconButtonProps';


export default function BellFilled({width=25,height=27,color="#C91725"}: IconButtonProps) {
  return (
    <IconButton>
      <AlarmFilled color={color} width={width} height={height} />
    </IconButton>
  )
}