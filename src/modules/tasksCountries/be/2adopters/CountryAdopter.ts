export const countryAdopter = (countries) => {
  return countries.map((c) => ({ name: c.name, code: c.code }));
};
