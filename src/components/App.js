import React, { useEffect, useState } from "react"
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"
import { Segment } from "semantic-ui-react"
import "../stylesheets/App.css"


function App() {
  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [selectedHost, setSelectedHost] = useState({})
  const [change, setChange] = useState(false)
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
    const currentArea = newArea.area
    const currentHostsInArea = hosts.filter(host => host.area === newArea.area)
    const currentAreaForLimit = areas.filter(area => area.name === currentArea)
    if (currentHostsInArea.length < currentAreaForLimit[0].limit) {
      setChange(true)
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
        //setChange(false)
    } else {
      setChange(false)
      console.log(change)
      alert(`Too many hosts in ${currentArea}`)
    }
    
  }
  const handleActiveChange = (id, active) => {
    const objectData = {
      active: active
    }
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objectData)
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

  // const limitHosts = (value) => {
  //   if ()
  // }
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
        change={change}
        hosts={hosts}
        onActiveChange={handleActiveChange}
        onCurrentAreaChange={handleCurrentAreaChange}
        onHostClick={handleHostClick}
        selectedHost={selectedHost}
      />
    </Segment>
  )
}

export default App
