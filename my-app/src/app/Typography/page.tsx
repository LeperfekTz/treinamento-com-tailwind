import Link from "next/link";

export default function RootLayout() {
    return (
        <main className="bg-purple-400 min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto mt-12 rounded-2xl p-6 bg-white">
                <h1 className="text-3xl font-bold mb-8">Typography Page</h1>
                <div className="flex flex-col gap-4">
                    <div className="font-sans">This is sans-serif font</div>
                    <div className="font-serif">This is serif font</div>
                    <div style={{ fontFamily: "Monsieur La Doulaise" }}>
                        This is Monsieur La Doulaise font
                    </div>
                    <div className="text-left">This text is left aligned.</div>
                    <div className="text-center">
                        This text is center aligned.
                    </div>
                    <div className="text-right">
                        This text is right aligned.
                    </div>
                    <div className="underline">This text is underlined.</div>
                    <div className="line-through">
                        This text has a line through it.
                    </div>
                    <div className="uppercase">this text is uppercase.</div>
                    <div className="lowercase">THIS TEXT IS LOWERCASE.</div>
                    <div className="capitalize">this text is capitalized.</div>
                </div>
            </div>

            <div className="container mx-auto mt-12 rounded-2xl p-6 bg-white">
                Font sizes:
                <div className="text-xs mt-8">This is extra small text.</div>
                <div className="text-lg mt-8">This is large text.</div>
                <div className="text-sm mt-8">This is small text.</div>
                <div className="text-base mt-8">This is base text.</div>
                <div className="text-xl mt-8">This is extra large text.</div>
                <div className="text-2xl mt-8">This is 2xl text.</div>
                <div className="text-3xl mt-8">This is 3xl text.</div>
            </div>

            <div className="container mx-auto mt-12 rounded-2xl p-6 bg-white">
                Font Weight:
                <div className="font-thin mt-8">This is thin font weight.</div>
                <div className="font-extralight mt-8">
                    This is extra light font weight.
                </div>
                <div className="font-light mt-8">
                    This is light font weight.
                </div>
                <div className="font-normal mt-8">
                    This is normal font weight.
                </div>
                <div className="font-semibold mt-8">
                    This is semi-bold font weight.
                </div>
                <div className="font-bold mt-8">This is bold font weight.</div>
            </div>

            <div className="container mx-auto mt-12 rounded-2xl p-6 bg-white">
                Letter Spacing:
                <div className="text-xs mt-8">This is extra small text.</div>
                <div className="text-lg mt-8">This is large text.</div>
                <div className="text-sm mt-8">This is small text.</div>
                <div className="text-base mt-8">This is base text.</div>
                <div className="text-xl mt-8">This is extra large text.</div>
                <div className="text-2xl mt-8">This is 2xl text.</div>
                <div className="text-3xl mt-8">This is 3xl text.</div>
            </div>

            <div className="container mx-auto mt-12 rounded-2xl p-6 bg-white">
                Text transform:
                <div className="text-left">This is left text.</div>
                <div className="text-right">This is right text.</div>
                <div className="text-center">This is center text.</div>
            </div>

            <div className="container mx-auto mt-12 rounded-2xl p-6 bg-white">
                Decoration offset:
                <div className="underline decoration-4">This is left text.</div>
                <div className="underline decoration-double decoration-violet-800">
                    This is right text.
                </div>
                <div className="underline decoration-dotted decoration-yellow-600">
                    This is center text.
                </div>
                <div className="underline decoration-dashed decoration-green-600">
                    This is center text.
                </div>
                <div className="underline decoration-wavy decoration-blue-600">
                    This is center text.
                </div>
                <div className="underline decoration-4 underline-offset-8 decoration-emerald-600">
                    This is center text.
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
