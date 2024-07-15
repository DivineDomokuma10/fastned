"use client";
import { useRouter } from "next/navigation";
import { CSSProperties, useEffect } from "react";
import { clearTimeout } from "timers";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeOut = setTimeout(() => router.push("/login"), 300);
    localStorage.fastned = true;
    console.log(localStorage);

    () => clearTimeout(timeOut);
  }, [router]);
  return (
    <main style={styles}>
      <p>Redirecting...</p>
    </main>
  );
}

const styles: CSSProperties = {
  display: "flex",
  width: "100dvw",
  height: "100dvh",
  alignItems: "center",
  justifyContent: "center",
};
