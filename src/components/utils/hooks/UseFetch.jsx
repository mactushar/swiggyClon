import React, { useEffect, useState } from "react";
import axios from "axios";

export const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(url);
      setData(res?.data);
    } catch (e) {
      setError(e);
      console.log(e);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {data,isLoading,error}
};
