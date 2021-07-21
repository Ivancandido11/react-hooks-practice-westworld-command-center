import React from "react";
import Host from "./Host";
import "../stylesheets/Area.css";

function Area(props) {
  const capitalize = (name) => {
    const nameWithSpaces = name.replace("_"," ")
    const arrayOfNames = nameWithSpaces.split(" ")
    const arrayOfNamesCased = []

    for (let i = 0; i < arrayOfNames.length; i++) {
      const word = arrayOfNames[i];
      arrayOfNamesCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    return arrayOfNamesCased.join(" ")
  }
  const cleanedName = capitalize(props.name)
  const hostsToDisplay = props.hosts.filter(host => host.active === true)

  return (
    <div
      className="area"
      id={props.name}
    >
      <h3 className="labels">
        {cleanedName}
      </h3>
      <div >
      {hostsToDisplay.map(host => 
        <Host 
          host={host}
          key={host.id}
          onHostClick={props.onHostClick}
        />)
      }
      </div>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
