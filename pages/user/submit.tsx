// NextJS & React imports
import React from "react";
import type { NextPage } from "next";

// Third Party imports
import axios from "axios";
import { Formik, Field, Form } from "formik";

// Domestic imports
import Layout from "../../Components/Layout/Layout";
import SEO from "../../Components/Misc/SEO";
import CONFIG from "../../CONFIG";
import Button from "../../Components/Form/Button";
import PrivacyCheckbox from "../../Components/Form/PrivacyCheckbox"

/** Home page */
const Submit: NextPage = () => {

  return (
    <Layout isLoggedIn={false}>
      <SEO title="Submit a new photo | Indipix" description="" keywords="" />
      <div className="grid m-28">
        <div>
          <Formik
            initialValues={{
              name: "",
              location: "",
              description: "",
              price: "",
              receive: "",
              tags: "",
              photo: "",
            }}
            onSubmit={async (values) => {
              const { data } = await axios.post(
                `${CONFIG.API_URL}/auth/local`,
                {
                  name: values.name,
                  location: values.location,
                  description: values.description,
                  price: values.price,
                  receive: values.receive,
                  tags: values.tags,
                  photo: values.photo,
                }
              );

              localStorage.setItem("token", data.jwt);
            }}
          >
            <Form className="flex gap-12 w-full">

              {/* left section */}
              <div className="w-1/2">
                <div>
                  <p className="font-semibold font-inter">Upload your images</p>
                  <p className="font-sm font-inter">
                    JPG & PNG files are allowed
                  </p>
                 
 
                </div>
              </div>


              {/* right section */}
              <div className="w-1/2">

                {/* input filed for name */}
                <div className="my-5 flex flex-col">
                  <p className="font-semibold">Name</p>
                  <Field
                    type="text"
                    className="focus:outline-none border rounded p-2 text-sm w-full"
                    id="name"
                    name="name"
                    placeholder="Nature"
                  />
                </div>


                {/* input field for location */}
                <div className="my-5 flex flex-col">
                  <p className="font-semibold">Location</p>
                  <div className="flex gap-8">
                    <Field
                      type="text"
                      className="focus:outline-none border rounded p-2 text-sm w-full cursor-not-allowed"
                      id="countryName"
                      name="countryName"
                      placeholder="India"
                      disabled
                    />
                    <Field
                      type="text"
                      className="focus:outline-none border rounded p-2 text-sm w-full"
                      id="location"
                      name="location"
                      placeholder="Bali"
                    />
                  </div>


                {/* input field for description */}
                  <div className="my-5 flex flex-col">
                    <p className="font-semibold">Description</p>
                    <Field
                      type="text"
                      className="focus:outline-none border rounded p-2 text-sm w-full"
                      id="description"
                      name="description"
                      placeholder="Maximum 200 words"
                    />
                  </div>


                {/* input field for price */}
                  <div className="flex gap-5">
                    <div className="my-5 flex flex-col">
                      <p className="font-semibold">Price</p>
                      <div className="flex">
                        <p className="focus:outline-none border border-r-0 rounded-l p-2 text-sm w-full">
                        ₹
                        </p>
                        <Field
                          type="text"
                          className="focus:outline-none border border-l-0 rounded-r p-2 text-sm w-full text-right"
                          id="price"
                          name="price"
                          placeholder="00.00"
                        />
                      </div>
                    </div>


                    {/* input field for receive payment */}
                    <div className="my-5 flex flex-col">
                      <p className="font-semibold">You will receive</p>
                      <div className="flex">
                      <Field
                          type="text"
                          className="focus:outline-none border border-r-0 rounded-l p-2 text-sm w-full"
                          id="rupee"
                          name="rupee"
                          placeholder="₹"
                          disabled
                        />
                        <Field
                          type="text"
                          className="focus:outline-none border border-l-0 rounded-r p-2 text-sm w-full text-right"
                          id="receive"
                          name="receive"
                          placeholder="00.00"
                          disabled
                        />
                      </div>
                    </div>
                  </div>

                  {/* input field for input tags */}
                  <div className="my-5 flex flex-col">
                    <p className="font-semibold">Additional Tags</p>
                    <Field
                      type="text"
                      className="focus:outline-none border rounded p-2 text-sm w-full"
                      id="tags"
                      name="tags"
                      placeholder="e.g. Nature"
                    />
                    <p className="font-sm text-gray-400">Maximum 5 tags</p>
                  </div>

                  <PrivacyCheckbox label="By submiting I agree to comply with the"/>
                  <Button style="Danger" Label="Submit" type="submit" className="w-1/3 mt-5"/>

                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default Submit;
