//Not my code - using for understand WTF is happening with img2img.
//import request from "request";
var request = require("request");
var options = {
  method: "POST",
  url: "https://stablediffusionapi.com/api/v3/img2img",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    key: "m2zJvMSqCDqBJlqLpi0P6nS5ZNX5js29mUdgMJbYr0Z2tZF53VwuwWXo5rsZ",
    prompt: "a cat sitting on a bench",
    negative_prompt: null,
    init_image:
      "https://drive.google.com/uc?export=view&id=1iwlkhcuQovtVpsgSDs5GqzUaMqFH6PiQ",
    width: "512",
    height: "512",
    samples: "1",
    num_inference_steps: "30",
    safety_checker: "no",
    enhance_prompt: "yes",
    guidance_scale: 7.5,
    strength: 0.7,
    seed: null,
    base64: "no",
    webhook: null,
    track_id: null,
  }),
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
