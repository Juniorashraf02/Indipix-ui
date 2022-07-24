// NextJS & React imports
import type { NextPage } from "next";
import { useState } from "react";

// Third Party imports
import axios from "axios";
import { Formik, Field, Form } from "formik";

// Domestic imports
import SEO from "../../Components/Misc/SEO";
import Layout from "../../Components/Layout/Layout";
import Banner from "../../Components/Banner";
import Link from "next/link";
import { FaArrowCircleLeft, FaChevronRight } from "react-icons/fa";
import CONFIG from "../../CONFIG";
import Image from "next/image";
import SocialBtn from "./../../Components/Form/SocialBtn";
import PrivacyCheckbox from './../../Components/Form/PrivacyCheckbox';

/** Register page */
const Register: NextPage = () => {
  return (
    <>
      <SEO title="Login in to Indipix" description="" keywords="" />
      <div className="h-screen flex">
        <div className="w-1/2 overflow-hidden relative">
          <span className="absolute top-0 left-0">
            <FaArrowCircleLeft />
          </span>
          <Image
            height={1080}
            width={1080}
            src="https://source.unsplash.com/random/1000x1000"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="py-4 px-6 bg-white w-3/4 rounded-lg">
            <h2 className="text-2xl text-center font-semibold">Sign Up</h2>
            <div className="my-4">
              <SocialBtn
                gtext="Sign up with google"
                ftext="Sign up with facebook"
              />
              <hr className="my-5" />
              <p className="-mt-9 text-center">
                <span className="bg-white px-4 text-sm">
                  or Sign up with Email
                </span>
              </p>
            </div>
            <Formik
              initialValues={{
                identifier: "",
                password: "",
              }}
              onSubmit={async (values) => {
                const { data } = await axios.post(
                  `${CONFIG.API_URL}/auth/local`,
                  {
                    identifier: values.identifier,
                    password: values.password,
                  }
                );

                localStorage.setItem("token", data.jwt);
              }}
            >
              <Form>
                <div className="flex w-full gap-5 h-16">
                  <div className="my-5">
                    <Field
                      type="text"
                      className="focus:outline-none border rounded p-2 text-sm w-full"
                      id="fullName"
                      name="fullName"
                      placeholder="fullname"
                    />
                  </div>
                  <div className="my-5">
                    <Field
                      type="text"
                      className="focus:outline-none border rounded p-2 text-sm w-full"
                      id="userName"
                      name="userName"
                      placeholder="username"
                    />
                  </div>
                </div>
                <div className="my-5">
                  <Field
                    type="text"
                    className="focus:outline-none border rounded p-2 text-sm w-full"
                    id="identifier"
                    name="identifier"
                    placeholder="Username or email address"
                  />
                </div>

                <div className="my-5">
                  <Field
                    type="password"
                    className="focus:outline-none border rounded p-2 text-sm w-full"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>

               <PrivacyCheckbox/>

                <button
                  type="submit"
                  className="flex items-center justify-center text-white bg-red-700 w-full mt-5 py-3 hover:bg-black rounded-sm select-none"
                >
                  <span className="mr-2">Continue </span>
                  <FaChevronRight />
                </button>
              </Form>
            </Formik>

            <div className="text-xs text-center mt-5">
              Already have an account?{" "}
              <Link href="/">
                <span className="text-red-700 cursor-pointer ml-1">
                  Sign in
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
