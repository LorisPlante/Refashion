"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect();
  });

  const redirect = () => {
    window.location.href = "/recherche";
  };

  return <></>;
}
