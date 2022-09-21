import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="p-5 max-w-7xl mx-auto flex items-center justify-between">
      <Link href="/">
        <a>
          <h1 className="font-heading font-bold text-3xl">FestiCar</h1>
        </a>
      </Link>
      <div className="flex items-center">
        {router.pathname != "/ajouter-trajet" && (
          <Link href="/ajouter-trajet">
            <a>
              <button className="mr-6 font-regular">Ajouter un trajet</button>
            </a>
          </Link>
        )}
        {/* Profile Image here */}
      </div>
    </header>
  );
};
