import Link from "next/link";

export default function Interactivity() {
    return (
        <main className="bg-white min-h-screen">
            <h1 className="text-2xl font-bold">Interactivity</h1>
            <h2 className="mt-3">Hover State styling</h2>
            <button className="bg-black text-white py-3 px-5 rounded-lg hover:bg-green-500 hover:text-black ">
                Hover Me
            </button>

            <h2 className="mt-3">Focus State styling</h2>
            <button className="bg-black text-white py-3 px-5 rounded-lg focus:bg-blue-500 focus:text-black">
                Focus Me
            </button>

            <h2 className="mt-3">Active state styling</h2>
            <button className="bg-black text-white py-3 px-5 rounded-lg active:bg-blue-500 active:text-black">
                Active Me
            </button>

            <h2 className="mt-3 -space-x-3 mx-auto max-w-xl">
                Styling based on parent state
            </h2>
            <a
                href=""
                className="group block max-w-xl mx-auto rounded-lg p-6 bg-white shadow-lg -space-y-3 hover:bg-sky-500"
            >
                <h3 className="text-lg inline-block font-bold hover:text-white">
                    Card title
                </h3>
                <p className="hover:text-white">aqui tem texto</p>
            </a>

            <h1 className="-space-x-3 mx-auto max-w-xl">
                Grouped hover states
            </h1>
            <a
                href=""
                className="group block max-w-xl mx-auto rounded-lg p-6 bg-white shadow-lg -space-y-3 hover:bg-sky-500"
            >
                <h3 className="text-lg font-bold group-hover:text-white">
                    Card title
                </h3>
                <p className="group-hover:text-white">aqui tem texto</p>
            </a>

            <h2 className="font-bold">Pseudo classes</h2>
            <ul>
                <li className="first:bg-red-200 even:bg-amber-500 odd:bg-green-500">
                    Item 1
                </li>
                <li className="first:bg-red-200 even:bg-amber-500 odd:bg-green-500">
                    Item 2
                </li>
                <li className="first:bg-red-200 even:bg-amber-500 odd:bg-green-500">
                    Item 3
                </li>
                <li className="first:bg-red-200 even:bg-amber-500 odd:bg-green-500">
                    Item 4
                </li>
                <li className="first:bg-red-200 even:bg-amber-500 odd:bg-green-500">
                    Item 5
                </li>
                <li className="first:bg-red-200 even:bg-amber-500 odd:bg-green-500">
                    Item 6
                </li>
            </ul>

            <h1>Cursors</h1>
            <div>
                <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-wait">
                    Submit cursor wait
                </button>
                <p className="cursor-pointer">Cursor pointer</p>
            </div>

            <h1>User select</h1>
            <div className="select-none">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="select-text">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="select-all">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="select-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>

            <h1 className="font-bold">Appearance</h1>
            <select className="appearance-none border border-red-500 p-2 rounded-xl">
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>

            <a
                href="#item"
                className="block my-6 bg-linear-to-r w-30 from-blue-500 to-green-500 text-white p-2 rounded-lg"
            >
                Go to item
            </a>

            <h1>Smooth scroll</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae mollitia distinctio esse quidem, neque atque veniam
                nesciunt a, aliquid aspernatur temporibus cum obcaecati eius
                dolore rem commodi ipsum dignissimos aperiam quae ducimus nihil
                ex fuga nostrum. Ipsa amet vitae enim accusantium neque, quia
                repellendus ab magni maxime perspiciatis voluptatibus molestias
                repellat quos suscipit, totam culpa velit, ex eum sint! Deserunt
                nemo ad ab expedita, iusto repellendus error officiis voluptates
                qui aliquid molestiae sequi sapiente a consequuntur at
                recusandae delectus quis magni velit hic harum itaque eum!
                Totam, incidunt magni soluta provident nostrum veritatis earum
                dignissimos hic numquam saepe aliquam amet eius architecto nulla
                pariatur cupiditate, nihil quasi vel? Molestiae sunt nostrum
                reiciendis amet fugit, sapiente voluptate pariatur maxime, a
                commodi est, maiores dolor repellendus labore. Sapiente
                distinctio in repellat doloribus accusantium dicta nostrum
                voluptatibus nihil deserunt dolorum nemo, officia, est
                repudiandae aliquid ratione harum, nam quos perferendis illum et
                odit!
            </p>
            <div id="item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat porro, quos quas corrupti autem libero vitae. Facilis
                perferendis nobis porro maiores aperiam, recusandae inventore,
                amet alias vero animi id ipsam velit eum dolor repudiandae! Iste
                facere accusantium vero quas neque id labore tempora voluptatum
                consequatur consequuntur ipsam, suscipit autem reiciendis ad
                dicta illum molestias. Illum, magni doloribus ducimus, rerum
                ipsam quae recusandae reprehenderit corporis deleniti corrupti
                fuga optio. Modi totam numquam nisi quos ducimus accusantium,
                pariatur consequatur expedita eligendi dolorum nemo cumque velit
                ratione aperiam maiores sunt assumenda mollitia veniam veritatis
                iusto, quisquam doloribus iure est error! Unde esse itaque atque
                dignissimos excepturi molestiae reprehenderit magnam. Dicta nemo
                a, incidunt voluptates commodi molestias accusamus odio culpa
                doloremque! Dolor, quisquam beatae?
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
