import React, { useEffect } from "react";


export default function TicketList() {

  useEffect(() => {
    console.log("Start useEffect");

    return () => {
    };
  }, []);

  return (
    <div>
      Ticket List

    </div>
  );
}
