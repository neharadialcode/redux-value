import Axios from "axios";

export async function axiosRequest(method, url, data = null) {
  try {
    let response = await Axios({
      method: method,
      // url: `https://dummyjson.com${url}`,
      data: data,
    });
    console.log(data, "dfgh");
    return await response.data;
  } catch (error) {
    return error;
  }
}
