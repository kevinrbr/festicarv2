import React, { useState } from "react";

import { useRouter } from "next/router";
import supabase from "../utils/supabase";
import { NextPage } from "next";
import Link from "next/link";

import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

const SignUp: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/signin");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-primary-300">
      <div className="max-w-lg w-full">
        <Link href="/">
          <a className="text-white absolute top-8 left-12 flex items-center">
            <ArrowLongLeftIcon width={30} />
            <p className="ml-5">Retourner sur Festicar</p>
          </a>
        </Link>
        <h1 className="text-3xl font-semibold text-center text-white">
          Create new account
        </h1>

        <form className="mt-2 flex flex-col p-6" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-gray-200">
            Email
          </label>
          <input
            className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="mt-6 text-gray-200">
            Password
          </label>
          <input
            className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="mt-10 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
            type="submit"
          >
            Sign up
          </button>
          <Link href="/signin">
            <a className="text-white text-center text-sm">
              J'ai déjà un compte
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
