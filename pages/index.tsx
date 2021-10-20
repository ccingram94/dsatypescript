import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'

const Home: NextPage = () => {
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
            <h1 className="font-black text-6xl font-bold text-white text-center title-font sm:text-4x1 text-3x1 mb-4 font-large">Data Structures and Algorithms</h1>
            <div className="flex flex-row justify-center items-center content-center">
              <Link href="/"><button>hello</button></Link>
              <Link href="/"><button>hello</button></Link>
              <Link href="/"><button>hello</button></Link>
            </div>
          </div>
        </div>
        <div className="basic-box bg-pink-900 bg-cover">
          <h2 className="font-bold text-red-200 text-3xl text-center p-3">Explore Topics</h2>
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default Home

