/*
 We now want to display the countries as tiles in a grid.
 Each tile should show the country name in all caps letters and the code below.
 When clicking anywhere on the tile it should link to the country detail page (url: http://localhost:3000/countries/AL with AL being the respective code).
 Please also apply nice looking spacing and borders. Feel free to also add a hover effect.
 E.g.
 |---------------------|   |---------------------|
 | ANDORA              |   | ARMENIA             |
 | code: AN            |   | code: AM            |
 |---------------------|   |---------------------|

 Please show one tile per row on small screens and two tiles per row on large screens.

 Task:
 1. write the code required to display the tiles in a grid as described above.
    Please name it CountryList (pages/countries/index.tsx shows how it should be called)

  You can view your results on http://localhost:3000/countries
*/

// import { config } from "@config";
// import { A } from "@styleGuide";
// import { ICountry } from "./2-interface";
// // config.routes.country(code) will give the correct path

import { config } from "@config";
import { A } from "@styleGuide";
import { ICountryOverview } from "../../sharedInterfaces/1-taks-interface";
import { useRouter } from "next/router";

interface ICountryList {
  countriesList: ICountryOverview[];
}

export const CountryList = ({ countriesList }: ICountryList) => {
  const router = useRouter();

  const showDetails = (code) => () => {
    router.push(`/countries/${code}`);
  };

  return (
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
      {countriesList.map((country) => (
        <div
          key={country.code}
          className="
          w-[100%] h-[100px]
           flex flex-col justify-center items-center
            shadow-lg bg-green-400 cursor-pointer  hover:text-white  hover:bg-[#5fffff] duration-500	"
          onClick={showDetails(country.code)}
        >
          <p>{country.name}</p>
          <p>{country.code}</p>
        </div>
      ))}
    </div>
  );
};
