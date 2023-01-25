import { Link } from "react-router-dom";
import "./../../App.css";

export default function MovieCard(props) {
  return(
    <Link className="movie-card" to={props.href}>
      <span>{props.name}</span>
    </Link>
  );
}

