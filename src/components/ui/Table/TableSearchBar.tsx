import React, { ChangeEvent } from "react";
import search from "./search.svg";

interface TableSearchBarProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TableSearchBar: React.FC<TableSearchBarProps> = ({ onChange }) => {
  return (
    <div className="flex py-[7px] border  px-3 bg-[white] rounded-[2rem] shadow-sm justify-between">
      <img src={search} alt="search" className="mr-[1rem]" />
      <input
        type="text"
        className="border-none outline-none"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};

export default TableSearchBar;
