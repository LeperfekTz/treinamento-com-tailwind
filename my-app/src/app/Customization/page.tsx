"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Breakpoints() {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <main className="bg-black min-h-screen p-4 sm:bg-red-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-green-500 2xl:bg-purple-500">
            <h1 className="text-white text-4xl">Width: {width}px</h1>
            <h2 className="sm:hidden text-white">MENOR QUE TELA SM</h2>
            <h2 className="md:hidden text-white">MENOR QUE TELA MD</h2>
            <h2 className="lg:hidden text-white">MENOR QUE TELA LG</h2>
            <h2 className="xl:hidden text-white">MENOR QUE TELA XL</h2>
            <h2 className="2xl:hidden text-white">MENOR QUE TELA 2XL</h2>
            <Link
                href="/"
                className="mt-4 p-2 rounded-xl bg-linear-to-r from-blue-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
                Click me to return to Home Page
            </Link>
        </main>
    );
}
