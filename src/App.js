import React from 'react'
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Hello(props) {
	function handleClick(e) {
	    e.preventDefault();
	    console.log('The link was clicked')
	  }
  return <h1 onClick={handleClick}>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="gaowj" />
      <Welcome name="yanmenglu" />
      <Welcome name="Edite" />
      <Hello name="James" />
    </div>
  );
}
export default App