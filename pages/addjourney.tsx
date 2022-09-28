import type { NextPage } from "next";
import Head from "next/head";
import { BigCta } from "../components/BigCta";
import { getFestival } from "./../lib/api/festival/getFestival";

const addJourney: NextPage = () => {
  getFestival();
  return (
    <div className="md:max-w-2xl md:mx-auto">
      <Head>
        <title>Ajouter un trajet</title>
      </Head>
      <div className="md:flex md:justify-between mt-20">
        <div>
          <BigCta title={"Je vais en festival"} subTitle={"Allons danser"} />
        </div>
        <div>
          <BigCta
            title={"Je rentre de festival"}
            subTitle={"La fête est finie"}
          />
        </div>
      </div>
    </div>
  );
};

export default addJourney;
