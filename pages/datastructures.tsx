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
import ArrowLeft from '@heroicons/react/outline/ArrowCircleLeftIcon'
import DSCard from '../components/dscard'
import ArrayCard from '../components/arraycard'
import StackCard from '../components/stackcard'
import QueueCard from '../components/queuecard'
import LinkedListCard from '../components/linkedlistcard'
import TreeCard from '../components/treecard'
import HashTableCard from '../components/hashtablecard'


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
          <div className="text-pink-900 hover:text-pink-600 flex flex-row flex-wrap justify-center items-center ease-linear transition-all">
            <Link href="/explore"><ArrowLeft className="h-12 w-12"/></Link>
            <Link href="/explore"><h2 className="font-bold text-6xl text-center p-3">Data Structures</h2></Link>
          </div>
          <div className="container flex flex-col flex-wrap justify-center mx-auto rounded-xl bg-cover bg-hero-img shadow-xl p-10 m-10">
            <div className="text-pink-900 text-lg text-center">
              <p className="leading-loose mb-2"><strong>Data structures</strong> are useful ways of storing data.</p>
              <p className="leading-loose mb-2"><strong>Abstract Data Types</strong> describe the values and operations (but not the implementation) of the data type.</p>
              <p className="leading-loose mb-2">Common data structures include <strong>arrays, linked lists, trees, hash tables, and graphs.</strong></p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap container mx-auto space-x-10 justify-center items-center flex-grow">
            <ArrayCard />
            <StackCard />
            <QueueCard />
            <LinkedListCard />
            <TreeCard />
            <HashTableCard />
          </div>
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default DataStructures

