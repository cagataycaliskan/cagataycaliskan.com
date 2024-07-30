"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleToggle = () => {
    const nextLocale = localActive === "en" ? "tr" : "en";
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div
      onClick={handleToggle}
      className={`relative border-2 rounded-full bg-black p-1 cursor-pointer flex items-center ${
        isPending ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={{ width: "70px", height: "35px" }}
    >
      <div
        className={`rounded-full bg-orange-400 w-1/2 h-full transition-transform duration-300 ${
          localActive === "en" ? "transform translate-x-full" : ""
        }`}
      ></div>
      <div className="absolute left-2 text-white">TR</div>
      <div className="absolute right-2 text-white">EN</div>
    </div>
  );
}
