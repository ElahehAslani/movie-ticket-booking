import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import MovieSeatOne from "./pages/movie-seat-1";
import MovieSeatTwo from "./pages/movie-seat-2";
import MovieSeatThree from "./pages/movie-seat-3";

function App() {
  return (
    <BrowserRouter>
      <QueryParamProvider QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-seat-1" element={<MovieSeatOne />} />
          <Route path="/movie-seat-2" element={<MovieSeatTwo />} />
          <Route path="/movie-seat-3" element={<MovieSeatThree />} />
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  );
}

export default App;
