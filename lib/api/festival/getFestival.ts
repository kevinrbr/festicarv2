import supabase from "../supabase";

export const getFestival = async () => {
  const { data, error } = await supabase.from("festivals").select();
  if (error) return Promise.reject(error);
  console.log(data);
  return data;
};
