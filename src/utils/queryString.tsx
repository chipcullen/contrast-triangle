import qs from "query-string";

// taken from
// https://medium.com/swlh/using-react-hooks-to-sync-your-component-state-with-the-url-query-string-81ccdfcb174f

// https://codesandbox.io/embed/boring-butterfly-pvmi9?fontsize=14

const setQueryStringWithoutPageReload = (qsValue:string) => {
  const newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    qsValue;
  window.history.pushState({ path: newurl }, "", newurl);
};

export const getQueryStringValue = (
  key:string,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  return values[key];
};

export const setQueryStringValue = (
  key:string,
  value:string,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  const newQsValue = qs.stringify({
    ...values,
    [key]: value
  });
  setQueryStringWithoutPageReload(`?${newQsValue}`);
};
