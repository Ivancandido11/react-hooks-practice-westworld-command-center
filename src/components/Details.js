import React from "react"
import HostInfo from "./HostInfo"
import { Segment, Image } from "semantic-ui-react"
import * as Images from "../services/Images"

function Details({ change, host, onActiveChange, onCurrentAreaChange }) {
  return (
    <Segment id="details" className="HQComps">
      {!!host.id ? 
      <HostInfo
        change={change}
        host={host}
        onActiveChange={onActiveChange}
        onCurrentAreaChange={onCurrentAreaChange}
      /> : 
      <Image 
        size="medium" 
        src={Images.westworldLogo} 
      />}
    </Segment>
  )
}

export default Details
