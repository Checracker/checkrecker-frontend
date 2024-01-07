import { IconButtonProps } from '@/components/atoms/MUIIconButton/IconButtonProps'
import { IconButton } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Cookie = ({width=28,height=28,color="#C91725"}: IconButtonProps) => {
  return (
    <IconButton >
      <Image width={width} height={height} src="/image/logo.png" alt={"cookie"}/>
    </IconButton>
  )
}
export default Cookie