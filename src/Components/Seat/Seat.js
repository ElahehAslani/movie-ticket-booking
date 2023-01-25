import { useState } from "react";
import { StringParam, NumberParam, useQueryParam } from 'use-query-params';

import "./../../App.css";

export default function Seat(props) {
  const [selectedSeat, setSelectedSeat] = useState(false);

  return (
    <section className="row-seats">
      <span
        className={`${selectedSeat ? "selected-seat" : "seat"}`}
        onClick={()=>setSelectedSeat(!selectedSeat)}
      >
        {props.number}
      </span>
    </section>
  );
}
