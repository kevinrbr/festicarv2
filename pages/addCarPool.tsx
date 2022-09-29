import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BigCta } from "../components/BigCta";
import { AddCarPoolForm } from "../components/Form/AddCarPoolForm";
import { getFestival } from "../lib/api/festival/getFestival";
import { wayType } from "../types/addJouney/wayType";

interface addCarPoolProps {
  type: wayType;
}

const AddCarPool: NextPage<addCarPoolProps> = () => {
  const [wayType, setWayType] = useState<wayType>();
  const festival = getFestival();
  console.log(getFestival);
  return (
    <div className="md:max-w-2xl md:mx-auto">
      <Head>
        <title>Ajouter un trajet</title>
      </Head>
      <div className="md:flex md:justify-between mt-20">
        <div>
          <BigCta
            title={"Je vais en festival"}
            subTitle={"Allons danser"}
            onButtonType={() => setWayType("go")}
          />
        </div>
        <div>
          <BigCta
            title={"Je rentre de festival"}
            subTitle={"La fête est finie"}
            onButtonType={() => setWayType("return")}
          />
        </div>
      </div>
      <AddCarPoolForm />
    </div>
  );
};

export default AddCarPool;
