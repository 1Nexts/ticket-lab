import React, { useEffect } from "react";


export default function StageList() {

  useEffect(() => {
    console.log("Start useEffect");

    return () => {
    };
  }, []);

  return (
    <div>
      Seat List
    </div>
  );
}
