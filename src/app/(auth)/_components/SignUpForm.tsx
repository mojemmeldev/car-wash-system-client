"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const inputClass =
  "h-11 w-full rounded-xl border border-[#D1D5DB] bg-white px-3.5 text-sm outline-none transition focus:border-[#FFC000] focus:ring-2 focus:ring-[#FFC000]/30";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // TODO: add your auth functionality here.
    console.log(values);
  };

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-3xl font-semibold text-[#142A5E]">Create account</h1>
      <p className="mt-2 text-sm text-[#6B7280]">
        Fill in the details to get started.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+880 1700 000000"
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              autoComplete="new-password"
              placeholder="At least 8 characters"
              className={`${inputClass} pr-11`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 grid w-11 place-items-center text-[#6B7280] transition hover:text-[#142A5E]"
            >
              {showPassword ? (
                <EyeOff className="size-4" aria-hidden="true" />
              ) : (
                <Eye className="size-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="h-11 w-full rounded-xl bg-[#FFC000] text-sm font-semibold text-white transition hover:bg-[#E5B000]"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#6B7280]">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-semibold text-[#142A5E] hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
