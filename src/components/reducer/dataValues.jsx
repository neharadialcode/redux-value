import { GET_ADMIN_ALL_USER_LIST } from "../action/ApiAction";
const initialState = {
  data: {},
};

export const ADMIN_ALL_JOBS_LIST = "ADMIN_ALL_JOBS_LIST";
const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_ALL_USER_LIST:
      console.log(action, "11111111");
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
export default changeNumber;
