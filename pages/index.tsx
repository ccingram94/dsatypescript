import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
        <div className="basic-box bg-hero-img bg-cover background relative" >
          <Header/>
          <div className="p-2 container mx-auto flex-col justify-center justify-items-center content-center items-center justify-center">
            <h1 className="font-display content text-white font-sans text-6xl font-bold text-center p-3 m-20">
              Data Structures and Algorithms
            </h1>
          </div>
        </div>
        <div className="basic-box bg-pink-900 bg-cover">
          <h2 className="font-display text-white text-3xl text-center p-3">Explore Topics</h2>
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default Home
