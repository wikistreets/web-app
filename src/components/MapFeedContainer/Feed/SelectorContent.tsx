"use client";

import Link from "next/link";
import React, { useState, useEffect, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import users from "@/mock-data/mockData";

export const SelectorContent: React.FC = () => {
  const [myMaps, setMyMaps] = useState<ReactNode[]>([]);

  useEffect(() => {
    const mapList: ReactNode[] = users[0]["maps"].map((map, idx) => (
      <div
        key={idx}
        className="w-full p-3 border-b border-slate-100 font-normal"
      >
        {map.mapTitle}
      </div>
    ));
    setMyMaps(mapList);
  }, [users]);

  return (
    <section
      className="w-full flex flex-col justify-center items-center
          rounded-md shadow mb-2 text-center text-sm
          "
    >
      <div className="w-full p-2 bg-slate-200">
        <Link href="/">
          {" "}
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>

      <div className="w-full p-2 font-medium border-b border-slate-100 bg-slate-50">
        My maps
      </div>

      <div className="w-full p-2 border-b border-slate-100">
        <Button
          className="text-indigo-600 gap-1 font-medium"
          variant="secondary"
          size="sm"
        >
          Create a new map
          <FontAwesomeIcon icon={faCirclePlus} />
        </Button>
      </div>

      {myMaps}

      <div className="w-full p-2">
        <Button className="bg-slate-50 font-medium" size="sm">
          View more
        </Button>
      </div>
    </section>
  );
};

export default SelectorContent;
