import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import swal from "sweetalert";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

const AddUserPage = () => {
  const { addUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      surname: surname,
      email: email,
      gender: gender,
      birthDate: birthDate,
      maritalStatus: maritalStatus,
      password: password,
    };
    if (
      name !== "" &&
      surname !== "" &&
      email !== "" &&
      gender !== "" &&
      birthDate !== "" &&
      maritalStatus !== "" &&
      password !== ""
    ) {
      addUser(newUser);
      setName("");
      setSurname("");
      setEmail("");
      setGender("");
      setBirthDate("");
      setMaritalStatus("");
      setPassword("");
      handleClose();
    } else {
      swal("Please enter all of information!");
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <Button className="add-new-user-button" onClick={handleShow}>
        Add a New User
      </Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12">
            <form
              onSubmit={handleSubmit}
              className="border border-1 p-3 rounded mt-5"
            >
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Surname
                </label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="Surname"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  E-Mail Address
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="E-Mail Address"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Gender
                </label>
                <br />
                <label>Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="radio"
                />
                <label>Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="radio"
                />
                <label>
                  Other
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={gender === "Other"}
                    onChange={(e) => setGender(e.target.value)}
                    className="radio"
                  />
                </label>
                {/* <p>Selected Gender: {gender}</p> */}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Birth Date
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Birth Date"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Marital Status
                </label>
                <br />
                <label>Single</label>
                <input
                  type="radio"
                  name="marital status"
                  value="Single"
                  checked={maritalStatus === "Single"}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="radio"
                />
                <label>Married</label>
                <input
                  type="radio"
                  name="marital status"
                  value="Married"
                  checked={maritalStatus === "Married"}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="radio"
                />
                <label>Divorced</label>
                <input
                  type="radio"
                  name="marital status"
                  value="Divorced"
                  checked={maritalStatus === "Divorced"}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="radio"
                />
                <label>Widowed</label>
                <input
                  type="radio"
                  name="marital status"
                  value="Widowed"
                  checked={maritalStatus === "Widowed"}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="radio"
                />
                <label>N/A</label>
                <input
                  type="radio"
                  name="marital status"
                  value="N/A"
                  checked={maritalStatus === "N/A"}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="radio"
                />
                {/* <p>Selected Marital Status: {maritalStatus}</p> */}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Password"
                />
              </div>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  data-testid="add-button"
                  type="submit"
                  variant="primary"
                  onClick={handleSubmit}
                >
                  Add User
                </Button>
              </Modal.Footer>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export { AddUserPage };
