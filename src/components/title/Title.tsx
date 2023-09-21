import React from 'react';
import { TitleData } from '@/types/type';


const Title = ({title}:TitleData) => {
  return (
    <h1 className='text-[30px] font-bold mb-[30px]'>{title}</h1>
  )
}

export default Title