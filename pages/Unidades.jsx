import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Unidades.module.css";

const coworkingData = [
  {
    id: 1,
    name: "Coworking A",
    region: "North",
    rating: 4.5,
    capacity: 20,
    imgs: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y293b3JraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 2,
    name: "Coworking B",
    region: "South",
    rating: 4.0,
    capacity: 10,
    imgs: "https://images.popularplaces-all.com/hotelimage.php?p_id=1000&code=279c52766bad3f5c4c566f036f3c16e3&webpage=coworkingspaces.me&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F1024x768%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fphoto%3Fmaxwidth%3D1024%26photoreference%3DATtYBwJ9S4in3FtnvlWioRm9fobE8xQutmJ3RGUDqgQc2HZI_sp6klsCvP5Tts5vvtptUZr4TYFUU2BI0lXFaaHEExGKDyZYVJowxDvT6pUmJAi0H7urFlYrU_o84SQh5spQ0lqxrGcAxIcJqTT4y0KHZAS0ftCzZqrSMooXmKtBrpR5eXN-%26key%3Dgoogle_api_key",
  },
  {
    id: 3,
    name: "Coworking C",
    region: "West",
    rating: 3.5,
    capacity: 15,
    imgs: "https://images.unsplash.com/photo-1604328703693-18313fe20f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y293b3JraW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 4,
    name: "Coworking D",
    region: "East",
    rating: 4.2,
    capacity: 25,
    imgs: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTq-TpEte2MwhHXaeJ042k5b9cMc37d_Ra0PwS4Bh7VZfr81VIR6hbP5fi1lwDsC81Xo&usqp=CAU",
  },
];

export default function Unidades() {
  const [regionFilter, setRegionFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [capacityFilter, setCapacityFilter] = useState(0);

  const handleRegionChange = (event) => {
    setRegionFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(Number(event.target.value));
  };

  const handleCapacityChange = (event) => {
    setCapacityFilter(Number(event.target.value));
  };

  const filteredCoworkings = coworkingData.filter((coworking) => {
    return (
      (regionFilter === "All" || coworking.region === regionFilter) &&
      (ratingFilter === 0 || coworking.rating >= ratingFilter) &&
      (capacityFilter === 0 || coworking.capacity >= capacityFilter)
    );
  });

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Coworking Unidades</h1>

          <div className={styles.filters}>
            <label htmlFor="region-filter">Região:</label>
            <select
              id="region-filter"
              value={regionFilter}
              onChange={handleRegionChange}
            >
              <option value="All">Todas</option>
              <option value="North">Norte</option>
              <option value="South">Sul</option>
              <option value="West">Oeste</option>
              <option value="East">Lest</option>
            </select>

            <label htmlFor="rating-filter" className={styles.spaceu}>
              Minino Recomendações:
            </label>
            <select
              id="rating-filter"
              value={ratingFilter}
              onChange={handleRatingChange}
            >
              <option value={0}>Todas</option>
              <option value={3}>3 Estrelas</option>
              <option value={3.5}>3.5 Estrelas</option>
              <option value={4}>4 Estrelas</option>
              <option value={4.5}>4.5 Estrelas</option>
              <option value={5}>5 Estrelas</option>
            </select>

            <label htmlFor="capacity-filter" className={styles.spaceu}>
              Capacidade:
            </label>
            <select
              id="capacity-filter"
              value={capacityFilter}
              onChange={handleCapacityChange}
              className={styles.inputsedit}
            >
              <option value={10}>10 Pessoas</option>
              <option value={15}>15 Pessoas</option>
              <option value={20}>20 Pessoas</option>
              <option value={25}>25 Pessoas</option>
              <option value={30}>30 Pessoas</option>
            </select>
          </div>
        </main>

        <div className={styles.grid}>
          {filteredCoworkings.map((coworking) => (
            <div key={coworking.id} className={styles.card}>
              <div className={styles.cardb}>
                <div className={styles.catributes}>
                  <h2>{coworking.name}</h2>
                  <p>Região: {coworking.region}</p>
                  <p>Recomendações: {coworking.rating}</p>
                  <p>Capacidade: {coworking.capacity}</p>
                </div>
                <div className={styles.imgs}>
                  <img src={coworking.imgs} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
