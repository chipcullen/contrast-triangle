import { useState, useCallback } from "react";
import { getQueryStringValue, setQueryStringValue} from './queryString';

export const useQueryString = (key:string, initialValue:string) => {
  const [value, setValue] = useState(getQueryStringValue(key) || initialValue);

  const onSetValue = useCallback(
    newValue => {
      setValue(newValue);
      setQueryStringValue(key, newValue)
    },
    [key],
  );

  return [value, onSetValue]
}

