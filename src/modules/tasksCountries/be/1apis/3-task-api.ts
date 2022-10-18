/*
  Task:
  1. Please provide an api that excepts a field "searchTerm" and exposes the countries matched in 2-tasks-filter.ts -> function: filterCountries()

  You can test your api on http://localhost:3000/api/countries
 */

import { apiResponse, ApiResponseStatus, HttpMethods, IResult, methodsNotAllowedResponse } from "@utils";
import { NextApiRequest, NextApiResponse } from "next";
import { ICountryOverview } from "../../sharedInterfaces/1-taks-interface";
import { countryAdopter } from "../2adopters/CountryAdopter";
import filterCountries from "../3useCases/2-task-filter";
import { countryRecords } from "../5dataSources/sampleData";

export const countriesApi = async (
  req: NextApiRequest,
  res: NextApiResponse<IResult<ICountryOverview[]>>
) => {
  const {
    method,
    body: { searchTerm = "" },
  } = req;

  const countries = filterCountries(countryAdopter(countryRecords), searchTerm);

  switch (method) {
    case "POST": {
      return apiResponse(res, ApiResponseStatus.OK, countries, []);
    }

    case "GET": {
      return apiResponse(res, ApiResponseStatus.OK, countries, []);
    }

    default:
      return methodsNotAllowedResponse(res, [HttpMethods.POST], method);
  }
};
