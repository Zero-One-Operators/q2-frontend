"use client";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [data, setData] = useState({});

  // Fetch data from FastAPI
  const getData = async () => {
    const host = process.env.NEXT_PUBLIC_FASTAPI_HOST;
    if (!host) {
      console.error("FASTAPI_HOST is not defined!");
      return;
    }

    try {
      const response = await fetch(`${host}`); 
      const data = await response.json(); 
      setData(data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };f

  useEffect(() => {
    getData(); 
  }, []);

  return (
    <>
      <h1>Test Page</h1>
      <button onClick={getData}>Test</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
