"use client"

import SearchBox from "@/app/components/SearchBox";
import Table from "@/app/components/Table";
import {useState} from "react";

export default function Home() {

  const [keyword, setKeyword] = useState("")

  const handleKeyUp = event => {
    setKeyword(event.target.value)
    console.log(keyword)
  }

  return (
      <div className="relative px-40 py-10 min-h-screen">
        <SearchBox onKeyUp={handleKeyUp}/>

        <Table keyword={keyword}/>

      </div>

  );
}
