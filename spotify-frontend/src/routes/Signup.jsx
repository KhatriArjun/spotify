import { Icon } from "@iconify/react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Input from "../component/shared/Input";
import Password from "../component/shared/Password";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";
const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const SignUpReq = async () => {
    const data = { email, username, password, firstName, lastName };
    if (email !== confirmEmail) {
      alert("Email doesnot match");
      return;
    }

    const response = await makeUnauthenticatedPOSTRequest(
      "/auth/register",
      data
    );
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });

      alert("success");
      navigate("/");
    } else {
      alert("failed");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="logo p-4 border-b border-solid  border-gray-300 w-full flex justify-center ">
        <Icon icon="logos:spotify" width="150" />
      </div>
      <div className="input_field w-1/3 py-10 flex flex-col items-center justify-center">
        <div className="font-bold mb-4 text-2xl">
          Sign up for free to start listening.
        </div>

        <Input
          label="Email address "
          placeholder="Enter your Email address "
          value={email}
          setValue={setEmail}
        />
        <Input
          label="Confirm Email address "
          placeholder="Enter your Email again"
          value={confirmEmail}
          setValue={setConfirmEmail}
        />
        <Input
          label="Username"
          placeholder="Enter your Username"
          value={username}
          setValue={setUsername}
        />
        <Password
          label="Create a Password"
          Placeholder="Enter a Strong Password"
          value={password}
          setValue={setPassword}
        />
        <div className="w-full flex justify-between items-center space-x-8">
          <Input
            label="First Name "
            placeholder="Enter your first name"
            value={firstName}
            setValue={setFirstName}
          />
          <Input
            label="Last Name "
            placeholder="Enter your last name"
            value={lastName}
            setValue={setLastName}
          />
        </div>

        <div className=" w-full flex  items-center justify-center my-8">
          <button
            className="bg-green-400 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              SignUpReq();
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="border border-solid  border-gray-300 w-full"></div>
        <div className="my-5 text-lg font-bold">Already have an account?</div>
        <div className=" w-full flex items-center justify-center   border border-gray-500 text-gray-500 font-bold rounded-full p-2">
          <Link to="/login">LOGIN INSTEAD</Link>
        </div>
      </div>
    </div>
  );
};
export default SignupComponent;
