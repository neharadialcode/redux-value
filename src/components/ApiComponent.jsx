import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminAllUserList } from "./action/ApiAction";
import { getAdminAllJobList } from "./reducer/dataValues";

const ApiComponent = () => {
  const dispatch = useDispatch();
  const adminAllJobList = useSelector((state) => state);
  const arr = adminAllJobList.getAdminAllJobList.data;

  useEffect(() => {
    dispatch(getAdminAllUserList());
  }, []);
  return (
    <div>
      <div>
        <p>{arr.title}</p>
        <p>{arr.category}</p>
        <div>
          {arr.images.map((obj, i) => (
            <img src={obj} alt="img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiComponent;
