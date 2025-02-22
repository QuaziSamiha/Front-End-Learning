import { ITableFilter } from "@/interfaces/table";
import { RiSearchLine } from "react-icons/ri";

const FilterTable: React.FC<ITableFilter> = ({ filtering, setFiltering }) => {
  return (
    <div className="flex items-center gap-2 border border-blackSecondary rounded-md px-2 py-2">
      <RiSearchLine className="w-4 h-4 text-blackSecondary" />
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={filtering || ""}
        onChange={(e) => setFiltering(e.target.value)}
        className="bg-transparent pl-2 pr-6 text-blackPrimary text-sm placeholder:text-sm placeholder:text-stone-600 outline-none w-80 rounded-md"
      />
    </div>
  );
};

export default FilterTable;
