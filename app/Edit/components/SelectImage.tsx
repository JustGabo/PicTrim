"use client"
import React, {useCallback, useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Img from 'next/image'
import { Upload } from 'lucide-react'
import { url } from 'inspector'
import useImageStore from '@/stores/Image'


export const SelectImage = ()=> {
  const [file, setFile] = useState<File | null>(null)
  const {setSrc} = useImageStore((state)=> state)
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        // setFile(acceptedFiles[0]);
        setFile(acceptedFiles[0])
        HandleFile(acceptedFiles[0])
      }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  const HandleFile = (file: File)=>{
    const newFile = URL.createObjectURL(file)
    setSrc(newFile)
  }

  useEffect(()=>{
    console.log(file)
  },[file])

  return (
    <div {...getRootProps()} className='bg-[#121212] text-white rounded-tr-md rounded-tl-md h-full cursor-pointer flex items-center justify-center flex-col gap-5'>
        
      <input {...getInputProps()} />

      <Upload className='w-16 h-16 ' strokeWidth={1}/>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p className='lg:text-xl font-normal'>Upload an image</p>
      }

    </div>
  )
}