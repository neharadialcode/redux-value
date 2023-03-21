import { LoginApi } from "../Api";

export const GET_ADMIN_ALL_USER_LIST = "GET_ADMIN_ALL_USER_LIST";

export const incFunction = () => {
  return {
    type: "INCREAMENT",
  };
};
export const decFunction = () => {
  return {
    type: "DECREAMENT",
  };
};
export const getAdminAllJobListAction = (data) => ({
  type: GET_ADMIN_ALL_USER_LIST,
  data,
});
export const getAdminAllUserList = () => async (dispatch) => {
  try {
    const response = await LoginApi();
    dispatch(getAdminAllJobListAction(response));
    // console.log("responseresponse", response);
  } catch (error) {}
};
