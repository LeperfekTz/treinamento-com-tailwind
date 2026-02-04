import Link from "next/link";

export default function Filters() {
    return (
        <main className="bg-white min-h-screen">
            <h1>Blur</h1>
            <div className="blur">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, qui.
            </div>
            <div className="blur-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, qui.
            </div>
            <div className="blur-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, qui.
            </div>
            <div className="blur-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, qui.
            </div>

            <h1 className="mt-8">Brightness</h1>
            <div
                className="brightness-10 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="brightness-40 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="brightness-80 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="brightness-100 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="backdrop-200 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>

            <h1 className="mt-8">Contrast</h1>
            <div
                className="contrast-0 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="contrast-20 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="contrast-50 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="contrast-60 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="contrast-80 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="contrast-100 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="contrast-150 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>
            <div
                className="contrast-200 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>

            <h1>Grayscale</h1>
            <div
                className="grayscale h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/24259.jpg')" }}
            ></div>

            <h1>Invert</h1>
            <div
                className="invert h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/24259.jpg')" }}
            ></div>

            <h1>Sepia</h1>
            <div
                className="sepia h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/24259.jpg')" }}
            ></div>
            <h1>Hue rotate</h1>
            <div
                className="hue-rotate-15 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/24259.jpg')" }}
            ></div>
            <h1>Hue rotate</h1>
            <div
                className="hue-rotate-60 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/24259.jpg')" }}
            ></div>
            <h1>Hue rotate</h1>
            <div
                className="hue-rotate-90 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/24259.jpg')" }}
            ></div>
            <h1>Hue rotate</h1>
            <div
                className="hue-rotate-180 h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/24259.jpg')" }}
            ></div>

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
