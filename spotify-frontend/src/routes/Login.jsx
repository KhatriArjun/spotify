import { Icon } from "@iconify/react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Input from "../component/shared/Input";
import Password from "../component/shared/Password";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelper";
const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const loginReq = async () => {
    const data = { email, password };

    const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
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
        <div className="font-bold mb-4">To continue, log in to Spotify.</div>

        <Input
          label="Email address or Username"
          placeholder="Email address or Username"
          className="my - 6 "
          value={email}
          setValue={setEmail}
        />

        <Password
          label="Password"
          Placeholder="Password"
          value={password}
          setValue={setPassword}
        />

        <div className=" w-full flex  items-center justify-end my-8">
          <button
            className="bg-green-400 font-semibold p-3 px-10 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              loginReq();
            }}
          >
            LOG IN
          </button>
        </div>
        <div className="border border-solid  border-gray-300 w-full"></div>
        <div className="my-6 text-lg font-bold">Don't have an account?</div>
        <div className=" w-full flex items-center justify-center   border border-gray-500 text-gray-500 font-bold rounded-full p-2">
          <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
        </div>
      </div>
    </div>
  );
};
export default LoginComponent;
