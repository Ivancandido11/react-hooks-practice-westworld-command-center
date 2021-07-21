import React, { useEffect, useState } from "react"
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"
import { Segment } from "semantic-ui-react"
import "../stylesheets/App.css"


function App() {
  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState({})
  const URLAreas = "http://localhost:3001/areas/"
  const URLHosts = "http://localhost:3001/hosts/"

  useEffect(() => {
    fetch(URLAreas)
      .then(r => r.json())
      .then(data => setAreas(data))
    fetch(URLHosts)
      .then(r => r.json())
      .then(data => setHosts(data))
  }, [])
  const handleCurrentAreaChange = (id, newArea) => {
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArea)
    }
    fetch(`${URLHosts}${id}`, configObj)
      .then(r => r.json())
      .then(data => {
        const updatedHosts = hosts.map(host => {
          if (host.id === data.id) return data
          else return host
        })
        setHosts(updatedHosts)
      })
  }

  const handleHostClick = (host) => {
    setSelectedHost(host)
  }

  return (
    <Segment id="app">
      <WestworldMap 
        areas={areas}
        hosts={hosts}
        onHostClick={handleHostClick}
      />
      <Headquarters
        hosts={hosts}
        onCurrentAreaChange={handleCurrentAreaChange}
        onHostClick={handleHostClick}
        selectedHost={selectedHost}
      />
    </Segment>
  )
}

export default App
