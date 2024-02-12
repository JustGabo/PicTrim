import React from 'react'
import { MenuSideBar } from './components/MenuSideBar'
import { Canvas } from './components/Canvas'
import Image from './components/Image'

const EditPage = () => {
  return (
    <main className='p-5  h-screen flex bg-[#121212] items-center justify-center'>
        <section className='flex gap-5 items-center h-[90vh] overflow-hidden p-10 w-full bg-[#0c2b2e] rounded-md'>
            <article className='w-[35%] h-full'>
                <MenuSideBar/>
            </article>
            <article className='flex-1   h-full '>
                <Canvas/>
            </article>
        </section>
    </main>
  )
}

export default EditPage