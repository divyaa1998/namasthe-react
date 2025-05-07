import React from 'react';
import ReactDOM from 'react-dom/client';
 const heading = React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'child'},
        [ React.createElement('h1',{},'Im in h1 tag'), React.createElement('h2',{},'Im in h2 tag')]),React.createElement('div',{id:'child2'},
            [ React.createElement('h1',{},'Im in h1 tag'), React.createElement('h2',{},'Im in h2 tag')])])
// const heading =   React.createElement('h1',{id:'heading',xyz:'abc'},'Hello World from react');
console.log(heading)
        const root =   ReactDOM.createRoot(document.getElementById('container'));
            root.render(heading);