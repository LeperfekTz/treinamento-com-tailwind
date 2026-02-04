import Link from "next/link";

export default function Container_and_Spacing() {
    return (
        <main className="bg-blue-400 min-h-screen">
            <div className="container mx-auto">
                <article>
                    <h3>Article One</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </article>
            </div>
            <div className="container mx-auto mt-4 p-4 bg-white rounded-xl border shadow-lg">
                <div className="bg-slate-400 m-2">Margin Right and Left</div>
                <div className="bg-slate-400 ml-4">Margin Left</div>
                <div className="bg-slate-400 mr-4">Margin Right</div>
                <div className="bg-slate-400 mt-4">Margin Top</div>
                <div className="bg-slate-400 mb-4">Margin Bottom</div>
                <div className="bg-slate-400 ml-4">Margin Left</div>
            </div>
            <div className="container mx-auto mt-4 p-4 bg-white rounded-xl border shadow-lg">
                <div className="bg-slate-400 p-2">Padding Right and Left</div>
                <div className="bg-slate-400 pl-4">Padding Left</div>
                <div className="bg-slate-400 pr-4">Padding Right</div>
                <div className="bg-slate-400 pt-4">Padding Top</div>
                <div className="bg-slate-400 pb-4">Padding Bottom</div>
                <div className="bg-slate-400 pl-4">Padding Left</div>
            </div>
            <div className="container mx-auto mt-4 p-4 bg-white rounded-xl border shadow-lg">
                <div className="flex mt-10  space-x-4">
                    <div>item 1</div>
                    <div>item 2</div>
                    <div>item 3</div>
                    <div>item 4</div>
                    <div>item 5</div>
                    <div>item 6</div>
                    <div>item 7</div>
                </div>
            </div>
            <div className="container mx-auto mt-4 p-4 bg-white rounded-xl border shadow-lg">
                <div className="flex mt-10  space-y-50">
                    <div>item 1</div>
                    <div>item 2</div>
                    <div>item 3</div>
                    <div>item 4</div>
                    <div>item 5</div>
                    <div>item 6</div>
                    <div>item 7</div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link
                    href="/"
                    className="mt-4 p-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                    Click Me the return to Home Page
                </Link>
            </div>
        </main>
    );
}
