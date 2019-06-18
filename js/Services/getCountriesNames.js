import countryData from "js/Resources/countries.json";

import _ from "lodash";

export const getCountriesNames = () => {
  const coutries = _.sortBy(_.uniqBy(countryData, "name"), item => {
    return parseInt(item.name);
  });
  return _.map(coutries, item => {
    return { value: item.iso2, label: `${item.name}` };
  });
};
