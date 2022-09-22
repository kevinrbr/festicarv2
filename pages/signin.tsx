import React, { useState } from "react";

import { useRouter } from "next/router";
import supabase from "../utils/supabase";
import Link from "next/link";
import { NextPage } from "next";

const SignIn: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-primary-300">
      <div className="max-w-lg w-full">
        <Link href="/">
          <a className="text-white absolute top-8 left-12">
            Retourner sur Festicar
          </a>
        </Link>
        <h1 className="text-3xl font-semibold text-center text-white">
          Sign in to your account
        </h1>

        <div className="flex flex-col p-6">
          <form className="flex flex-col" onSubmit={handleSignIn}>
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
              Se connecter
            </button>
          </form>
          <Link href="/signup">
            <a className="text-white text-center text-sm">
              Je n'ai pas de compte
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
