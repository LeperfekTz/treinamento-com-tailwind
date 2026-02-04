import Link from "next/link";

export default function FlexboxPage() {
    return (
        <main className="bg-amber-500 min-h-screen">
            <h1>Flex and alignment start</h1>
            <div className="flex h-72 w-full items-start">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>Flex and alignment center</h1>
            <div className="flex h-72 w-full items-center">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>Flex and alignment end</h1>
            <div className="flex h-72 w-full items-end">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>Flex and alignment stretch (default)</h1>
            <div className="flex h-72 w-full items-stretch">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>Flex and alignment baseline</h1>
            <div className="flex h-72 w-full items-baseline">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>Flex-col and alignment start</h1>
            <div className="flex flex-col w-full items-start">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>Flex-col and alignment center</h1>
            <div className="flex flex-col w-full items-center">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>Flex-col and alignment end</h1>
            <div className="flex flex-col w-full items-end">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>Flex-col and alignment stretch (default)</h1>
            <div className="flex flex-col w-full items-stretch">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>Flex-col and alignment baseline</h1>
            <div className="flex flex-col w-full items-baseline">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1 className="font-bold text-2xl">
                Flex and alignment justify-content
            </h1>
            <h1>center</h1>{" "}
            <div className="flex items-center justify-center w-full">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>start</h1>
            <div className="flex items-center justify-start w-full">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>end</h1>
            <div className="flex items-center justify-end w-full">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>between</h1>
            <div className="flex items-center justify-between w-full">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>around</h1>
            <div className="flex items-center justify-around w-full">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1>evenly</h1>
            <div className="flex items-center justify-evenly w-full">
                <div className="p-10 border border-black bg-teal-400">01</div>
                <div className="p-10 border border-black bg-teal-400">02</div>
                <div className="p-10 border border-black bg-teal-400">03</div>
                <div className="p-10 border border-black bg-teal-400">04</div>
            </div>
            <h1 className="font-bold text-2xl">Grow and shrink</h1>
            <div className="flex flex-col gap-4 items-center justify-center w-full">
                <div className="order-3 flex-initial w-64 p-10 border border-black bg-teal-400">
                    01
                </div>
                <div className="order-1 w-64 p-10 border border-black bg-teal-400">
                    02
                </div>
                <div className="order-4 w-64 p-10 border border-black bg-teal-400">
                    03
                </div>
                <div className="order-2 w-64 p-10 border border-black bg-teal-400">
                    04
                </div>
            </div>
            <h1 className="font-bold text-2xl justify-center flex">
                Grow and shrink 2
            </h1>
            <div className="flex flex-row gap-4 items-center justify-center w-full">
                <div className="flex-initial w-64 p-10 border border-black bg-teal-400">
                    01
                </div>
                <div className="flex-none w-64 p-10 border border-black bg-teal-400">
                    02
                </div>
                <div className="flex-auto w-64 p-10 border border-black bg-teal-400">
                    03
                </div>
                <div className="flex-one w-64 p-10 border border-black bg-teal-400">
                    04
                </div>
            </div>
            
            <div className="flex text-center mt-10">
                <div className="flex-1 bg-teal-400">
                    Hello
                </div>
                <div className="flex-1 bg-teal-400">
                    Hello
                </div>
                <div className="flex-1 bg-teal-400">
                    Hello
                </div>
                <div className="flex-1 bg-teal-400">
                    Hello
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
