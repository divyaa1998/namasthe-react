{/* <div id = "parent">
    <div id="child">
        <h1>Im h1 Tag</h1>
        <h2>Im h2 Tag</h2>
    </div>
    <div id="child2">
        <h1>Im h1 Tag</h1>
        <h2>Im h2 Tag</h2>
    </div>


</div> */}
 const heading = React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child'},
        [ React.createElement('h1',{},'Im in h1 tag'), React.createElement('h2',{},'Im in h2 tag')]),React.createElement('div',{id:'child2'},
            [ React.createElement('h1',{},'Im in h1 tag'), React.createElement('h2',{},'Im in h2 tag')])])
// const heading =   React.createElement('h1',{id:'heading',xyz:'abc'},'Hello World from react');
console.log(heading)
        const root =   ReactDOM.createRoot(document.getElementById('container'));
            root.render(heading);