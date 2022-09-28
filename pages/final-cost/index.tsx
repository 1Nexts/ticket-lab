import React, { useEffect } from "react";


export default function FinalCost() {

  useEffect(() => {
    console.log("Start useEffect");

    return () => {
    };
  }, []);

  return (
    <div>
      Final cost
    </div>
  );
}
