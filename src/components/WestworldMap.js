import React from "react"
import Area from "./Area"
import { Segment } from "semantic-ui-react"

function WestworldMap({ areas, hosts, onHostClick }) {
  return (
  <Segment id="map">
    {areas.map(area => {
      const newHosts = hosts.filter(host => host.area === area.name)
      return <Area
        auth_req={area.auth_req}
        hosts={newHosts}
        id={area.id}
        key={area.id}
        limit={area.limit}
        name={area.name}
        onHostClick={onHostClick}
      />
    })
    }
  </Segment>
  )
}

export default WestworldMap
