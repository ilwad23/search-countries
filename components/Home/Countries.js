import React from "react";
import Link from "next/link";
import { useStateValue } from "../../states/StateProvider";
import CountriesStyles from "../../styles/components/home/Countries.module.scss";

function Countries() {
  const { countries } = useStateValue()[0];
  return (
    <section className={CountriesStyles.countries}>
      {countries.map((country) => (
        <React.Fragment key={country.countryName}>
          {Card(
            country.flag,
            country.countryName,
            country.population,
            country.region,
            country.capital
          )}
        </React.Fragment>
      ))}
    </section>
  );
}

function Card(
  flag,
  countryName = "Country Name",
  population = "Unknown",
  region = "Unknown",
  capital = "Unknown"
) {
  return (
    <Link href={`details/${countryName}`}>
      <div className={CountriesStyles.card}>
        <div className={CountriesStyles.card__img}>
          {flag && <img src={flag} alt="flag" />}
        </div>
        <div className={CountriesStyles.card__content}>
          <h2 className={CountriesStyles.card__title}>{countryName}</h2>
          <div className={CountriesStyles.card__info}>
            <h4 className={CountriesStyles.card__subtitle}>
              Population:
              <span className={CountriesStyles.card__para}>
                {population.toLocaleString("en")}
              </span>
            </h4>
          </div>
          <div className={CountriesStyles.card__info}>
            <h4 className={CountriesStyles.card__subtitle}>
              Region:
              <span className={CountriesStyles.card__para}>{region}</span>
            </h4>
          </div>
          <div className={CountriesStyles.card__info}>
            <h4 className={CountriesStyles.card__subtitle}>
              Capital:
              <span className={CountriesStyles.card__para}>{capital}</span>
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Countries;
