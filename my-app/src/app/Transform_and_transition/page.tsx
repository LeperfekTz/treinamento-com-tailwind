import Link from "next/link";

export default function ComponentName() {
    return (
        <main className="bg-white min-h-screen">
            <h1 className="font-extrabold">No transition</h1>
            <button className="px-9 py-2 m-24 text-white bg-blue-500 rounded hover:bg-emerald-500">
                Click
            </button>
            <div className="mt-4 flex justify-center"></div>

            <h1 className="font-extrabold">With transition</h1>
            <button className="px-9 py-2 m-24 text-white bg-blue-500 rounded hover:bg-emerald-500 hover:backdrop-opacity-80 hover:shadow-xl shadow-emerald-600 transition duration-400">
                Click
            </button>

            <h1 className="text-2xl font-extrabold">
                Transition and transform
            </h1>
            <button className="px-9 py-2 m-24 text-white bg-blue-500 rounded hover:bg-emerald-500 hover:backdrop-opacity-80 hover:shadow-xl hover:rotate-12  shadow-emerald-600 transition duration-400">
                Click
            </button>
            <img src="images/geology.png" alt="" className="w-48 hover:rotate-360 hover:scale-75 hover:skew-x-12 transition duration-2000 hover:shadow-[10px_10px_10px_10px_rgba(0,0,0,6.5)] shadow-black" />
            <div className="mt-4 flex justify-center">
                <Link
                    href="/"
                    className="mt-4 w-70 inline-block p-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                    Click Me to return to Home Page
                </Link>
            </div>
        </main>
    );
}
