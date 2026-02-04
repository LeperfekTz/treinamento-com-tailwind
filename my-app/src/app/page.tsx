import Link from "next/link";

export default function HomePage() {
    return (
        <main className="bg-amber-400 min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto ">
                <h1 className="text-3xl font-bold mb-8">Tela Principal</h1>
                <div className="flex flex-col gap-4 items-start">
                    <Link
                        href="/Colors"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-red-500 to-amber-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Colors
                    </Link>
                    <Link
                        href="/Containers"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Containers and spacing
                    </Link>
                    <Link
                        href="/Typography"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Typography
                    </Link>
                    <Link
                        href="/Sizing"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-pink-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Sizing
                    </Link>
                    <Link
                        href="/Layouts"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-red-900 to-gray-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Layouts
                    </Link>
                    <Link
                        href="/Backgrounds"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-purple-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Backgrounds
                    </Link>
                    <Link
                        href="/Borders"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-gray-500 to-sky-900 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Borders
                    </Link>
                    <Link
                        href="/Filters"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-rose-700 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Filters
                    </Link>
                    <Link
                        href="/Interactivity"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-zinc-700 to-current text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Interactivity
                    </Link>
                    <Link
                        href="/Breakpoints"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-black to-violet-800 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Breakpoints
                    </Link>
                    <Link
                        href="/Columns"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-green-600 to-purple-950 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Columns
                    </Link>
                    <Link
                        href="/Flexbox"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-orange-600 to-black text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Flexbox
                    </Link>
                    <Link
                        href="/Grid"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-blue-300 via-40% to-80% via-red-600 to-black text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Grid
                    </Link>
                    <Link
                        href="/Transform_and_transition"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-blue-300 via-40% to-80% via-red-600 to-black text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                    >
                        Ir para Transform and transition
                    </Link>
                    <Link
                        href="/Animation"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-red-300 via-40% to-80% via-red-600 to-red-900 text-white font-semibold hover:scale-105 hover:shadow-xl hover:rotate-360 hover:text-xl  shadow-red-800 transition duration-700"
                    >
                        Ir para Animation
                    </Link>
                    <Link
                        href="/Customization"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-blue-300 via-40% to-80% via-blue-600 to-blue-900 text-white font-semibold hover:scale-105 duration-200"
                    >
                        Ir para Customization
                    </Link>
                    <Link
                        href="/Darkmode"
                        className="px-6 py-2 rounded-xl bg-linear-to-r from-zinc-400 via-40% to-80% via-zinc-600 to-zinc-900 text-white font-semibold hover:scale-105 duration-200"
                    >
                        Ir para Dark mode
                    </Link>
                </div>
            </div>
            <footer className="bg-linear-to-r from-black to-red-500 text-white min-w-screen h-10 mx-auto p-4 mt-10 flex items-center justify-center">
                Footer da pagina home
            </footer>
        </main>
    );
}
