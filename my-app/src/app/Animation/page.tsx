import Link from "next/link";

export default function Animationpage() {
    return (
        <main className="bg-white min-h-screen">
            <h1 className="text-black text-4xl font-extrabold">Animation</h1>
            <h2 className="text-2xl text-black font-extrabold flex justify-center">
                spin svg
            </h2>
            <div className="flex justify-center">
                <script src="https://cdn.tailwindcss.com"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                      // whats hapend: configure tailwind via script string to avoid TSX parsing issues
                      tailwind.config = {
                        theme: {
                          extend: {
                            animation: {
                              'spin-slow': 'spin 3s linear infinite', // spin → nome da animação predefinida do Tailwind (rota 360°)
                              '3s': 'spin 3s linear infinite', // duração de uma volta completa (ou seja, velocidade)
                              'linear': 'spin 3s linear infinite', // tipo de easing (velocidade constante)
                              'infinite': 'spin 3s linear infinite', // repete para sempre
                            },
                          },
                        },
                      };
                    `,
                    }}
                ></script>
                <svg
                    className="animate-spin-slow"
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="100" cy="100" r="30" fill="blue" />

                    <g>
                        <circle cx="160" cy="100" r="10" fill="red" />
                        <circle cx="100" cy="40" r="10" fill="green" />
                        <circle cx="40" cy="100" r="10" fill="orange" />
                        <circle cx="100" cy="160" r="10" fill="purple" />
                    </g>
                </svg>
            </div>
            <h2 className="text-2xl text-black font-extrabold flex justify-center">
                ping svg
            </h2>
            <div className="flex justify-center">
                <svg
                    className="animate-ping"
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="100" cy="100" r="30" fill="blue" />

                    <g>
                        <circle cx="160" cy="100" r="10" fill="red" />
                        <circle cx="100" cy="40" r="10" fill="green" />
                        <circle cx="40" cy="100" r="10" fill="orange" />
                        <circle cx="100" cy="160" r="10" fill="purple" />
                    </g>
                </svg>
            </div>
            <h2 className="text-2xl text-black font-extrabold flex justify-center">
                pulse svg
            </h2>
            <div className="flex justify-center">
                <svg
                    className="animate-pulse"
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="100" cy="100" r="30" fill="blue" />

                    <g>
                        <circle cx="160" cy="100" r="10" fill="red" />
                        <circle cx="100" cy="40" r="10" fill="green" />
                        <circle cx="40" cy="100" r="10" fill="orange" />
                        <circle cx="100" cy="160" r="10" fill="purple" />
                    </g>
                </svg>
            </div>
            <h2 className="text-2xl text-black font-extrabold flex justify-center">
                bounce svg
            </h2>
            <div className="flex justify-center">
                <svg
                    className="animate-bounce"
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="100" cy="100" r="30" fill="blue" />

                    <g>
                        <circle cx="160" cy="100" r="10" fill="red" />
                        <circle cx="100" cy="40" r="10" fill="green" />
                        <circle cx="40" cy="100" r="10" fill="orange" />
                        <circle cx="100" cy="160" r="10" fill="purple" />
                    </g>
                </svg>
            </div>

            <div className="mt-4 flex justify-center">
                <Link
                    href="/"
                    className="mt-4 w-70 inline-block p-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                    Click Me to return to Home Page
                </Link>
            </div>
        </main>
    );
}
