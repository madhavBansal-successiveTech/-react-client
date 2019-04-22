
import React from 'react';
import { TextField } from '../../components'

export default function TextFieldDemo() {
  return (
    <div>
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
