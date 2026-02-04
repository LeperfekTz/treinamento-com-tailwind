import Link from "next/link";

export default function GridPage() {
    return (
        <main className="bg-white min-h-screen">
            <h1 className="font-extrabold text-4xl">Grid</h1>
            <div className="grid grid-cols-3 gap-4 grid-rows-3 bg-linear-to-r from-30% to-60% from-blue-500 to-green-500">
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 1
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 2
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 3
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 4
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 5
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 6
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 7
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 8
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 9
                </div>
            </div>
            <h1 className="font-extrabold text-4xl">Grid 2</h1>
            <div className="grid md:grid-cols-3">
                <div className="md:col-span-2 row-span-2 p-10 border border-blue-500 bg-blue-100">
                    item 1
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 2
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 3
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 4
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 5
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 6
                </div>
                <div className="md:col-span-2 p-10 border border-blue-500 bg-blue-100">
                    item 7
                </div>
                <div className="p-10 border border-blue-500 bg-blue-100">
                    item 8
                </div>
                <div className="md:col-span-3 p-10 border border-blue-500 bg-blue-100">
                    item 9
                </div>
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
