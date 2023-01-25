import Seat from "../Seat/Seat";
import { rows, columns } from "./../../constants";
import "./../../App.css";

export default function MovieSeats(props) {
  return (
    <>
      <section className="movie-seat-container">
        <h3>{props.movie}</h3>
        {columns.map((columns) => (
          <section className="movie-seats">
            <span>{columns}</span>
            <section className="rows">
              {rows.map((rows) => (
                <Seat number={rows} />
              ))}
            </section>
          </section>
        ))}
      </section>
      <section className="cost">
        <span>Total Cost:</span>
        {props.totalSeat}
        <span>$</span>
      </section>
    </>
  );
}
