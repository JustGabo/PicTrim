import Image from 'next/image'
import NavBar from './NavBar'
import HeaderButtons from './HeaderButtons'

const Header = () => {
  return (
    <header className='flex items-center  h-[50px] gap-2 text-white justify-between'>
        <Image src={'/logo.svg'} alt='Logo' width={30} height={30}/>
        {/* <h2 className='text-lg font-semibold'>PicTrim</h2> */}
        <NavBar/>
        <HeaderButtons/>
    </header>
  )
}

export default Header