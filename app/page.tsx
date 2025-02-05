import { ArrowRightIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      {/*Container Header */}
      <div className="fixed top-0 left-0 w-full z-50 mb-10">
        <div style={{ backgroundColor: "rgb(10,97,96)" }} className="flex h-24 items-center px-6 md:px-12">
          {/* Logo */}
          <Image
            src="/logo/logo.png"
            width={150}
            height={100}
            className="hidden md:block"
            alt="Banner UIA"
          />

          <div className="ml-auto flex items-center gap-4">
            <Link
              href="/login"
              className="flex items-center gap-2 text-white text-sm md:text-base font-medium transition hover:text-gray-300">
              <LockClosedIcon className="w-5 h-5" />
              Login
            </Link>

            {/* Tombol Buat Account */}
            <Link
              href="/register"
              className="flex items-center gap-2 bg-white text-sm md:text-base font-medium text-gray-800 p-2 rounded-md transition hover:bg-gray-200">
              Buat Account
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
        <div style={{ backgroundColor: "rgb(165,207,76)", height: "6px" }}></div>
      </div>

      {/*Wrapper Tengah*/}
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center text-center px-6 py-10 md:w-3/5 md:px-20 mt-20">
          <Image
            src="/logo/console.png"
            width={300}
            height={200}
            alt="Body Image"
          />
          <p className="text-xl text-gray-800 md:text-3xl md:leading-normal mt-8">
            <strong>Selamat Datang Di Tarakh Store!</strong> 
          </p>
          <p className="text-10px text-gray-800 md:text-3xl md:leading-normal">
            Toko Top Up Game Terpercaya
          </p>

          {/*COntainer Game*/}
          <div className="mt-6 bg-gray-100 p-6 rounded-lg mt-8">
            <div className="grid grid-cols-5 gap-6 justify-center">
              {/* Gambar 1 */}
              <Link href="/home/mobilelegends">
                <Image
                  src="/game/ml.jpeg" // Ganti dengan path gambar home1
                  width={150}
                  height={150}
                  alt="Mobile Legends"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>
              {/* Gambar 2 */}
              <Link href="/home2">
                <Image
                  src="/game/PUBG.jpg" // Ganti dengan path gambar home2
                  width={150}
                  height={150}
                  alt="PUBG"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>
              {/* Gambar 3 */}
              <Link href="/home3">
                <Image
                  src="/game/FF.png" // Ganti dengan path gambar home3
                  width={150}
                  height={150}
                  alt="Free Fire"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>
              {/* Gambar 4 */}
              <Link href="/home4">
                <Image
                  src="/game/GI.jpg" // Ganti dengan path gambar home4
                  width={150}
                  height={150}
                  alt="Genshin Impact"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>

              {/* Gambar 5 */}
              <Link href="/home5">
                <Image
                  src="/game/valo.png" // Ganti dengan path gambar home5
                  width={150}
                  height={150}
                  alt="Valorant"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>
              {/* Gambar 6 */}
              <Link href="/home6">
                <Image
                  src="/game/FRT.png" // Ganti dengan path gambar home6
                  width={150}
                  height={150}
                  alt="Fortnite"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>
              {/* Gambar 7 */}
              <Link href="/home7">
                <Image
                  src="/game/COD.jpg" // Ganti dengan path gambar home7
                  width={150}
                  height={150}
                  alt="Call of Duty"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>
              {/* Gambar 8 */}
              <Link href="/home8">
                <Image
                  src="/game/ROE.jpg" // Ganti dengan path gambar home8
                  width={150}
                  height={150}
                  alt="Ring of Elysium"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>
              <Link href="/home9">
                <Image
                  src="/game/COC.jpg" // Ganti dengan path gambar home7
                  width={150}
                  height={150}
                  alt="Clash Of Clans"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>
              {/* Gambar 10 */}
              <Link href="/home10">
                <Image
                  src="/game/CR.png" // Ganti dengan path gambar home8
                  width={150}
                  height={150}
                  alt="Clash Royale"
                  className="cursor-pointer rounded-md transition-transform transform hover:scale-110"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
