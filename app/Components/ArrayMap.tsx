import Image from "next/image"
import React from "react"

// 1.Make an array of objects (Min 4 objects).
// carImage, carName, carPrice, carReviews
// 2. Make a child Component and pass the value through props
// 3. Using the map function render child component once and get the values 4 times

const ArrayMap = () => {
    const Cars = [
        {carName: "Mercedes" , carImage: <Image src= "/Mercedes.jpg" alt="BMW" height={300} width={300}/>  , carPrice: 50000 , carReviews: 4.5 },

        {carName: "Toyota" , carImage: <Image src= "/amg.jpg" alt="Car" height={300} width={300}/>  , carPrice: 40000 , carReviews: 4.2 },

        {carName: "Honda City" , carImage: <Image src= "/red.jpg" alt="Honda " height={300} width={300}/>  , carPrice: 35000 , carReviews: 4.0 },

        {carName: "Lamborghini" , carImage: <Image src= "/white.jpg" alt="Lamborghini" height={300} width={300}/>  , carPrice: 70000 , carReviews: 4.8 }
    ]

 return(
<div>
    {
        Cars.map((Veh, index) => {
        return (
        <div key={`${Veh.carName}-${index}`} className="mx-6 inline-block text-center my-5 p-2 bg-blue-200 w-72 border border-blue-800 text-black">
          {Veh.carImage}
          <p>Name: {Veh.carName}</p>
          <p>Price: {Veh.carPrice}</p>
          <p>Reviews: {Veh.carReviews}</p>
        </div>
        ) 
    })
    }
</div>
 )

}

export default ArrayMap