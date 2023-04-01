import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { secondPostCallActionList } from "../actions/SecondPostAction";

const LoginForm = () => {
  const dispatch = useDispatch();

  const defaultState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    country: "",
  };
  const [formValue, setValue] = useState(defaultState);
  const [error, setError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setError(true);
    if (
      formValue.firstName &&
      formValue.lastName &&
      formValue.email &&
      formValue.password &&
      formValue.phone
    ) {
      console.log(formValue);
      alert("Form submitted successfully!😊");
      setValue(defaultState);
      setError(false);
      dispatch(secondPostCallActionList(formValue));
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="container w-100">
        <div className="row justify-content-center">
          <div className="col-6">
            <form
              action=""
              className="w-100 form_input"
              onSubmit={(e) => submitHandler(e)}
            >
              <div>
                <input
                  onChange={(e) =>
                    setValue({ ...formValue, firstName: e.target.value })
                  }
                  className="w-100"
                  type="text"
                  value={formValue.firstName}
                  placeholder="Firts Name"
                />
                {error && formValue.firstName === "" && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setValue({ ...formValue, lastName: e.target.value })
                  }
                  className="w-100"
                  type="text"
                  value={formValue.lastName}
                  placeholder="Last Name"
                />
                {error && formValue.lastName === "" && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setValue({ ...formValue, email: e.target.value })
                  }
                  value={formValue.email}
                  className="w-100"
                  type="email"
                  placeholder="Email"
                />
                {error && formValue.email === "" && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setValue({ ...formValue, password: e.target.value })
                  }
                  value={formValue.password}
                  className="w-100"
                  type="text"
                  placeholder="Password"
                />
                {error && formValue.password === "" && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setValue({ ...formValue, phone: e.target.value })
                  }
                  value={formValue.phone}
                  className="w-100"
                  type="number"
                  placeholder="Phone"
                />
                {error && formValue.phone === "" && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setValue({ ...formValue, city: e.target.value })
                  }
                  value={formValue.city}
                  className="w-100"
                  type="text"
                  placeholder="City"
                />
                {error && formValue.city === "" && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setValue({ ...formValue, country: e.target.value })
                  }
                  className="w-100"
                  value={formValue.country}
                  type="text"
                  placeholder="Country"
                />
                {error && formValue.country === "" && (
                  <p className="text-danger">This field is required</p>
                )}
              </div>
              <div className="text-center">
                <button>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
