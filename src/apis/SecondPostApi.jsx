import { axiosRequest } from "../Helper";

export const SecondPostApi = async (data) => {
  return await axiosRequest(
    "POST",
    `https://learn-backend-node.onrender.com/api/v1/signup`,
    data
  );
};
