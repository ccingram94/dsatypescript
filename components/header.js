import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

function Header() {
    return (
        <div>
            <nav className="sticky top-0 z-1 bg-white">
                <div className="max-w-5xl z-2 mx-auto px-4">
                    <div className="flex items-center justify-end h-16">
                        <div className="flex flex-row">
                            <Link href="/">
                                <p1 className="text-pink-600 font-bold uppercase px-8 py-3 hover:text-pink-900 ease-linear transition-all duration-150">Explore</p1>
                            </Link>
                            <button className="text-pink-600 bg-transparent border border-solid border-pink-900 hover:bg-pink-900 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Sign In</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header