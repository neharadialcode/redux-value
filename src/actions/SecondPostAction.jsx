import { SecondPostApi } from "../apis/SecondPostApi";

export const POST_LIST_SIGNUP = "POST_LIST_SIGNUP";

export const secondPostCallActionList = (data) => async (dispatch) => {
  try {
    const response = await SecondPostApi(data);
    console.log(response, "response");
    dispatch(postSecondCallAction(response));
  } catch (error) {}
};

export function postSecondCallAction(data) {
  console.log(data, "response ............");

  return {
    type: POST_LIST_SIGNUP,
    data: data,
  };
}
