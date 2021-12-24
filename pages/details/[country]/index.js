import { useRouter } from "next/router";
import { useStateValue } from "../../../states/StateProvider";
import DetailsStyles from "../../../styles/components/Details.module.scss";
import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";
const Details = ({ country }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    languages,
    currencies,
    borders,
  } = country[0];
  const strLanguages = languages.map((language) => language.name).join(", ");
  const strCurrencies = currencies.map((currency) => currency.name).join(", ");
  return (
    <div className={DetailsStyles["details"]}>
      <Link href="/">
        <div className={DetailsStyles["details__backBtn"]}>
          <div className={DetailsStyles["details__backIcon"]}>
            <ArrowNarrowLeftIcon />
          </div>
          Back
        </div>
      </Link>
      <div className={DetailsStyles["details__main"]}>
        <div className={DetailsStyles["details__img"]}>
          <img src={flag} alt="flag" />
        </div>
        <div className={DetailsStyles["details__content"]}>
          <h2 className={DetailsStyles["details__title"]}>
            {name || "Country Name"}
          </h2>
          <div className={DetailsStyles["details__separator"]}>
            <div className={DetailsStyles["details__info"]}>
              {[
                { subtitle: "Native Name", para: `${nativeName}` },
                {
                  subtitle: "Population",
                  para: `${population.toLocaleString("en")}`,
                },
                { subtitle: "Region", para: `${region}` },
                { subtitle: "Sub Region", para: `${subregion}` },
                { subtitle: "Capital", para: `${capital}` },
              ].map((v, i) => (
                <div key={i} className={DetailsStyles["details__text"]}>
                  <h4 className={DetailsStyles["details__subtitle"]}>
                    {v.subtitle}:
                    <span className={DetailsStyles["details__para"]}>
                      {v.para}
                    </span>
                  </h4>
                </div>
              ))}
            </div>
            <div className={DetailsStyles["details__info"]}>
              {[
                { subtitle: "Top Level Domain", para: `${topLevelDomain}` },
                { subtitle: "Currencies", para: `${strCurrencies}` },
                { subtitle: "Languages", para: `${strLanguages}` },
              ].map((v, i) => (
                <div key={i} className={DetailsStyles["details__text"]}>
                  <h4 className={DetailsStyles["details__subtitle"]}>
                    {v.subtitle}:
                    <span className={DetailsStyles["details__para"]}>
                      {v.para}
                    </span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
          {borders && (
            <div className={DetailsStyles["details__borders"]}>
              <h3 className={DetailsStyles["details__borderText"]}>
                Border Countries
              </h3>
              <div className={DetailsStyles["details__borderBtns"]}>
                {borders.map((v, i) => (
                  <div key={i} className={DetailsStyles["details__borderBtn"]}>
                    {v}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.com/v2/name/${params.country
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()}`
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
      country: countryName,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
