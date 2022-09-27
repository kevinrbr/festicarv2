import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import supabase from "../lib/api/supabase";
import Link from "next/link";
import { NextPage } from "next";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { IFormInput } from "../types/login/FormInput";

const SignIn: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
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
          <a className="text-white absolute top-8 left-12 flex items-center">
            <ArrowLongLeftIcon width={30} />
            <p className="ml-5">Retourner sur Festicar</p>
          </a>
        </Link>
        <h1 className="text-3xl font-semibold text-center text-white">
          Connectez-vous
        </h1>

        <div className="flex flex-col p-6">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" className="text-gray-200">
              Email
            </label>
            <input
              {...register("email")}
              className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
            />
            <label htmlFor="password" className="mt-6 text-gray-200">
              Mot de passe
            </label>
            <input
              {...register("password")}
              className="py-2 px-4 rounded-md focus:outline-none focus:ring-2"
              type="password"
            />

            <button
              className="mt-10 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
              type="submit"
            >
              S'enregister
            </button>
          </form>
          <Link href="/signup">
            <a className="text-white text-center text-sm cursor-pointer">
              Je n'ai pas de compte
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
