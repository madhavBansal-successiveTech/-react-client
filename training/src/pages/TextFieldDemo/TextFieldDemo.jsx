
import React from 'react';
import { TextField, Slider } from '../../components'

export default function TextFieldDemo() {
  return (
    <div>
      <Slider banners={["cloud.jpg", "dns-server.png", "full-stack-web-development.jpg", "js.jpg", "load-balancer.png"]} />
      <div className="TextFieldDemo-row">
        <h3>This is a Disabled Input</h3>
        <TextField disabled value="Disabled Input" />
      </div>
      <div className="TextFieldDemo-row">
        <h3>This is a Valid Input</h3>
        <TextField value="Accessible" />
      </div>
      <div className="TextFieldDemo-row">
        <h3>An Input with errors</h3>
        <TextField value="101" error="Could not be greater than" />
      </div>
    </div>
  );
}
