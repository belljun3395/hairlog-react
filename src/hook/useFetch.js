import { useEffect, useState } from "react";

export function UseGetFetch(uri, headers = {}) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!uri) return;
    fetch(uri, { method: "GET", headers: headers })
      .then((data) => data.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);
  return {
    loading,
    data,
    error,
  };
}

export function UsePostFetch(uri, headers = {}, body = {}) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!uri) return;
    fetch(uri, { method: "POST", headers: headers, body: JSON.stringify(body) })
      .then((data) => data.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);
  return {
    loading,
    data,
    error,
  };
}
