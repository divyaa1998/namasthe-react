import React from 'react';

class UserClass extends React.Component{
      constructor(props){
          super(props);

         
       
          console.log(this.props.name+"child constructor");
      }
 componentDidMount(){
  this.timer =   setInterval(() => {
     console.log('timer')
    },1000)
      console.log(this.props.name+'child mount');

}
componentDidUpdate(){
    console.log('component updated...');
}
componentWillUnmount(){
    clearInterval(this.timer)
}
     render() {
        console.log(this.props.name+"child render");
        // const {name,location} = this.props;
    
       
         return (
        <div className="user-card">
           
            <h4>Contact: 9890987665</h4>
        </div>
    )
     }
}

export default UserClass;