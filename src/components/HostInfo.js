import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ host, onCurrentAreaChange }) {
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.

  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const [options] = useState([
    { key: "high_plains", text: "High Plains", value: "high_plains" },
    { key: "lowlands", text: "Lowlands", value: "lowlands" },
    { key: "under_construction", text: "Under Construction", value: "under_construction" },
    { key: "pariah", text: "Pariah", value: "pariah" },
    { key: "python_pass", text: "Python Pass", value: "python_pass" },
    { key: "badlands", text: "Badlands", value: "badlands" },
  ]);
  const [value, setValue] = useState(host.area)

  function handleOptionChange(e, { value }) {
    const newArea = {
      area: value
    }
    onCurrentAreaChange(host.id, newArea)
    setValue(value)
  }

  function handleRadioChange() {
    console.log("The radio button fired");
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={host.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.firstName} | {host.gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <br />
              <Radio
                onChange={handleRadioChange}
                label={host.active}
                checked={host.active}
                slider
              />
              {host.active ? "Active" : "Decomissioned"}
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
