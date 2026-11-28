"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const inputClass =
  "h-11 w-full rounded-xl border border-[#D1D5DB] bg-white px-3.5 text-sm outline-none transition focus:border-[#FFC000] focus:ring-2 focus:ring-[#FFC000]/30";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = {
      email: formData.get("email"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on",
    };

    // TODO: add your auth functionality here.
    console.log(values);
  };

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-3xl font-semibold text-[#142A5E]">Sign in</h1>
      <p className="mt-2 text-sm text-[#6B7280]">
        Welcome back. Please enter your details.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs font-medium text-[#142A5E] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              autoComplete="current-password"
              placeholder="••••••••"
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

        <label className="flex items-center gap-2 text-sm text-[#4B5563]">
          <input
            type="checkbox"
            name="remember"
            className="size-4 accent-[#FFC000]"
          />
          Remember me
        </label>

        <button
          type="submit"
          className="h-11 w-full rounded-xl bg-[#FFC000] text-sm font-semibold text-white transition hover:bg-[#E5B000]"
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#6B7280]">
        New here?{" "}
        <Link
          href="/sign-up"
          className="font-semibold text-[#142A5E] hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
