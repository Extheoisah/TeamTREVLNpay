import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='max-w-[1440px] px-6 border-b border-b-blue-700 py-8 flex md:grid md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex items-center'>
            <Image src='/icons/bitcoin-logo.svg' alt='logo' width={20} height={20}/>
            <p className='text-blue-700 font-header'>TREV</p>
        </div>
        <nav className='ml-auto md:ml-0 text-blue-700 font-semibold pl-[0.85rem]'>
            <ul>
                <li><a>Home</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header