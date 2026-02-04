import { Span } from "next/dist/trace";
import Link from "next/link";

export default function Layouts() {
    return (
        <main className="bg-white min-h-screen flex flex-col">
            <header className="bg-gray-500 text-3xl font-bold mb-8">
                Tela sobre layouts e posições
            </header>
            <h2 className="text-2xl">Positinoning</h2>
            <div className="relative w-1/2 h-12 bg-red-300">
                <p>Parent elements</p>
                <div className="absolute bottom-0 right-0 bg-blue-500">
                    <p>Absolute Child</p>
                </div>
            </div>
            <h2 className="text-2xl">Top left corner</h2>
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
            </div>
            <h2 className="text-2xl">bottom right</h2>
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
            </div>
            <h2 className="text-2xl">Span top</h2>
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300"></div>
            </div>
            <h2 className="text-2xl">Span left edge</h2>
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300"></div>
            </div>
            <h2 className="text-2xl">Span right edge</h2>
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute inset-y-0 right-0 w-16 bg-yellow-300"></div>
            </div>
            <h2 className="text-2xl">Span bottom</h2>
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
            </div>
            <h2 className="text-2xl">Display classes</h2>
            <div className="relative h-32 w-32 bg-yellow-100">
                <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <span className="inline text-red-500">This is inline</span>
                ipsum ipsum nemo illum beatae magni ullam ipsa eligendi
                consequuntur
                <span className="block text-red-500">This is block</span>
                rem sed eius fugit adipisci, voluptate vitae, alias, quos
                suscipit perspiciatis enim sit omnis porro.
                <span className="hidden bg-red-500">This is hidden</span>
                Nobis corporis porro iure vel qui explicabo voluptatem.
                <span className="inline-block text-red-500">
                    This is inline-block
                </span>
                Dolore beatae fugiat sed unde alias voluptas, in earum atque
                quasi nesciunt quis ipsam, itaque pariatur! Dolorum, id. Ex.
            </div>

            <h2 className="mt-5 text-2xl">Z-index</h2>
            <div className="relative h-32 w-36 bg-yellow-100">
                <div className="absolute w-24 h-24 left-10 bg-green-200 z-10">
                    Z-10
                </div>
                <div className="absolute w-24 h-24 left-20 bg-green-300 z-70">
                    Z-70
                </div>
                <div className="absolute w-24 h-24 left-30 bg-green-400 z-30">
                    Z-30
                </div>
                <div className="absolute w-24 h-24 left-40 bg-green-500 z-40">
                    Z-40
                </div>
                <div className="absolute w-24 h-24 left-50 bg-green-600 z-50">
                    Z-50
                </div>
                <div className="absolute w-24 h-24 left-60 bg-green-700 z-60">
                    Z-60
                </div>
            </div>

            <h2 className="mt-5 text-2xl">Floats</h2>
            <div className="w-1/2">
                <img className="h-48 -w-48 float-left m-6" src="/images/geology.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iusto similique eius tempore, corporis doloribus aspernatur error et facere reiciendis quos odio eum, laboriosam nam debitis. Commodi consequatur non nisi
                </p>
            </div>
            <div className="mt-4 flex justify-center">
                <Link
                    href="/"
                    className="mt-4 w-70 inline-block p-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                    Click Me the return to Home Page
                </Link>
            </div>
        </main>
    );
}
