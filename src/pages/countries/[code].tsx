import { GetStaticPaths, GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import React from "react";
import { Layout } from "@layout";
import { slugAsStringUndefined } from "@utils";
import { ICountryOverview } from "../../modules/tasksCountries/sharedInterfaces/1-taks-interface";
import { getStaticPathsForCountries } from "../../modules/tasksCountries/fe/1presentation/6-bonus-task-nextjs-ssr-ssg";
import { countryDataFromApi } from "../../modules/tasksCountries/fe/3dataAccess/countryData";

interface IPageProps {
  country: ICountryOverview;
}

export const CountryDetailPage = ({ country }: IPageProps) => {
  const t = useTranslations("Country");

  return (
    <Layout title={t("title") + " " + country.name}>
      <p className="text-[22px] w-[400px] bg-[#b4b4b4]">Code: {country.code}</p>
      <br />
      <p className="text-[22px] w-[400px] bg-[#b4b4b4]"> name:{country.name}</p>
      {/*Languages: {country.languages?.map((l, key) => (<span key={key}>{l.name}, </span>))}*/}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getStaticPathsForCountries(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const code: string | undefined = slugAsStringUndefined(params?.code);

  const country = await countryDataFromApi(code);

  return {
    props: {
      country: country[0],
      messages: require(`localize/${locale}.json`),
    },
  };
};

export default CountryDetailPage;
