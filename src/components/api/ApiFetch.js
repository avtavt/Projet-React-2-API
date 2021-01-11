import React, { useEffect, useState } from "react";

export default function ApiFetch({ setData, url }) {
  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }, []);

  return <></>;
}
