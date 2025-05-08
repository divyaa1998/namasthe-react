import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>Im Span</span>
const Title =  () =>  (
  <h1 className="heading" tabIndex={5}>
    {elem}
    Im a Title component
  </h1>
);

const HeaderComponent = () => (
  <div id="main">
   <Title></Title>
   <Title />
   {Title()}
    <h1>Im a React Functional Component</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<HeaderComponent />);
