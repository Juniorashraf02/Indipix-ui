// NextJS & React imports
import type { NextPage } from "next";
import Image from "next/image";

// Third Party imports
import axios from "axios";
import { Form, Formik } from "formik";
import { setCookie } from 'nookies';

// Domestic imports
import Link from "next/link";
import { FaArrowCircleLeft, FaChevronRight, FaFacebook, FaGoogle } from "react-icons/fa";
import Button from "../../Components/Form/Button";
import Input from "../../Components/Form/Input";
import SEO from "../../Components/Misc/SEO";
import CONFIG from "../../CONFIG";

/** Login page */
const Login: NextPage = () => {

  return (
    <>
      <SEO title="Login in to Indipix" description="" keywords="" />
      <div className="h-screen flex">
        <div className="w-1/2 overflow-hidden relative">
          <span className="absolute top-0 left-0">
            <FaArrowCircleLeft />
          </span>
          <Image alt="login image" height={1080} width={1080} src="https://source.unsplash.com/random/1000x1000" />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="py-4 px-6 bg-white w-8/12 rounded-lg">
            <h2 className="text-5xl text-center font-semibold my-5">Sign In</h2>
            <div className="lg:flex justify-between gap-3 mb-10">
              <Button type="button" style="Normal" label="Sign In with Google" icon={<FaGoogle className="text-red-600" />} className="w-full" />
              <Button type="button" style="Normal" label="Sign in with Facebook" icon={<FaFacebook className="text-blue-600" />} className="w-full" />
            </div>
            <div className="my-4">
              <hr className="my-5" />
              <p className="-mt-9 text-center">
                <span className="bg-white px-4 text-sm">
                  or Sign in with Email
                </span>
              </p>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values) => {
                console.log(values)
                await axios.post(
                  `${CONFIG.API_URL}/auth/login`,
                  // {
                  //   email: values.email,
                  //   password: values.password,
                  // }
                )
                .then(result=>console.log(result))
                // setCookie(undefined, "jwt", data.jwt);
              }}
            >
              <Form>
                <div className="my-5">
                  <Input usingFormik={true} name="email" id="identifier" type="text" placeholder="Username or email address" className="focus:outline-none border rounded p-2 text-sm w-full" />
                </div>

                <div className="my-5">
                  <Input usingFormik={true} id="password" name="password" type="password" placeholder="Password" className="focus:outline-none border rounded p-2 text-sm w-full" />
                </div>

                <p className="text-xs text-center text-red text-red-700">
                  <Link href="/">Forgot Password</Link>
                </p>

                <button type="submit" className="flex items-center justify-center text-white bg-red-700 w-full mt-5 py-3 hover:bg-black rounded-sm select-none">
                  <span className="mr-2">Continue </span>
                  <FaChevronRight />
                </button>
              </Form>
            </Formik>

            <div className="text-xs text-center mt-5">
              Don&apos;t have an account?{" "}
              <Link href="/">
                <span className="text-red-700 cursor-pointer ml-1">
                  Sign up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
