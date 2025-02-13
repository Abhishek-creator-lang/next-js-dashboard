import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import clsx from "clsx";
import { inter } from "@/app/ui/fonts";
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black">
        hey
      </div> */}
      {/* <div className={clsx(styles.shape,{''})}>test</div> */}
      <p className={`${inter.className}`}>test</p>
      <strong className={`${inter.className}`}>test</strong>
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image src="/hero-mobile.png" width={560} height={620} className="md:hidden" alt="Screenshots of the dashboard project showing mobile version" />
    </main>
  );
}
