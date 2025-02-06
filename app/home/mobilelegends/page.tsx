"use client";

import { useState } from "react";
import { ArrowRightIcon, LockClosedIcon, Bars3Icon, XMarkIcon, PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [quantity, setQuantity] = useState<number>(1);

    const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10));
    const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

    return (
        <main className="flex flex-col items-center min-h-screen bg-[rgb(232,246,244)]">
            {/* 🔹 Header */}
            <header className="fixed top-0 left-0 w-full z-50">
                <div className="flex items-center justify-between px-6 md:px-12 py-4 bg-[rgb(10,97,96)]">
                    <Image src="/logo/logo.png" width={150} height={100} className="w-24 md:w-40 lg:w-48 h-auto transition-all duration-300" alt="logo" />
                    <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
                        <Bars3Icon className="w-7 h-7" />
                    </button>
                    <nav className="hidden md:flex items-center gap-2">
                        <Link href="/login" className="flex items-center gap-2 text-white text-sm md:text-base font-medium transition hover:text-gray-300">
                            <LockClosedIcon className="w-5 h-5" />
                            Login
                        </Link>
                        <Link href="/register" className="flex items-center gap-2 bg-white text-sm md:text-base font-medium text-gray-800 p-2 rounded-md transition hover:bg-gray-200">
                            Buat Account
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </Link>
                    </nav>
                </div>
                <div className="h-1 bg-[rgb(165,207,76)]"></div>
            </header>

            {/* 🔹 Sidebar */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>
            )}
            <aside className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50 flex flex-col`}> 
                <div className="bg-[rgb(10,97,96)] flex items-center justify-center mx-2 mt-2 p-6 rounded-md">
                    <Image src="/logo/logo.png" width={120} height={80} alt="Sidebar Logo" />
                </div>
                <button className="absolute top-4 right-4 text-gray-800" onClick={() => setMenuOpen(false)}>
                    <XMarkIcon className="w-7 h-7" />
                </button>
                <div className="mt-auto flex flex-col items-center gap-2 pb-10">
                    <Link href="/register" className="w-4/5 text-center py-2 bg-[rgb(10,97,96)] text-white rounded-md">
                        Buat Account
                    </Link>
                    <Link href="/login" className="w-4/5 text-center py-2 text-gray-800 bg-gray-300 rounded-md">
                        Login
                    </Link>
                </div>
            </aside>

            {/* 🔹 Banner */}
            <section className="relative w-full h-[50vh] md:h-[65vh] bg-[url('/banner/mlbanner.jpg')] bg-cover bg-center bg-no-repeat mt-[70px] md:mt-[85px] flex flex-col justify-end items-start pt-10 px-6 md:px-10 bg-black bg-opacity-70 text-left">
                <Image src="/game/ml.png" width={150} height={150} className="w-28 md:w-40 h-auto mb-2 rounded-md mt-4 md:mt-6 transition-all duration-300" alt="ML Icon" />
                <h1 className="text-2xl md:text-5xl font-bold text-white">MOBILE LEGENDS: BANG BANG</h1>
                <p className="text-sm md:text-lg text-gray-300 mb-6">MOONTON</p>
            </section>

            {/* 🔹 Content */}
            <section className="flex flex-col md:flex-row justify-center py-6 w-full gap-8 px-4">
            <div className="bg-white shadow-lg rounded-lg w-full md:max-w-xs">
                <div className="bg-[rgb(10,97,96)] text-white text-center py-3 rounded-t-lg">
                    <h2 className="text-md font-semibold">Catatan</h2>
                </div>
                <div className="p-6">
                    <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                        <li>Pastikan ID dan Server sudah benar sebelum membeli.</li>
                        <li>Diamonds akan masuk dalam 1-5 menit setelah pembayaran.</li>
                        <li>Jika terjadi kendala, hubungi CS melalui live chat.</li>
                        <li>Harga dapat berubah sewaktu-waktu tanpa pemberitahuan.</li>
                    </ul>
                </div>
            </div>

                <div className="bg-white shadow-lg rounded-lg w-full md:max-w-2xl">
                    <div className="bg-[rgb(10,97,96)] text-white text-center py-3 rounded-t-lg">
                        <h2 className="text-md font-semibold">Pilih Diamond</h2>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                            {[...Array(9)].map((_, index) => (
                                <div key={index} className="bg-gray-100 shadow-sm rounded-md p-3 text-center">
                                    <h3 className="text-xs font-semibold text-gray-700">
                                        {`${100 * (index + 1)} + ${(index + 1) * 10}`} Diamonds
                                    </h3>
                                    <p className="text-[11px] text-gray-500">
                                        ({(index + 1) * 110} Diamonds)
                                    </p>
                                    <p className="text-[10px] text-gray-700 font-medium">
                                        Rp. {(index + 1) * 30000}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full px-4 mb-6">
                <div className="hidden md:block bg-transparent rounded-lg p-6 w-full md:max-w-xs"></div>
                <div className="bg-white shadow-lg rounded-lg w-full md:max-w-2xl">
                    {/* Header dengan background rgb(10,97,96) */}
                    <div className="bg-[rgb(10,97,96)] text-white text-center py-3 rounded-t-lg">
                        <h2 className="text-ms font-semibold">Masukkan Nama Anda</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-4">
                            <input 
                                type="text" 
                                className="w-full p-2 border border-gray-300 rounded-md text-md"
                                placeholder="Masukan Nama" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/*container jumlah*/}
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 w-full px-4 mb-6">
                <div className="hidden md:block bg-transparent rounded-lg p-6 w-full md:max-w-xs"></div>
                <div className="bg-white shadow-lg rounded-lg w-full md:max-w-2xl">
                    <div className="bg-[rgb(10,97,96)] text-white text-center py-3 rounded-t-lg">
                        <h2 className="text-ms font-semibold">Jumlah Pembelian</h2>
                    </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4">
                                <input
                                    type="text"
                                    className="w-full text-start p-2 border border-gray-300 rounded-md text-md"
                                    value={quantity}
                                    readOnly
                                />
                            <button onClick={increaseQuantity} className="p-2 bg-gray-200 rounded-md">
                                <PlusCircleIcon className="w-5 h-5 text-gray-800" />
                            </button>
                            <button onClick={decreaseQuantity} className="p-2 bg-gray-200 rounded-md">
                                <MinusCircleIcon className="w-5 h-5 text-gray-800" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}