import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer"
import Last from "./Last";
const Layout = props => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
      />
       <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      />
    </Head>
    <Navbar />
    {props.children}
    <Footer/>
    <Last/>
  </div>
);
export default Layout;