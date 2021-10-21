import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import ArrowRight from '@heroicons/react/outline/ArrowCircleRightIcon'


function LinkedListCard() {
    return (
        <div>
            <div className="container mx-auto flex flex-col flex-wrap justify-center rounded-xl bg-cover bg-hero-img shadow-xl p-10 m-10 max-w-md">
                <div className="container flex flex-col flex-wrap justify-center mx-auto flex-1">
                <Link href="/linkedlist">
                    <div className="flex flex-row flex-wrap justify-center items-center text-pink-900 hover:text-pink-600 ease-linear transition-all">
                        <h1 className="font-bold text-center text-4xl p-5"> Linked List </h1>
                        <ArrowRight className=" h-12 w-12"/>
                    </div>
                    </Link>
                    <div className="text-center text-pink-900 p-3">
                        <p>nodes with values and pointers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkedListCard