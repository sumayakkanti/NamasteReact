import React from "react";
import ReactDOM from "react-dom/client"

const ParentComponent = () =>
(
    <div>
        {heading}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = <h1>This Namste React application</h1>

root.render(<ParentComponent />);