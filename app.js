const heading  = React.createElement("h1", {id:"heading"}, "helloworld from react");
const rooot    = ReactDOM.createRoot(document.getElementById("root"));
rooot.render(heading);
/* <div id ="parent">
        <div id="child">
            <h1></h1>
            <h2></h2>
        </div>
    </div> */
// will create this structure using react

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{id:"heading"},"hello"),
            React.createElement("h2",{id:"heading2"},"hi")
        ])
    )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);