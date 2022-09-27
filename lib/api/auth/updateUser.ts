import { IFormInput } from "../../../types/login/FormInput";
import supabase from "../supabase";

export const updateUser = async (userId: string, data: IFormInput) => {
  const updates = {
    user_id: userId,
    name: data.firstName,
  };

  const { error } = await supabase.from("profiles").upsert(updates, {
    returning: "minimal", // Don't return the value after inserting
  });

  if (error) return Promise.reject(error);
};
