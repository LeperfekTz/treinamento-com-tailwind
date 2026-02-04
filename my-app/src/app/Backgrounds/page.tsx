import Link from "next/link";

export default function Backgrounds() {

    return (
        <main className="bg-white min-h-screen flex flex-col">
            <header className="bg-gray-500 text-3xl font-bold mb-8">
                Tela sobre layouts e posições
            </header>

            <h2 className="text-2xl">Background classes</h2>
            <div
                className="h-64 w-72 bg-no-repeat bg-cover"
                style={{ backgroundImage: "url('/images/geology.png')" }}
            ></div>

            <h2>Gradient Colors</h2>
            <div className="h-24 bg-linear-to-r from-cyan-500 to-red-500"></div>

            <h2>Shadows pequeno</h2>
            <div className="w-96 mt-6 ml-4 p-3 shadow-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt repellendus repudiandae quos nam aliquam nihil,
                consequuntur iusto provident corrupti officia. Aliquam natus
                voluptas possimus deleniti vitae sint est et sed.
            </div>

            <h2>Shadows pequeno com cor</h2>
            <div className="w-96 mt-6 ml-4 p-3 shadow-sm shadow-red-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt repellendus repudiandae quos nam aliquam nihil,
                consequuntur iusto provident corrupti officia. Aliquam natus
                voluptas possimus deleniti vitae sint est et sed.
            </div>

            <h2>Shadows inner</h2>
            <div className="w-96 mt-6 ml-4 p-3 shadow-inner">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt repellendus repudiandae quos nam aliquam nihil,
                consequuntur iusto provident corrupti officia. Aliquam natus
                voluptas possimus deleniti vitae sint est et sed.
            </div>

            <h2>Shadows medio</h2>
            <div className="w-96 mt-6 ml-4 p-3 shadow-md">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt repellendus repudiandae quos nam aliquam nihil,
                consequuntur iusto provident corrupti officia. Aliquam natus
                voluptas possimus deleniti vitae sint est et sed.
            </div>

            <h2>Shadows grande com cor e opacidade</h2>
            <div className="w-96 mt-6 ml-4 p-3 shadow-2xl shadow-amber-500/50">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt repellendus repudiandae quos nam aliquam nihil,
                consequuntur iusto provident corrupti officia. Aliquam natus
                voluptas possimus deleniti vitae sint est et sed.
            </div>

            <h2 className="mt-10">Mix blend modes</h2>
            <div className="flex justify-center -space-x-24">
                <div className="bg-red-500 mix-blend-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, at?</div>
                <div className="bg-blue-500 mix-blend-multiply">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, iste.</div>
                <div className="bg-green-500 mix-blend-screen">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, harum.</div>
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
