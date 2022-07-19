import SearchHeaderOption from "./SearchHeaderOption.js";
import { SearchIcon, PhotographIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 ">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
