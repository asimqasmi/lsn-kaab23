import IndexPageFooter from "@comp/layout/indexPage/IndexPageFooter";
import IndexPageMain from "@comp/layout/indexPage/IndexPageMain";
import Meta from "@comp/Meta";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Meta title="main" />
      <h1>Test</h1>
      <IndexPageMain />
      <IndexPageFooter />
    </div>
  );
};

export default Home;
