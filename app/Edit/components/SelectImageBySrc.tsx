"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useImageStore from '@/stores/Image'
import React, {  useState } from 'react'

const SelectImageBySrc = () => {
  const [newSrc, setNewSrc] = useState('')
  const {setSrc} = useImageStore((state)=>state)

  return (
    <div className='flex flex-col items-center bg-[#113e41] rounded-bl-md rounded-br-md gap-3 p-10'>
        <p className='lg:text-xl font-normal text-white'>Add an image by a link</p>
        <Input onChange={(e)=> setNewSrc(e.target.value)} className='bg-transparent border text-white w-[75%] m-auto h-[35px]'/>
        <Button onClick={()=> setSrc(newSrc)} className='bg-[#0c2b2e] w-[130px] font-normal hover:bg-[#153537]'>Try</Button>
    </div>
  )
}

export default SelectImageBySrc