import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

function Header() {
    return (
        <div>
            <header className="sticky top-0 z-1 bg-red-200 navbar shadow-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 border-b-2 border-pink-600 bg-hero-img">
                    <div className="flex p-10 items-center justify-end sm:justify-center md:justify-end h-16">
                        <div className="flex flex-row">
                            <Link href="/">
                                <p1 className="text-pink-600 font-bold uppercase px-4 py-3 hover:text-pink-900 ease-linear transition-all duration-150">Home</p1>
                            </Link>
                            <Link href="/explore">
                                <p1 className="text-pink-600 font-bold uppercase px-6 py-3 hover:text-pink-900 ease-linear transition-all duration-150">Explore</p1>
                            </Link>
                            <button className="text-pink-600 bg-transparent border border-solid border-pink-900 hover:bg-pink-900 hover:text-white active:bg-pink-600 font-bold uppercase px-4 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Sign In</button>
                        </div>
                    </div>
            </header>
        </div>
    )
}

export default Header