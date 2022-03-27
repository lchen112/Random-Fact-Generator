import { useEffect, useState, useRef } from "react";

export const useFetch = (url, trigger) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        // console.log(JSON.parse(y).text);
        if (isCurrent.current) {
          setState({ data: JSON.parse(y).text, loading: false });
        }
      });
  }, [url, setState, trigger]);

  return state;
};
