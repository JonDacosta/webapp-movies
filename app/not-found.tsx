import Link from 'next/link'
import { Navbar } from '../components'

export default function NotFound() {
    return (
        <>
        <Navbar/>
        <main className="h-screen w-full flex flex-col justify-center items-center bg-background">
            <h1 className="text-9xl font-extrabold text-whitesmoke tracking-widest shadow">404</h1>
            <div className="bg-[#fbc500] px-2 text-sm rounded rotate-12 absolute">
                Página no encontrada
            </div>
            <button className="mt-5">
                <div
                    className="relative inline-block text-sm font-medium text-[#fbc500] group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#fbc500] group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-background border border-current">
                        <Link href="/">Volver a la Home</Link>
                    </span>
                </div>
            </button>
        </main>
        </>
    )
}