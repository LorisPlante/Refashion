"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Cta from "./Cta";
import Search from "./icons/Search";
import { usePathname } from "next/navigation";
import Formations from "./icons/Formations";
import Heart from "./icons/Heart";
import Profil from "./icons/Profil";

const navLinks = [
  { name: "Recherche", href: "/recherche" },
  { name: "Formations", href: "/formations" },
  { name: "Favoris", href: "/favoris" },
  { name: "Profil", href: "/profil" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const url = usePathname();

  return (
    <header className="bg-background text-foreground shadow-md fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden sm:flex items-center justify-between h-16">
        <Link href="/">
          <svg className="fill-foreground w-[148px] h-[40px]" viewBox="0 0 418 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.6805 42.9132C28.5233 42.0047 26.439 39.7271 27.6686 37.3245C28.3042 36.0822 29.5133 35.3718 30.6912 35.4235H30.717C35.5159 35.4235 38.6373 42.5161 38.6373 42.5161C36.1355 43.5353 33.2438 43.9949 30.6805 42.9186M54.1548 46.3189C54.1548 46.3189 55.4885 45.3684 56.1348 44.8508C62.2727 39.9261 65.5135 33.5645 65.5135 26.4515C65.5135 18.8154 63.2049 12.7046 58.6562 8.29133C51.9815 1.82979 43.1388 1.72626 41.6386 1.75215H0V77.5824H12.9328V13.8015H41.8932C42.3001 13.8015 47.1933 13.8845 50.3558 17.0082C51.4241 18.0631 52.221 19.4107 52.7374 21.0555C53.2377 22.6067 53.4879 24.3988 53.4879 26.4461C53.4879 27.0262 53.4407 27.584 53.3419 28.1168C52.9973 30.9585 51.6636 34.1544 47.9537 36.8917C48.0739 36.8024 43.9517 32.3945 43.535 32.0027C41.8416 30.415 39.9817 28.9736 37.9082 27.9187C31.1079 24.4559 22.1975 25.7562 18.8205 33.2459C16.7683 37.8056 16.7318 43.1328 20.1809 47.0186C24.4011 51.7666 31.0037 52.7376 37.0169 52.4716C37.5894 52.4449 43.2537 51.5934 43.1183 51.3846L59.7763 77.6922H74.0072L54.1441 46.3127L54.1548 46.3189Z" />
            <path d="M102.637 38.6384C100.272 36.5545 97.4217 35.5103 94.0812 35.5103C90.7416 35.5103 87.9486 36.5545 85.7122 38.6384C83.4774 40.7224 82.1331 43.506 81.6959 46.9795H106.467C106.279 43.506 105.003 40.7224 102.637 38.6384ZM93.8933 78.2484C86.2651 78.2484 80.0595 75.7673 75.2705 70.8113C70.4823 65.8545 68.0856 59.3002 68.0856 51.1474C68.0856 42.9946 70.4983 36.4759 75.3176 31.5771C80.1378 26.6837 86.3799 24.2338 94.0394 24.2338C101.699 24.2338 107.984 26.6203 112.902 31.3888C117.815 36.1636 120.275 42.5243 120.275 50.4834C120.275 52.3174 120.15 54.0194 119.895 55.6026H81.7004C82.0138 59.0119 83.2745 61.7607 85.4842 63.8438C87.6878 65.9277 90.4959 66.9719 93.8987 66.9719C98.4999 66.9719 101.903 65.0763 104.112 61.2841H118.483C116.971 66.2776 114.038 70.3517 109.692 73.5111C105.341 76.6705 100.078 78.2484 93.904 78.2484" />
            <path d="M168.084 78.026H119.787V91H168.084V78.026Z" />
            <path d="M198.371 33.8317H188.662V77.75H174.449V33.8317H168.143V22.3269H174.449V19.5258C174.449 12.7229 176.384 7.72086 180.254 4.51953C184.124 1.31819 189.963 -0.18243 197.77 0.0176547V11.8226C194.367 11.7559 191.998 12.3228 190.664 13.5233C189.329 14.7238 188.662 16.8913 188.662 20.026V22.3269H198.371V33.8317Z" />
            <path d="M221.465 30.9305C223.266 27.996 225.602 25.695 228.471 24.0277C231.407 22.3603 234.744 21.5266 238.48 21.5266V36.2327H234.777C230.373 36.2327 227.036 37.2665 224.768 39.334C222.566 41.4016 221.465 45.0031 221.465 50.1385V77.75H207.452V22.3269H221.465V30.9305Z" />
            <path d="M299.466 48.838C299.466 50.8388 299.332 52.6396 299.065 54.2402H258.528C258.862 58.2419 260.263 61.3765 262.732 63.6442C265.201 65.9118 268.237 67.0456 271.841 67.0456C277.045 67.0456 280.749 64.8113 282.951 60.3428H298.065C296.463 65.6783 293.394 70.0802 288.856 73.5483C284.319 76.9497 278.747 78.6504 272.141 78.6504C266.803 78.6504 261.998 77.4833 257.728 75.1489C253.524 72.7479 250.221 69.3799 247.819 65.0447C245.483 60.7096 244.315 55.7075 244.315 50.0385C244.315 44.3028 245.483 39.2673 247.819 34.9322C250.154 30.5971 253.424 27.2623 257.627 24.928C261.831 22.5937 266.669 21.4266 272.141 21.4266C277.412 21.4266 282.117 22.5604 286.254 24.828C290.458 27.0956 293.694 30.3303 295.963 34.532C298.298 38.6671 299.466 43.4357 299.466 48.838ZM284.953 44.8363C284.886 41.2348 283.585 38.367 281.049 36.2327C278.513 34.0318 275.41 32.9314 271.74 32.9314C268.271 32.9314 265.335 33.9985 262.932 36.1327C260.597 38.2002 259.162 41.1014 258.628 44.8363H284.953Z" />
            <path d="M330.913 78.6504C326.376 78.6504 322.305 77.8501 318.702 76.2494C315.099 74.582 312.23 72.3478 310.094 69.5466C308.026 66.7454 306.891 63.6442 306.691 60.2427H320.804C321.071 62.377 322.105 64.1444 323.907 65.5449C325.775 66.9455 328.077 67.6458 330.813 67.6458C333.482 67.6458 335.551 67.1123 337.019 66.0452C338.554 64.978 339.321 63.6108 339.321 61.9434C339.321 60.1427 338.387 58.8088 336.518 57.9418C334.717 57.0081 331.814 56.0076 327.811 54.9405C323.673 53.9401 320.27 52.9063 317.601 51.8392C314.999 50.7721 312.73 49.1381 310.795 46.9372C308.927 44.7363 307.992 41.7684 307.992 38.0335C307.992 34.9655 308.86 32.1644 310.595 29.63C312.396 27.0956 314.932 25.0948 318.202 23.6275C321.538 22.1602 325.442 21.4266 329.912 21.4266C336.519 21.4266 341.79 23.0939 345.727 26.4287C349.664 29.6967 351.833 34.1319 352.233 39.7342H338.821C338.62 37.5333 337.686 35.7992 336.018 34.532C334.417 33.1981 332.248 32.5312 329.512 32.5312C326.976 32.5312 325.008 32.9981 323.607 33.9318C322.272 34.8655 321.605 36.166 321.605 37.8334C321.605 39.7008 322.539 41.1348 324.407 42.1352C326.276 43.0689 329.178 44.036 333.115 45.0364C337.119 46.0368 340.422 47.0706 343.024 48.1377C345.627 49.2048 347.862 50.8722 349.731 53.1398C351.666 55.3407 352.667 58.2753 352.733 61.9434C352.733 65.1448 351.833 68.0126 350.031 70.547C348.296 73.0814 345.76 75.0823 342.424 76.5495C339.154 77.9501 335.317 78.6504 330.913 78.6504Z" />
            <path d="M395.465 21.5266C399.669 21.5266 403.405 22.4603 406.675 24.3278C409.945 26.1285 412.48 28.8297 414.282 32.4312C416.15 35.966 417.084 40.2344 417.084 45.2365V77.75H403.072V47.1373C403.072 42.7354 401.971 39.3674 399.769 37.0331C397.567 34.6321 394.564 33.4316 390.76 33.4316C386.89 33.4316 383.821 34.6321 381.552 37.0331C379.35 39.3674 378.249 42.7354 378.249 47.1373V77.75H364.236V3.7192H378.249V29.2298C380.051 26.8288 382.453 24.9614 385.456 23.6275C388.458 22.2269 391.795 21.5266 395.465 21.5266Z" />
          </svg>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Cta key={link.name} link={link.href} bg="bg-none" text="text-foreground" weight="font-normal">
              {link.name}
            </Cta>
          ))}
        </nav>

        <button className="hidden sm:block md:hidden p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background text-foreground shadow-md">
          <nav className="flex flex-col items-start p-2 gap-2">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-orange px-4 py-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* NAV MOBILE EN BAS DU TRUC */}
      <nav className="block sm:hidden fixed bottom-0 left-0 w-full p-3">
        <div className="w-full h-[86px] bg-vistawhite rounded-full flex justify-between items-center relative px-4">
          <Link href={navLinks[0].href} className="flex flex-col items-center text-[10px] text-black z-20">
            {url.includes(navLinks[0].href) ? (
              <div className="size-[58px] bg-orange rounded-full flex justify-center items-center">
                <Search size={32} fill_text="fill-white"></Search>
              </div>
            ) : (
              <div className="size-[58px] flex justify-center items-center">
                <Search size={32} fill_text="fill-black"></Search>
              </div>
            )}
          </Link>
          <Link href={navLinks[1].href} className="flex flex-col items-center text-[10px] text-black z-20">
            {url === navLinks[1].href ? (
              <div className="size-[58px] bg-orange rounded-full flex justify-center items-center">
                <Formations size={32} fill_text="fill-white"></Formations>
              </div>
            ) : (
              <div className="size-[58px] flex justify-center items-center">
                <Formations size={32} fill_text="fill-black"></Formations>
              </div>
            )}
          </Link>
          <Link href={navLinks[2].href} className="flex flex-col items-center text-[10px] text-black z-20">
            {url === navLinks[2].href ? (
              <div className="size-[58px] bg-orange rounded-full flex justify-center items-center">
                <Heart size={32} fill_text="fill-white"></Heart>
              </div>
            ) : (
              <div className="size-[58px] flex justify-center items-center">
                <Heart size={32} fill_text="fill-black"></Heart>
              </div>
            )}
          </Link>
          <Link href={navLinks[3].href} className="flex flex-col items-center text-[10px] text-black z-20">
            {url === navLinks[3].href ? (
              <div className="size-[58px] bg-orange rounded-full flex justify-center items-center">
                <Profil size={32} fill_text="fill-white"></Profil>
              </div>
            ) : (
              <div className="size-[58px] flex justify-center items-center">
                <Profil size={32} fill_text="fill-black"></Profil>
              </div>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
