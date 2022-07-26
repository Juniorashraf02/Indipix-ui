// NextJS & React imports
import type { NextPage } from "next";

// Third Party imports
import { parseCookies } from "nookies";

// Domestic imports
import Banner from "../Components/Banner";
import Gallery from "../Components/Gallery/Gallery";
import Layout from "../Components/Layout/Layout";
import SEO from "../Components/Misc/SEO";

/** Home page */
const Home: NextPage = () => {
  const cookies = parseCookies();
  console.log(cookies)
  return (
    <Layout isLoggedIn={cookies.jwt ? true : false}>
      <SEO title="Indipix" description="" keywords="" />
      <Banner />
      <Gallery />
    </Layout>
  );
};

export default Home;
