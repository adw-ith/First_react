import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Card from "./components/Card";
import Select from "./components/Select";
import im1 from "./assets/images/TvcIHkYqqln1RGbaFqBeuFp6.webp";
import im2 from "./assets/images/capsule_616x353.jpg";
import im3 from "./assets/images/g69dFkr7.webp";
import im4 from "./assets/images/ed6f5-16069157093599-800.avif";
import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

function App() {
  let listone = ["Home", "Popular", "Latest", "News", "Community"];
  let platforms = ["Android", "Windows", "Xbox", "PlayStation", "ios"];
  let orderby = ["Relevance", "oldest", "latest", "Popular", "Rating"];
  let titles = [
    [
      "The Witcher : Wild Hunt",
      im1,
      [FaXbox, FaWindows, FaPlaystation],
      "9.2",
      "Action",
    ],
    [
      "Grand Theft Auto V",
      im2,
      [FaXbox, FaWindows, FaPlaystation],
      "9.0",
      "Adventure",
    ],
    ["FarCry 4", im3, [FaXbox, FaWindows, FaPlaystation], "8.9", "shooter"],
    [
      "Need For Speed",
      im4,
      [FaXbox, FaWindows, FaPlaystation],
      "9.4",
      "Racing",
    ],
    [
      "Need For Speed",
      im4,
      [FaXbox, FaWindows, FaPlaystation],
      "9.4",
      "Racing",
    ],
  ];
  let genrelist = [
    "Action",
    "Adventure",
    "Arcade",
    "Casual",
    "Educational",
    "Indie",
    "MMO",
    "Puzzle",
    "Racing",
    "RPG",
    "Shooter",
    "Simulation",
    "Sports",
    "Strategy",
  ];
  return (
    <div>
      <Navbar navitems={listone} />
      <main className="container-md mx-4 pt-4 pb-4 pos">
        <section className="row pt-4">
          <section className="col-3">
            <Aside items={genrelist} heading="Genres" />
          </section>
          <section className="col-9">
            <h1 className="pt-4">GAMES</h1>
            <div className="row pb-4 pt-1">
              <Select description="Platforms" opt={platforms} />
              <Select description="Order By:" opt={orderby} />
            </div>
            <div className="row">
              {titles.map((item) => (
                <Card
                  title={item[0]}
                  image={item[1]}
                  icons={item[2]}
                  rating={item[3]}
                  genre={item[4]}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
