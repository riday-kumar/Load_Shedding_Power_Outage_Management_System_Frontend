"use client";

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchFeeders = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log("searching", term);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("area", term);
    } else {
      params.delete("area");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <Input
        placeholder="type area name"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("area")?.toString()}
      />
    </div>
  );
};

export default SearchFeeders;
