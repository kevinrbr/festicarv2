import { useForm, SubmitHandler } from "react-hook-form";
import { getCity } from "../../lib/api/city/getCity";
import { ICarPoolFormType } from "../../types/addJouney/CarPoolFormType";
import { AutocompleteInput } from "../Combobox";

type AddCarPoolFormProps = {
  wayType: string;
};

export const AddCarPoolForm = ({ wayType }: AddCarPoolFormProps) => {
  const { register, handleSubmit } = useForm<ICarPoolFormType>();
  const onSubmit: SubmitHandler<ICarPoolFormType> = async (data) => {};
  getCity();
  return (
    <div className="mt-8">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4">
          <label className="font-heading font-semibold text-xl mt-8 mb-4">
            Choix du festival
          </label>
          <AutocompleteInput />
        </div>
        <div className="flex flex-col mb-4">
          <label className="font-heading font-semibold text-xl mt-4 mb-4">
            {wayType === "go" ? "Point de départ" : "Destination"}
          </label>
          <input
            {...register("festival")}
            className="rounded-md py-4 pl-5 text-xs shadow-input"
            type="text"
          />
        </div>
        <div className="">
          <button
            className="bg-primary-300 text-white text-lg px-8 py-2 mt-4 rounded-md"
            type="submit"
          >
            Confirmer
          </button>
        </div>
      </form>
    </div>
  );
};
