import { useForm, SubmitHandler } from "react-hook-form";
import { ICarPoolFormType } from "../../types/addJouney/CarPoolFormType";
import { AutocompleteInput } from "../Combobox";

export const AddCarPoolForm = () => {
  const { register, handleSubmit } = useForm<ICarPoolFormType>();
  const onSubmit: SubmitHandler<ICarPoolFormType> = async (data) => {};
  return (
    <div className="mt-8">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4">
          <label className="font-heading font-semibold text-xl mt-8 mb-2">
            Choix du festival
          </label>
          {/* <input
            {...register("festival")}
            className="rounded-md py-4 pl-5 text-xs shadow-input"
            type="text"
          /> */}
        </div>
        <AutocompleteInput />
      </form>
    </div>
  );
};
