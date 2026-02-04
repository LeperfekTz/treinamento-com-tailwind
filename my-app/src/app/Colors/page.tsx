import Link from "next/link";

export default function ColorsPage() {
    return (
        <main className="bg-linear-to-r from-amber-200 via-red-300 to-amber-500 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome to the Colors Page</h1>
            <p className="mt-4 mb-4 p-4 w-100 rounded-2xl bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                This is the main landing page of the application.
            </p>
            <div className="divide-y divide-white">
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
            </div>
            <button className=" p-1 mb-4 outline outline-blue-600 hover:effects hover:scale-110 transition-transform duration-400">
                Click Me
            </button>
            <div className=" flex flex-col items-center mt-4 gap-2 p-4 bg-white rounded-xl border shadow-lg">
                <div className="shadow-lg bg-cyan-500 shadow-cyan-500 mb-2 w-100 text-center rounded-lg">
                    Shadow
                </div>
                <div className="shadow-lg bg-red-500 shadow-red-500 mb-2 w-100 text-center rounded-lg">
                    Shadow
                </div>
                <div className="shadow-lg bg-pink-500 shadow-pink-500 mb-2 w-100 text-center rounded-lg">
                    Shadow
                </div>
                <div className="shadow-lg bg-purple-500 shadow-purple-500 mb-2 w-100 text-center rounded-lg">
                    Shadow
                </div>
            </div>
            <div className="flex flex-col items-center mt-4">
                <div className="bg-linear-to-r from-emerald-500 to-emerald-800 rounded-lg p-3 text-center">
                    <span className="bg-linear-to-r from-red-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">
                        Checkbox usando reverse
                    </span>
                </div>
                <div className="flex flex-row-reverse items-start">
                    <input type="checkbox" className="mt-4 accent-pink-600" />
                    <input type="checkbox" className="mt-4 accent-green-600" />
                    <input type="checkbox" className="mt-4 accent-gray-600" />
                    <input type="checkbox" className="mt-4 accent-blue-600" />
                </div>
            </div>
        </main>
    );
}
