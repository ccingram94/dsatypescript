import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { providers, getSession, useSession } from 'next-auth/client'

const Login: NextPage = () => {
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="intro to data structures and algorithms in Python" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      
      <main className="mx-auto">
      <Header/>
        <div className="basic-box bg-cover bg-hero-img background relative bg-gradient-to-r from-red-200 via-red-300 to-yellow-200" >
          <div className="container mx-auto flex px-12 py-12 items-center justify-center flex-col">
            <h1 className="font-black text-6xl font-bold text-pink-900 text-center title-font sm:text-4x1 text-3x1 mb-4 mt-4 font-large"> 🌸 Log In 🌸 </h1>
          </div>
        </div>
    </main>
    <Footer />
    </div>
  )
}

export default Login

