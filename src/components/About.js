import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component{
      constructor(props){
            super(props);
            console.log('parent constructor')
      }
      componentDidMount(){
    console.log('parent mount')
}
      render(){
            console.log('parent render')
             return (<div>
           <h1>In About Us</h1>
           <h2>This is Namsthe React WebSeries</h2>
           <User name={'Divya Reddy(function component)'}/>
             <UserContext.Consumer>
                  {({loggedInUser}) => <h1>{loggedInUser}</h1>}
             </UserContext.Consumer>
           {/* <UserClass name={'first'} location={'Hyderabad(class)'}/> */}
      
      </div>)
      }
}


export default About;