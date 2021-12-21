import { useRouter } from "next/router";
import { useStateValue } from "../../../states/StateProvider";

const Details = ({country}) => {

  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

export default Details;

export const getServerSideProps = async ({params}) => {
  const res = await fetch(`https://restcountries.com/v2/name/${params.country.toLowerCase()}`);
  const country = await res.json();
  return {
    props: { country },
  };
};