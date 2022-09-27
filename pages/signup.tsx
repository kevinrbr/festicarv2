import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { NextPage } from "next";
import Link from "next/link";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import { IFormInput } from "../types/login/FormInput";
import { newUser } from "../lib/api/auth/newUser";
import { updateUser } from "../lib/api/auth/updateUser";

const SignUp: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const user = await newUser(data);
    if (user) {
      updateUser(user.id, data);
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
          Créer un nouveau compte
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-2 flex flex-col p-6"
        >
          <div className="flex">
            <div className="w-1/2 mr-7">
              <label className="text-gray-200">Prenom</label>
              <input
                {...register("firstName")}
                className="py-2 px-4 rounded-md focus:outline-none focus:ring-2 w-full"
              />
            </div>
            <div className="w-1/2">
              <label className="text-gray-200">Nom</label>
              <input
                {...register("lastName")}
                className="py-2 px-4 rounded-md focus:outline-none focus:ring-2 w-full"
              />
            </div>
          </div>

          <label className="text-gray-200 mt-6">Email</label>
          <input
            {...register("email")}
            className="py-2 px-4 rounded-md focus:outline-none focus:ring-2 w-full"
          />

          <label className="text-gray-200 mt-6">Mot de passe</label>
          <input
            {...register("password")}
            className="py-2 px-4 rounded-md focus:outline-none focus:ring-2 w-full"
            type="password"
          />

          <button
            className="mt-10 text-lg text-white font-semibold bg-green-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2"
            type="submit"
          >
            Enregistrer
          </button>
          <Link href="/signin">
            <a className="text-white text-center text-sm cursor-pointer">
              J'ai déjà un compte
            </a>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
