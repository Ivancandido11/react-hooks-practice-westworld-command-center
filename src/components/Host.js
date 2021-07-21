import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, onHostClick }) {
  const [isSelected, setIsSelected] = useState(false)

  const handleHostClick = () => {
    setIsSelected(isSelected => !isSelected)
    onHostClick(host)
  }
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className={isSelected ? "host selected" : "host"}
      onClick={handleHostClick}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
