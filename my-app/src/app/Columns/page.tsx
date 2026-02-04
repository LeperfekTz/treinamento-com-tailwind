import Link from "next/link";

export default function Columns() {
    return (
        <main className="bg-white min-h-screen">
            <h1 className="text-2xl font-bold">Columns</h1>
            <div className="columns-4 gap-4">
                <img className="w-full" src="images/24259.jpg" alt=""></img>
                <img className="w-full" src="images/24259.jpg" alt=""></img>
                <img className="w-full" src="images/24259.jpg" alt=""></img>
                <img className="w-full" src="images/24259.jpg" alt=""></img>
            </div>
            <div className="columns-xs">
                <img className="w-full" src="images/geology.png" alt=""></img>
                <img className="w-full" src="images/geology.png" alt=""></img>
                <img className="w-full" src="images/geology.png" alt=""></img>
                <img className="w-full" src="images/geology.png" alt=""></img>
            </div>

            <h1 className="text-2xl font-bold">Aspect Ratio</h1>
            <div className="grid grid-cols-4 gap-4 mb-10">
                <figure className="flex flex-col">
                    <img
                        className="w-full aspect-square"
                        src="images/geology.png"
                        alt=""
                    />
                    <figcaption className="mt-2 text-center">square</figcaption>
                </figure>

                <figure className="flex flex-col">
                    <img
                        className="w-full aspect-video"
                        src="images/geology.png"
                        alt=""
                    />
                    <figcaption className="mt-2 text-center">video</figcaption>
                </figure>

                <figure className="flex flex-col">
                    <img
                        className="w-full aspect-auto"
                        src="images/geology.png"
                        alt=""
                    />
                    <figcaption className="mt-2 text-center">auto</figcaption>
                </figure>

                <figure className="flex flex-col">
                    <img className="w-full" src="images/geology.png" alt="" />
                </figure>
            </div>

            <Link
                href="/"
                className="mt-4 p-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
                Click Me to return to Home Page
            </Link>
        </main>
    );
}
