import { useState } from "react";
import { TextInput, View } from "react-native-web";
import ReactSlider from "react-slider";

export default function APIToolbar(props) {
  var retValues;
  var [guidanceValue, setGuideValue] = useState(0);
  var [infrenceSteps, setInfrencesSteps] = useState(30);
  var [prompt, setPrompt] = useState("cat");
  var [stregnth, setStregnth] = useState(0.0);
  const styles = {
    height: 40,
  };
  function sendValuesUp() {
    props.retValues([guidanceValue, infrenceSteps, prompt, stregnth]);
  }
  return (
    <div>
      <div className="row">
        <div className="column">
          <View>
            <TextInput
              inputType="numeric"
              style={styles}
              onChangeText={(newText) => {
                setInfrencesSteps(newText);
                sendValuesUp();
              }}
              value={infrenceSteps}
              placeholder="inference steps"
            />
          </View>
        </div>
        <div className="column">
          <View>
            <TextInput
              style={styles}
              onChangeText={(newText) => {
                setPrompt(newText);
                sendValuesUp();
              }}
              value={prompt}
              placeholder="Prompt"
            />
          </View>
        </div>
      </div>
      <div className="row">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          min={0}
          max={20}
          onChange={(e) => {
            setGuideValue(e);
            sendValuesUp();
          }}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
      </div>
      <div className="row">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          min={0}
          max={1}
          step={0.1}
          onChange={(e) => {
            setStregnth(e);
            sendValuesUp();
          }}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        />
      </div>
    </div>
  );
}
