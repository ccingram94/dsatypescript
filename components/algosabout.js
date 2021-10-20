import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

function AlgosAbout() {
    return (
        <div className="container flex flex-row flex-wrap justify-center mx-auto rounded-xl bg-cover bg-hero-img shadow-xl p-20 m-20">
            <div className="container flex flex-col flex-wrap justify-center mx-auto flex-1">
                <h1 className="font-bold text-center text-pink-900 text-4xl p-5">Algorithms</h1>
                <div className="text-center text-pink-900 p-3">
                    <p>Explore common algorithms.</p>
                </div>
            </div>
            <div className="container flex flex-1">
                <div className="container mx-auto flex flex-row flex-wrap justify-start items-start content-center">
                    <Link href="/"><button className="text-pink-600 bg-transparent border border-solid border-pink-600 hover:bg-pink-600 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> 🌸 Quick Sort </button></Link>
                    <Link href="/"><button className="text-pink-600 bg-transparent border border-solid border-pink-600 hover:bg-pink-600 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> 🌸 Merge Sort </button></Link>
                    <Link href="/"><button className="text-pink-600 bg-transparent border border-solid border-pink-600 hover:bg-pink-600 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> 🌸 Binary Search </button></Link>
                    <Link href="/"><button className="text-pink-600 bg-transparent border border-solid border-pink-600 hover:bg-pink-600 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> 🌸 Breadth-First Search </button></Link>
                    <Link href="/"><button className="text-pink-600 bg-transparent border border-solid border-pink-600 hover:bg-pink-600 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> 🌸 Depth-First Search </button></Link>
                </div>
            </div>
        </div>
    )
}

export default AlgosAbout