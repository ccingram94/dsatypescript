import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

const DataStructures: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Data Structures and Algorithms</title>
        <meta name="description" content="intro to data structures and algorithms in Python" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      
      <main className="mx-auto">
      <Header/>
        <div className="basic-box bg-cover bg-hero-img background relative bg-gradient-to-r from-red-200 via-red-300 to-yellow-200" >
          <div className="container mx-auto flex px-5 py-48 items-center justify-center flex-col">
            <h1 className="font-black text-6xl font-bold text-pink-900 text-center title-font sm:text-4x1 text-3x1 mb-4 mt-4 font-large"> 🌸 🌸 🌸 </h1>
            <h1 className="font-black text-6xl font-bold text-pink-900 text-center title-font sm:text-4x1 text-3x1 mb-4 mt-4 font-large">Data Structures and Algorithms</h1>
            <div className="flex flex-row flex-wrap justify-center items-center content-center">
              <Link href="/"><button className="text-pink-600 m-6 bg-transparent border border-solid border-pink-600 hover:bg-pink-600 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> 🌸 Data Structures 🌸 </button></Link>
              <Link href="/"><button className="text-pink-600 m-6 bg-transparent border border-solid border-pink-600 hover:bg-pink-600 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> 🌸 Algorithms 🌸 </button></Link>
              <Link href="/"><button className="text-pink-600 m-6 bg-transparent border border-solid border-pink-600 hover:bg-pink-600 hover:text-white active:bg-pink-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"> 🌸 Big O 🌸 </button></Link>
            </div>
          </div>
        </div>
        <div className="basic-box bg-pink-900 bg-cover">
          <h1 className="text-6xl p-3 text-center">🌸</h1>
          <h2 className="font-bold text-red-200 text-6xl text-center p-3 mb-4">Explore Topics</h2>
        </div>
        <div className="basic-box bg-red-300 bg-cover">
          <h1 className="text-6xl p-3 text-center">🌸</h1>
          <h2 className="font-bold text-pink-900 text-6xl text-center p-3 mb-4">Solve Problems</h2>
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default DataStructures

