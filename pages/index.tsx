import React, { useEffect } from "react";


export default function Index() {

  useEffect(() => {
    console.log("Start useEffect");

    return () => {
    };
  }, []);

  return (
    <div>
      Heelo world
    </div>
  );
}
