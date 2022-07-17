// NextJS & React imports
import type { NextPage } from "next";
import { FaFacebookMessenger } from "react-icons/fa";
import SocialBtn from "../Components/Form/SocialBtn";
import SubmitBtn from "../Components/Form/SubmitBtn";
import TextField from "../Components/Form/TextField";

// Third Party imports

// Domestic imports
import Layout from "../Components/Layout/Layout";
import SEO from "../Components/Misc/SEO";

/** Home page */
const Home: NextPage = () => {
  return (
    <Layout isLoggedIn={false}>
      <SEO title="Indipix" description="" keywords="" />
      <TextField type="name" name="name" placeholder="Username or Email">Name</TextField>
      <FaFacebookMessenger /> <SocialBtn label="SignUp with Facebook">Signup</SocialBtn>
      <SubmitBtn value="Submit">Submit</SubmitBtn>
    </Layout>
  );
};

export default Home;
