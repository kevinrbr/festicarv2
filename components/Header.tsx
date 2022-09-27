import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import placeholder from "./../assets/images/profile_placeholder.png";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="sticky bg-white w-full top-0">
      <div className="p-5 max-w-7xl mx-auto flex items-center justify-between sticky bg-white w-full top-0">
        <Link href="/">
          <a>
            <h1 className="font-heading font-bold text-3xl">FestiCar</h1>
          </a>
        </Link>
        <div className="flex items-start">
          {router.pathname != "/ajouter-trajet" && (
            <Link href="/ajouter-trajet">
              <a>
                <button className="mr-6 font-regular">Ajouter un trajet</button>
              </a>
            </Link>
          )}
          <Link href="/signin">
            <a>
              <Image width={24} height={24} src={placeholder} />@{" "}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
