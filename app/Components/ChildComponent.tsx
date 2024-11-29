import React from "react";
 
const ChildComponent = (props: any) => {
console.log(props)
return(
    <div className="inline-block border border-blue-800 m-2 my-5 p-2 text-center bg-red-200 mb-16">

        <h1>{props.Image}</h1>
        <p>Name: {props.Name}</p>
        <p>Price: {props.Price}</p>
        <p>Reviews: {props.Reviews}</p>
        
    </div>
)
}

export default ChildComponent;