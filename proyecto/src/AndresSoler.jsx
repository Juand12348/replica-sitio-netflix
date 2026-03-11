import { useRef } from "react";
import "./AndresSoler.css";

function Tendencias() {

  const filaRef = useRef(null);

  const scrollDerecha = () => {
    filaRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  const scrollIzquierda = () => {
    filaRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  return (
    <section className="tendencias">
      <h2>Tendencias</h2>

      <div className="contenedor-tendencias">

        <button className="flecha izquierda" onMouseEnter={scrollIzquierda}>
          ❮
        </button>

        <div className="fila-tendencias" ref={filaRef}>

          <div className="card">
            <span className="numero">1</span>
            <img src="https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" alt="Stranger Things"/>
          </div>

          <div className="card">
            <span className="numero">2</span>
            <img src="https://image.tmdb.org/t/p/w500/9yxep7oJdkj3Pla9TD9gKflRApY.jpg" alt="Squid Game"/>
          </div>

          <div className="card">
            <span className="numero">3</span>
            <img src="https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg" alt="The Witcher"/>
          </div>

          <div className="card">
            <span className="numero">4</span>
            <img src="https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" alt="Dark"/>
          </div>

          <div className="card">
            <span className="numero">5</span>
            <img src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" alt="Peaky Blinders"/>
          </div>

          <div className="card">
            <span className="numero">6</span>
            <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt="Breaking Bad"/>
          </div>

          <div className="card">
            <span className="numero">7</span>
            <img src="https://image.tmdb.org/t/p/w500/5P8SmMzSNYikXpxil6BYzJ16611.jpg" alt="Arcane"/>
          </div>

          <div className="card">
            <span className="numero">8</span>
            <img src="https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg" alt="Money Heist"/>
          </div>
          
        </div>

        <button className="flecha derecha" onMouseEnter={scrollDerecha}>
          ❯
        </button>

      </div>
    </section>
  );
}

export default Tendencias;