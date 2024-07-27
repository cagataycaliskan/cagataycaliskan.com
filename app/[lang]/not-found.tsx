"use client";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  const { lang } = router.query;

  const redirectTo =
    lang && ["en", "tr"].includes(lang as string) ? `/${lang}` : "/en";

  if (typeof window !== "undefined") {
    window.location.href = redirectTo;
  }

  return (
    <div className="container flex justify-center items-center min-h-screen text-orange-400 font-medium text-center text-3xl sm:text-4xl">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <a href={redirectTo}>Return Home</a>
    </div>
  );
}
