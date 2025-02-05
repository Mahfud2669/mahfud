import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { signOut } from '@/auth';

export default function HomeSideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          {/*<AcmeLogo />*/}
          <img
            src="/logo/uia-logo.png"
            width={300}
            height={160}
            className="hidden md:block"
            alt="Banner UIA"
            />
        </div>
      </Link>
    </div>
  );
}
