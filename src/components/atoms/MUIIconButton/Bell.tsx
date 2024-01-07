"use client"

import { IconButton } from '@mui/material';
import React from 'react';
import Alarm from "/public/image/icons/bell.svg";
import { IconButtonProps } from '@/components/atoms/MUIIconButton/IconButtonProps';

export default function Bell({width=25,height=27,color="#C91725"}: IconButtonProps) {
  return (
    <IconButton>
      <Alarm color={color} width={width} height={height} />
    </IconButton>
  )
}