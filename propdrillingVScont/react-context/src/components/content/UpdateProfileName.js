import { useUpdateUserName } from "../context/UserContext";
import { useUpdateDrink } from "../context/UserContext";
import { useUserName } from "../context/UserContext";
import { useDrink } from "../context/UserContext";
import { useState } from "react";

const UpdateProfileName = () => {
  const updateUserName = useUpdateUserName();
  const updateDrink = useUpdateDrink();
  const userName = useUserName();
  const drink = useDrink();
  // console.log("userName " + userName);
  // const [newUserName, setNewUserName] = useState(userName);
  // const [newDrink, setNewDrink] = useState(drink);

  // const onUpdateUserName = e => {
  //   e.preventDefault();
  //   updateUserName(newUserName);
  // };
  // const onUpdateDrink = e => {
  //   e.preventDefault();
  //   updateDrink(newDrink);
  // };
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Coffee House Profile</h1>
          <p className="col-lg-10 fs-4">Please update your name</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                value={userName}
              />
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                value={drink}

              />
              <label for="floatingInput">Name</label>
            </div>
            <button
              onClick={useUpdateUserName}
              className="w-100 btn btn-lg btn-primary"
              type="submit"
            >
              Update
            </button>
            <button
              onClick={setDrink}
              className="w-100 btn btn-lg btn-primary"
              type="submit"
            >
              Update Drink
            </button>
            <hr className="my-4" />
            <small className="text-muted">Thank you</small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileName;
