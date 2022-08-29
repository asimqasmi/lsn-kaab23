import Head from "next/head";
import { ImetaProps } from "@src/server/types/index";

const Meta = ({ title, keywords, description }: ImetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Default Title",
  keywords: "2022, Kaab Bin Barsha",
  description: "Asim AlQasmi's Marks Register",
};

export default Meta;
