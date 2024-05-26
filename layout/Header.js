import React from 'react'
import Link from 'next/link';

function Header() {
    return (
        <header className='flex items-center justify-between bg-yellow-500 p-10'>
            <nav>
                <ul className='flex space-x-4'>
                    <li>
                        <Link href="/" passHref legacyBehavior>
                            <a className='text-blue-500 hover:text-blue-700'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref legacyBehavior>
                            <a className='text-blue-500 hover:text-blue-700'>About Me</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" passHref legacyBehavior>
                            <a className='text-blue-500 hover:text-blue-700'>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header