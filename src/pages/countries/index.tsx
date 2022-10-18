import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { Layout } from "@layout";
import { ICountryOverview } from "../../modules/tasksCountries/sharedInterfaces/1-taks-interface";
import { CountryList } from "../../modules/tasksCountries/fe/1presentation/5-task-responsive-design";
import { useFilterContext } from "../../context/FilterContext";
import { countryDataFromApi } from "../../modules/tasksCountries/fe/3dataAccess/countryData";

interface IPageProps {
  countries: ICountryOverview[];
}

export const CountriesPage = ({ countries }: IPageProps) => {
  const t = useTranslations("CountriesOverview");
  const { search } = useFilterContext();

  return (
    <Layout title={t("title")}>
      <CountryList countriesList={countries} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      countries: await countryDataFromApi(),
      messages: require(`localize/${locale}.json`),
    },
  };
};

export default CountriesPage;
