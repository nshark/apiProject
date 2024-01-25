import { useState } from "react";
import { View, TextInput } from "react-native";
import { Link } from "react-router-dom";
import APIToolbar from "./apiToolbar";
function CanvasPage() {
  var [sourceURL, changeSourceURL] = useState(
    "https://drive.google.com/thumbnail?id=1iwlkhcuQovtVpsgSDs5GqzUaMqFH6PiQ&sz=w1000",
  );
  var [text, setText] = useState("1iwlkhcuQovtVpsgSDs5GqzUaMqFH6PiQ");
  var [output, setOutput] = useState("");
  const styles = {
    height: 40,
  };
  function onChangeURLforInputImage(newID) {
    changeSourceURL(
      "https://drive.google.com/thumbnail?id=" + newID + "&sz=w1000",
    );
    setText(newID);
  }
  function SendOff(e) {
    console.log(sendToAPI);
    console.log(e);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      key: "YBIiLZoCt3ueduwWA6cEYKzZR1Dxs3zIwX0WKkVjDTQULwYmevm5HRyrnKwX",
      prompt: sendToAPI[2],
      negative_prompt: null,
      init_image: sourceURL,
      width: "512",
      height: "512",
      samples: "1",
      num_inference_steps: sendToAPI[1],
      safety_checker: "no",
      enhance_prompt: "yes",
      guidance_scale: sendToAPI[0],
      strength: sendToAPI[3],
      seed: null,
      base64: "no",
      webhook: null,
      track_id: null,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://stablediffusionapi.com/api/v3/img2img", requestOptions)
      .then((response) =>
        response
          .json()
          .then((responseJSON) => setOutput(responseJSON["output"])),
      )
      .catch((error) => console.log("error", error));
  }
  var [sendToAPI, setSendToAPI] = useState([0, 0, "", 0]);
  return (
    <div className="row">
      <div className="column">
        <View>
          <TextInput
            style={styles}
            onChangeText={(newText) => {
              onChangeURLforInputImage(newText);
            }}
            value={text}
            placeholder="ID of google drive img"
          />
        </View>
        <button
          onClick={(e) => {
            SendOff(e);
          }}
        >
          Done
        </button>
        <img src={sourceURL} alt="tsx"></img>
        <APIToolbar retValues={setSendToAPI} />
      </div>
      <div className="column">
        <img src={output} alt="the output will be here" />
        <li>
          <Link to={"/downloadPage?uri=" + output}>toDowloadPage</Link>
        </li>
      </div>
    </div>
  );
}
export default CanvasPage;
