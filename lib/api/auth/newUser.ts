import supabase from "../supabase";
import { IFormInput } from "../../../types/login/FormInput";

export const newUser = async (data: IFormInput) => {
  const { user, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  });
  if (error) return Promise.reject(error);
  console.log(user);
  return user;
};
