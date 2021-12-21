export const initialState = {
  toggle: true,
  inputValue: "",
  filterValue: "",
  countries: [],
  origCountries: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setCountriesHome":
      let filteredCountries = action.countries;
      if (state.filterValue) {
        filteredCountries = filteredCountries.filter(
          (country) => country.region == state.filterValue
        );
      }
      filteredCountries = filteredCountries.filter((country) =>
        country.name.toLowerCase().startsWith(state.inputValue.toLowerCase())
      );
      const counties = filteredCountries
        .filter((v, i) => i < 12)
        .map((v) => ({
          flag: v.flag,
          countryName: v.name,
          population: v.population,
          region: v.region,
          capital: v.capital,
        }));
      return {
        ...state,
        countries: counties,
        origCountries: action.countries,
      };
    case "setFilterValue":
      return {
        ...state,
        filterValue: action.val,
      };
    case "setInputValue":
      return {
        ...state,
        inputValue: action.val,
      };
    case "toggle":
      return {
        ...state,
        toggle: !state.toggle,
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
