"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { JSX, useEffect, useState } from "react";

function SearchBar(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [value, setValue] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      router.replace(`/?${params.toString()}`);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="w-60">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for dishes..."
        className="w-full p-2 rounded-md border bg-white text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
