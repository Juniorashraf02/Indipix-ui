// NextJS & React imports
import type { NextPage } from "next";

// Third Party imports

// Domestic imports
import Banner from "../Components/Banner";
import Layout from "../Components/Layout/Layout";
import SEO from "../Components/Misc/SEO";

/** Home page */
const Home: NextPage = () => {
  return (
    <Layout isLoggedIn={false}>
      <SEO title="Indipix" description="" keywords="" />
      <Banner />
    </Layout>
  );
};

export default Home;
