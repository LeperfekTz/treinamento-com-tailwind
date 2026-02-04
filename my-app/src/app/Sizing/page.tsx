import Link from "next/link";

export default function Sizing() {
    return (
        <main className="bg-white min-h-screen flex flex-col">
            <h1 className="text-3xl font-bold mb-8">Tela sobre tamanhos</h1>

            <div>
                <div>Width</div>
                <div className="bg-black text-white w-10"> Hello</div>
                <div className="bg-black text-white w-20"> Hello</div>
                <div className="bg-black text-white w-40"> Hello</div>
            </div>
            <div>
                <div>Percentages</div>
                <div className="bg-green-500 text-white w-1/2"> Hello</div>
                <div className="bg-green-500 text-white w-1/4"> Hello</div>
                <div className="bg-green-500 text-white w-1/8"> Hello</div>
            </div>
            <div>
                <div>Width of the viewport</div>
                <div className="bg-blue-500 text-white w-screen"> Hello</div>
            </div>
            <div>
                <div>Full Width</div>
                <div className="bg-blue-900 text-white w-full"> Hello</div>
            </div>
            <div>
                <div>Arbitrary Width</div>
                <div className="bg-blue-900 text-white w-[300px]"> Hello</div>
            </div>
            <div>
                <div>Max Width</div>
                <div className="bg-blue-900 text-white max-w-sm">
                    Este é um exemplo de texto maior para demonstrar o uso da
                    classe max-w-sm no Tailwind CSS. O objetivo deste texto é
                    preencher o espaço disponível e mostrar como o conteúdo se
                    comporta quando há uma limitação de largura máxima. Ao
                    utilizar max-w-sm, o elemento não ultrapassa o valor
                    definido, mesmo que o texto seja extenso. Isso é útil para
                    garantir legibilidade e organização visual em layouts
                    responsivos. O Tailwind CSS oferece diversas opções de
                    largura máxima, permitindo que você escolha a mais adequada
                    para cada situação. Experimente alterar a classe para ver
                    como o texto se adapta. Este exemplo serve para ilustrar a
                    importância do controle de largura em componentes de
                    interface.
                </div>
            </div>

            <div>
                <div>Height options</div>
                <div className="flex items-end">
                    <div className="bg-purple-500 text-white w-20"> Hello</div>
                    <div className="bg-purple-500 text-white w-20"> Hello</div>
                    <div className="bg-purple-500 text-white w-20"> Hello</div>
                    <div className="bg-purple-500 text-white w-20"> Hello</div>
                    <div className="bg-purple-500 text-white w-20"> Hello</div>
                    <div className="bg-purple-500 text-white w-20"> Hello</div>
                </div>
            </div>
            <div>
                <div>Full screen</div>
                <div className="bg-blue-900 text-white h-screen"> Hello</div>
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
