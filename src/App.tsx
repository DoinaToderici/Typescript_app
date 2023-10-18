import { useState } from "react";
import { Form } from "./components/Form.js";

function App() {
  return (
    <div>
      <Form subtitle={<h2>this is the subtitle</h2>}>
        <h1>This is the children of Form</h1>
      </Form>
    </div>
  );
}

export default App;
