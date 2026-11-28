import type { ReactNode } from "react";
import Link from "next/link";
import { Car, Clock3, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Showroom-grade finish",
    description: "Every wash leaves your car spotless, inside and out.",
  },
  {
    icon: Clock3,
    title: "Book in seconds",
    description: "Pick a time that works for you and we handle the rest.",
  },
  {
    icon: ShieldCheck,
    title: "Care you can trust",
    description: "Gentle products and trained specialists for every vehicle.",
  },
];

const AuthLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid min-h-screen bg-[#FEFEFF] lg:grid-cols-[minmax(0,1fr)_minmax(440px,520px)]">
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#142A5E] px-12 py-12 text-white lg:flex">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 size-80 rounded-full bg-[#273B7A]/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -left-20 size-96 rounded-full bg-[#FFC000]/10 blur-3xl"
        />

        <div className="relative">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative grid size-11 place-items-center rounded-full bg-[#273B7A]">
              <span className="absolute inset-[3px] rounded-full bg-[#121149]" />
              <Car
                className="relative size-6 text-[#FFC61B]"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Shine<span className="text-[#FFC61B]">Wash</span>
            </span>
          </Link>
        </div>

        <div className="relative max-w-lg">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
            A cleaner drive starts <span className="text-[#FFC61B]">here.</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Join thousands of drivers who trust us to keep their cars looking
            their best, every single day.
          </p>

          <div className="mt-10 space-y-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <Icon
                    className="size-5 text-[#FFC61B]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-white/60">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-xs text-white/40">
          © 2026 ShineWash. All rights reserved.
        </p>
      </aside>

      <main className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10">
        <div className="w-full max-w-[420px]">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 lg:hidden">
            <span className="relative grid size-9 place-items-center rounded-full bg-[#273B7A]">
              <span className="absolute inset-[3px] rounded-full bg-[#121149]" />
              <Car
                className="relative size-5 text-[#FFC61B]"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </span>
            <span className="text-base font-semibold tracking-tight text-[#142A5E]">
              Shine<span className="text-[#C99A00]">Wash</span>
            </span>
          </Link>

          {children}
        </div>
      </main>
    </div>
  );
};

export default AuthLayoutPage;
