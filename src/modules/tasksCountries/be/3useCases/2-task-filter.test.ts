import filterCountries from "./2-task-filter";
import { countryAdopter } from "../2adopters/CountryAdopter";
import { getAllCountries } from "../4dataAccess/getAllCountries";

describe("Test filterCountries", () => {
  it("Testing by search term", () => {
    const countriesList = countryAdopter(getAllCountries());

    const searchTermName = "Andorra";
    const searchTermCode = "AD";
    const searchTermEmpty = " ";

    const filteredCountriesByName = filterCountries(countriesList, searchTermName);
    expect(filteredCountriesByName[0].name).toBe(searchTermName);

    const filteredCountriesByCode = filterCountries(countriesList, searchTermCode);
    expect(filteredCountriesByCode[0].code).toBe(searchTermCode);

    const filteredCountriesByEmpty = filterCountries(countriesList, searchTermEmpty);
    expect(filteredCountriesByEmpty.length).toBe(countriesList.length);
  });
});
