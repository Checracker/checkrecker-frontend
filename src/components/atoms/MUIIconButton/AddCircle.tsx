"use client"

import {  IconButton } from '@mui/material';
import React from 'react';
import AddCircleIcon from "/public/image/icons/add_circle.svg";
import { IconButtonProps } from '@/components/atoms/MUIIconButton/IconButtonProps';


export default function AddCircle({width=30,height=30,color="#C91725"}: IconButtonProps) {
  return (
    <IconButton>
      <AddCircleIcon color={color} width={width} height={height} />
    </IconButton>
  )
}