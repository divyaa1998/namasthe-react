
import { useEffect, useState } from "react";

const User = ({name}) => {
   
     const [count] = useState(0);
     const [count2] = useState(1);
      useEffect(() => {
      const timer = setInterval(() => {
     console.log('timer')
    },1000)

    return () => {
        clearInterval(timer);
    }
    },[count])
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Hyderabad</h3>
            <h4>Contact: 9890987665</h4>
        </div>
    )
};


export default User;