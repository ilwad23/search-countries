import { useRouter } from "next/router";
import { useStateValue } from "../../../states/StateProvider";

const Details = ({ country }) => {
    return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

export default Details;

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.com/v2/name/${params.country.toLowerCase()}`
  );
  const country = await res.json();
  return {
    props: { country },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();
  const countriesNames = countries.map((country) => country.name);
  const paths = countriesNames.map((countryName) => ({
    params: {
      country: countryName
    }
  }));
  return {
     paths, fallback: false 
  };
};
