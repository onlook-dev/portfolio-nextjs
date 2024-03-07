"use client";

import { poppins } from "lib/util/get-class";
import React, { useState } from "react";
import { Blogs } from "types/blogs";
import clsx from "clsx";

const FilteredBlogs = ({ portfolioBlogs }: Blogs) => {
  const [searchValue, setSearchValue] = useState<string>("");
  
  return (
    <div>
      <div className={clsx("text-primary-white", "flex w-full mb-6")}>
        <input
          className={clsx(
            poppins,
            "transition-all focus:border focus:border-hover-card-border focus:shadow-2xl",
            "border border-primary-card-border",
            "w-full py-3 px-4",
            "bg-transparent",
            "outline-none rounded-md placeholder-primary-gray"
          )}
          placeholder="🔍 Search blogs..."
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
    </div>
  );
};

export default FilteredBlogs;
