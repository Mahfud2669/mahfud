import { ArrowRightIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div style={{ backgroundColor: "rgb(10,97,96)" }} className="flex h-24 items-center px-6 md:px-12">
          {/* Logo */}
          <Image
            src="/logo/logo.png"
            width={150}
            height={100}
            className="hidden md:block"
            alt="Banner UIA"
          />

          {/* Menu Header */}
          <div className="ml-auto flex items-center gap-4">
            {/* Tombol Login */}
            <Link
              href="/login"
              className="flex items-center gap-2 text-white text-sm md:text-base font-medium transition hover:text-gray-300"
            >
              <LockClosedIcon className="w-5 h-5" />
              Login
            </Link>
          </div>
        </div>
        <div style={{ backgroundColor: "rgb(165,207,76)", height: "6px" }}></div>
      </div>

      {/* Wrapper untuk tengah halaman */}
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center text-center px-6 py-10 md:w-3/5 md:px-20">
          <Image
            src="/logo/console.png"
            width={500}
            height={400}
            alt="Body Image"
          />
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Selamat Datang!</strong> Di Toko Top Up Game Terpercaya
          </p>
        </div>
      </div>
    </main>
  );
}
