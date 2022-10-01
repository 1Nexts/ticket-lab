import router from "next/router";
import React, { useEffect } from "react";
import ConcertList from "./concert-list/[_id]";



export default function Index() {

  useEffect(() => {
    router.push(`/concert-list/ed-sheeran`);
  }, [])
  
  // return (
  // );
}


