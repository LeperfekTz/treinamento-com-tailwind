import Link from "next/link";

export default function DarkModepage() {
    return (
        <main className="bg-white min-h-screen">
            <h1 className="text-2xl font-extrabold">Dark mode teste</h1>
            <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-2xl px-6 py-8 shadow xl">
                <h2 className="text-slate-900 dark:text-white font-medium tracking-tight">
                    testsdadasdadsdsadetestsdadasdadsdsadetestsdadasdadsdsadetestsdadasdadsdsade
                </h2>
                <p className="text-slate-600 dark:text-slate-500 mt-2 text-sm">
                    testsdadasdadsdsadetestsdadasdadsdsadetestsdadasdadsdsadetestsdadasdadsdsadetestsdadasdadsdsade
                </p>
            </div>
            <div className="mt-4 flex justify-center">
                <Link
                    href="/"
                    className="mt-4 w-70 inline-block p-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                >
                    Click Me to return to Home Page
                </Link>
            </div>
        </main>
    );
}
