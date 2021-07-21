import React from "react"
import Host from "./Host"
import { Segment } from "semantic-ui-react"

function ColdStorage({ hosts, onHostClick }) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <div style={{display: "flex", flexDirection: "row", alignContent: "start", flexWrap:"wrap", justifyContent:"space-evenly"}}>
        {hosts.map(host => 
          <Host
            host={host}
            key={host.id}
            onHostClick={onHostClick}
          />)
        }
        </div>
      </Segment>
    </Segment.Group>
  )
}

export default ColdStorage
