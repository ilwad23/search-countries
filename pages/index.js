import Tools from "../components/Tools";

export default function Home({ countries }) {
  return (
    <div className="home">
      <Tools/>
    </div>
  );
}

// export const getStaticProps = async () => {
  // const res = await fetch("https://restcountries.com/v2/all");
  // const countries = await res.json();
  // console.log(countries[0]);
  // return {
  //   props: { countries },
  // };
// };
