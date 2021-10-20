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
        <div className="basic-box bg-red-300 bg-cover">
          <Link href="/">
            <h1 className="text-6xl p-3 text-center">🌸</h1>
          </Link>
          <Link href="/">
            <h2 className="font-bold text-pink-900 text-6xl text-center p-3">Data Structures</h2>
          </Link>
          <div className="container flex flex-col flex-wrap justify-center mx-auto rounded-xl bg-cover bg-hero-img shadow-xl p-10 m-10">
            <div className="text-pink-900 text-lg text-center">
              <p className="leading-loose mb-2">Data structures are useful ways of storing data.</p>
              <p className="leading-loose mb-2">Abstract Data Types like the ones we will explore describe the values and operations (but not the implementation) of the data type.</p>
              <p className="leading-loose mb-2">Common data structures include arrays, linked lists, trees, hash tables, and graphs.</p>
            </div>
          </div>
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default DataStructures

