import Head from "next/head";
import Header from "../components/Header";
import type { GetServerSideProps } from "next";
import Response from "../response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }: any) {
  console.log(results);

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* search results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  // after SSR, pass results to client
  return {
    props: {
      results: data,
    },
  };
};
