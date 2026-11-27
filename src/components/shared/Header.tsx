import { Car, Phone, UserRound } from "lucide-react";
import Link from "next/link";

const phoneNumber = "+8801580-566697";
const telHref = "tel:+8801580-566697";

const Header = () => {
  return (
    <header className="w-full bg-[#142A5E] text-white">
      <div className="mx-auto flex h-[54px] max-w-[1300px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Car wash home"
          className="flex shrink-0 items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC61B]"
        >
          <span className="relative grid size-10 place-items-center rounded-full bg-[#273B7A] sm:size-[50px]">
            <span className="absolute inset-[3px] rounded-full bg-[#121149]" />
            <Car
              className="relative size-5 text-[#FFC61B] sm:size-6"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          <p className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-[#E6E8EF] sm:text-xs lg:text-sm">
            <span className="hidden sm:inline">Call us now:</span>
            <Link
              href={telHref}
              className="font-semibold whitespace-nowrap text-white transition-colors hover:text-[#FFC61B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC61B]"
            >
              {phoneNumber}
            </Link>
          </p>

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href={telHref}
              aria-label="Call us"
              className="grid size-7 place-items-center rounded-full text-white transition-colors hover:text-[#FFC61B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC61B] sm:size-8"
            >
              <Phone className="size-[17px] sm:size-5" strokeWidth={1.8} aria-hidden="true" />
            </Link>
            <Link
              href="#"
              aria-label="Account"
              className="grid size-7 place-items-center rounded-full text-white transition-colors hover:text-[#FFC61B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC61B] sm:size-8"
            >
              <UserRound className="size-[17px] sm:size-5" strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
