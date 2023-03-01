import React, { useState, useEffect } from "react";
import styles from "./Activity.module.css";

const Activity = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const images = [
    "https://i.pinimg.com/564x/16/dc/33/16dc334a7c63a0eeff761766056c90d9.jpg",
    "https://i.pinimg.com/564x/c6/0e/c5/c60ec51903ebe27e09eba0d6ad7ac643.jpg",
    "https://i.pinimg.com/564x/01/db/66/01db66b7ea370379abee4634a73b7f53.jpg",
    "https://i.pinimg.com/564x/35/43/56/354356700a96c616742dd67df5e17faf.jpg",
    "https://i.pinimg.com/564x/67/0d/4f/670d4fe8d4989c433c20e4a45331b65a.jpg",
    "https://i.pinimg.com/564x/1b/98/64/1b9864aba028597765698694161143fd.jpg",
    "https://i.pinimg.com/564x/cf/6b/fb/cf6bfbb271acbc330ba888dabf090f37.jpg",
  ];

  const handleClick = (index) => {
    setCarouselIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.container}>
      
      <div className={styles.carousel}>
        <div
          className={styles.carouselSlide}
          style={{
            transform: `translateX(-${carouselIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.carouselItem}
              onClick={() => handleClick(index)}
              style={{
                display: "block",
              }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className={styles.carouselIndicators}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.carouselIndicator} ${
                index === carouselIndex ? styles.active : ""
              }`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.text}>
        <p>
          A localização certa pode <br/> 
          ser crucial para o seu sucesso
        </p>
        <h6>Espaços de coworking para estudantes, para que eles tenham acesso a um ambiente de estudo
                adequado e também possam ter contato com empresas que podem oferecer oportunidades de estágio ou emprego. <br />
                Nosso objetivo é ter pelo menos um coworking em cada bairro,
                para que nenhum estudante precise se deslocar muito longe para encontrar um local de estudo adequado.</h6>
      </div>
    </div>
  );
};

export default Activity;
