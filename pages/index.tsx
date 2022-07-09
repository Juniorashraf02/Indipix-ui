// NextJS & React imports
import type { NextPage } from "next";

// Third Party imports

// Domestic imports
import SEO from "../Components/SEO";
import SignUp from "../Components/SignUp";

/** Home page */
const Home: NextPage = () => {
  return (
    <div>
      <SEO title="Indipix" description="" keywords="" />
      <SignUp />
    </div>
  );
};

export default Home;
