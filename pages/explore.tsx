import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import DataStructuresAbout from '../components/datastructuresabout'
import AlgosAbout from '../components/algosabout'
import ComplexityAbout from '../components/complexityabout'

const Explore: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Data Structures and Algorithms</title>
        <meta name="description" content="intro to data structures and algorithms in Python" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      
      <main className="mx-auto">
      <Header/>
        <div className="basic-box bg-red-300 bg-cover">
          <Link href="/">
          <h1 className="text-6xl p-3 text-center">🌸</h1>
          </Link>
          <Link href="/">
          <h2 className="font-bold text-pink-900 text-6xl text-center p-3">Explore Topics</h2>
          </Link>
          <DataStructuresAbout />
          <AlgosAbout />
          <ComplexityAbout />
        </div>
        <div className="basic-box bg-pink-900 bg-cover">
          <h1 className="text-6xl p-3 text-center">🌸</h1>
          <h2 className="font-bold text-red-200 text-3xl text-center p-3">Explore Even More</h2>
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default Explore

