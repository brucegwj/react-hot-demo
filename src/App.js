import React from 'react'
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="gaowj" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
export default App