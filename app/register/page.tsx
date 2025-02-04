'use client'; //pengunaan useactionstate harus mencantumkan ini

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '../lib/actions'; //autentikasi

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registrasi Berhasil! Silakan login.');
                router.push('/login'); // Redirect ke halaman login
            } else {
                setErrorMessage(data.message);
            }
        } catch (error) {
            setErrorMessage('Terjadi kesalahan, coba lagi nanti.');
        }
    };

    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex flex-col justify-center gap-6 bg-gray-50 px-6 py-10 md:w-2/5 md:px-20 m-auto">
                <form onSubmit={handleSubmit} className="space-y-3">
                    <strong className="text-gray-800 mb-3 text-2xl">DAFTAR</strong>
                    <div>
                        <label className="block text-xs font-medium text-gray-900" htmlFor="email">
                            Masukan Alamat Email
                        </label>
                        <div className="relative">
                            <input
                                className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <AtSymbolIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"></AtSymbolIcon>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-900" htmlFor="password">
                            Kata Sandi
                        </label>
                        <div className="relative">
                            <input
                                className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                            />
                            <KeyIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"></KeyIcon>
                        </div>
                    </div>

                    <Button type="submit" className="mt-4 w-full">Daftar</Button>

                    {errorMessage && (
                        <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
                    )}
                </form>
            </div>
        </main>
    );
}