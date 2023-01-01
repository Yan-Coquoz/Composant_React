import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../css/style.css";

/**
 * It's a scroll bar that changes color and opacity depending on the scroll position.
 * C'est une barre de défilement qui change de couleur et d'opacité en fonction de la position de défilement.
 *
 *
 * @param   {Number}  barHeight  Hauteur de la bar de progression, en pixel. / Height of the progress bar, in pixels.
 * @param   {String}  barColor    Couleur de la bar de progression / Progress bar color
 * @param   {Boolean}  barOpacity  Donne un effet de d'opacité progressif le long de la bar. / Gives a gradual opacity effect along the bar.
 *
 * @return  {React.ReactElement}
 */
const Scrollbar = ({ barHeight, barColor, barOpacity }) => {
  const [scrollTop, setScrollTop] = useState(0);

  function barProgress() {
    const progressBar = document.querySelector("div.scrollbar");

    const totalHeight = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${totalHeight / windowHeight} `;

    setScrollTop(scroll * 100);

    // Style
    progressBar.style.transform = `scale(${scroll},1)`;
    if (barOpacity) {
      progressBar.style.opacity = `${scroll}`;
    }
    progressBar.style.width = `${scrollTop}%`;
    progressBar.style.backgroundColor = `${barColor}`;
    progressBar.style.height = `${barHeight}px`;
  }

  useEffect(() => {
    window.addEventListener("scroll", barProgress, { passive: true });
    return () => removeEventListener("scroll", barProgress);
  });

  return (
    <div className="scrollbar__conteneur">
      <div className="scrollbar"></div>
    </div>
  );
};

Scrollbar.propTypes = {
  barColor: PropTypes.string,
  barHeight: PropTypes.number,
  barOpacity: PropTypes.bool,
};
Scrollbar.defaultProps = {
  barHeight: 5,
  barColor: "yellow",
  barOpacity: false,
};
export default Scrollbar;
