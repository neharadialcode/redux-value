import { axiosRequest } from "./Helper";

export const LoginApi = async () => {
  return await axiosRequest("GET", `/product/1`);
};
