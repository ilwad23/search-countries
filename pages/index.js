import { useEffect } from "react";
import Tools from "../components/Home/Tools";
import { useStateValue } from "../states/StateProvider";
import Countries from "../components/Home/Countries";

export default function Home({ countries }) {
  (countries.forEach(v=>console.log(v)));
  const [{ filterValue, inputValue }, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({ type: "setCountriesHome", countries: countries });
  }, [countries, dispatch, filterValue, inputValue]);
  return (
    <div className="home">
      <Tools />
      <Countries />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();

  return {
    props: { countries },
  };
};
