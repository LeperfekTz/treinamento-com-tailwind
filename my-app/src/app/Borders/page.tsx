import Link from "next/link";

export default function Borders() {
    return (
        <main className="bg-white min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Tela sobre Borders</h1>

            <h2>Border width & colors</h2>
            <div className="w-94 m-3 p-5 border">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                alias.
            </div>
            <div className="w-94 m-3 p-5 border-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                alias.
            </div>
            <div className="w-94 m-3 p-5 border-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                alias.
            </div>
            <div className="w-94 m-3 p-5 border-8 border-blue-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                nesciunt!
            </div>
            <div className="w-94 m-3 p-5 border-x-4 border-blue-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                nesciunt!
            </div>
            <div className="w-94 m-3 p-5 border-y-4 border-blue-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                nesciunt!
            </div>
            <div className="w-94 m-3 p-5 border-t-4 border-red-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                nesciunt!
            </div>
            <div className="w-94 m-3 p-5 border-b-4 border-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                nesciunt!
            </div>
            <div className="w-94 m-3 p-5 border-r-4 border-yellow-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                nesciunt!
            </div>
            <div className="w-94 m-3 p-5 border-l-4 border-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                nesciunt!
            </div>

            <h2>Border radius</h2>
            <div className="w-96 m-3 p-5 border-4 rounded-none">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-full">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-t-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-b-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-r-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, provident!
            </div>
            <div className="w-96 m-3 p-5 border-4 rounded-l-2xl">
                Repellat, provident!
            </div>

            <h2>Outline</h2>
            <div className="outline-4 outline-amber-500">Click</div>

            <div className="mt-4 flex justify-center">
                <Link
                    href="/"
                    className="mt-4 mb-4 w-70 inline-block p-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                    Click Me the return to Home Page
                </Link>
            </div>
        </main>
    );
}
