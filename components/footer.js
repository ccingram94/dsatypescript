import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div>
                <footer className="footer bg-pink-900 relative pt-1 border-b-2 border-t-2 border-pink-600 bottom-0 w-screen">
                    <div className="container mx-auto px-6">
                        <div className="sm:flex sm:mt-8">
                            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                                <div className="flex flex-col m-2">
                                    <span className="font-bold text-pink-300 uppercase mb-2">🌸 Data Structures</span>
                                    <span className="my-2 text-pink-300"><Link href="/array">Array</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Linked List</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Tree</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Hash Table</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Graph</Link></span>
                                </div>
                                <div className="flex flex-col m-2">
                                    <span className="font-bold text-pink-300 uppercase mb-2">🌸 Algorithms</span>
                                    <span className="my-2 text-pink-300"><Link href="/">Merge Sort</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Quick Sort</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Binary Search</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Breadth-First Search</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Depth-First Search</Link></span>
                                </div>
                                <div className="flex flex-col m-2">
                                    <span className="font-bold text-pink-300 uppercase mb-2">🌸 Etcetera</span>
                                    <span className="my-2 text-pink-300"><Link href="/">Home</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">About</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Explore</Link></span>
                                    <span className="my-2 text-pink-300"><Link href="/">Contact</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-6">
                        <div className="mt-16 border-t-2 border-pink-900 flex flex-col items-center">
                            <div className="sm:w-2/3 text-center py-6">
                                <p className="text-sm text-pink-300 font-thin mb-2">Last modified on October 21, 2021.</p>
                                <p className="text-sm text-pink-300 font-thin mb-2">Copyright © 2021 Constance Ingram. All rights reserved.</p>
                                <p className="text-sm text-pink-300 font-thin mb-2">🌸 constanceingram.dev 🌸</p>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    )
}

export default Footer