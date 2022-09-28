import React, { useEffect } from "react";


export default function SeatList() {

  useEffect(() => {
    console.log("Start useEffect");

    return () => {
    };
  }, []);

  return (
    <div>
      Result Final cost
    </div>
  );
}
