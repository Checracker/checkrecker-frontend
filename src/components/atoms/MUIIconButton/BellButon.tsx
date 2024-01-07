"use client"
import React, { useState } from 'react'
import Bell from './Bell';
import BellFilled from './BellFilled';

type BellProps =  {
isAlarm : boolean
}

function BellButon({isAlarm}:BellProps) {
    const [bell, setBell] = useState(isAlarm);

const onClickHandler = ()=> {
    setBell(!bell)
}

  return (
    <div onClick={onClickHandler}>{bell? <BellFilled /> : <Bell />}</div>
  )
}

export default BellButon