"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAllFeeders } from "@/hooks";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface IFeeder {
  area: string;
  feeder_name: string;
  id: string;
}

const SearchFeeders = ({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (value: string | null) => void;
}) => {
  const [searchArea, setSearchArea] = useState("");

  const { data: feederData, isLoading: feederDataLoading } = useAllFeeders({
    area: searchArea,
    limit: "3",
  });

  // console.log("feederData", feederData);
  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearchArea(value);
  }, 500);

  // if (feederDataLoading) {
  //   return <>Loading...</>;
  // }

  return (
    <>
      <div className="border border-red-600">
        <Input
          placeholder="type area name"
          name="areaName"
          onChange={(e) => {
            debouncedSearch(e.target.value);
          }}
        />
      </div>
      {feederData &&
        feederData?.data.data.map((feeder: IFeeder) => (
          <Button
            key={feeder.id}
            onClick={() => {
              onChange(feeder.id);
            }}
          >
            {feeder.area}
          </Button>
        ))}
    </>
  );
};

export default SearchFeeders;
