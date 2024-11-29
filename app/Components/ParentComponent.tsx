import React from "react";
import ChildComponent from "./ChildComponent";
import Image from "next/image"

const ParentComponent = () => {
    let carImage1 = <Image src="/bmw.jpg" alt="bmw" height={300} width={300} />;
    let carName1 = "BMW"
    let carPrice1 = 400000
    let carReviews1 = 5.5

    let carImage2 = <Image src="/bmw.jpg" alt="bmw" height={300} width={300} />;
    let carName2 = "Honda City"
    let carPrice2 = 500000
    let carReviews2 = 6.5

    let carImage3 = <Image src="/bmw.jpg" alt="bmw" height={300} width={300} />;
    let carName3 = "Lamborghini"
    let carPrice3 = 600000
    let carReviews3 = 7.5

    let carImage4 = <Image src="/bmw.jpg" alt="bmw" height={300} width={300} />;
    let carName4 = "Mercedes"
    let carPrice4 = 700000
    let carReviews4 = 10.5

return(
    <div>
        <ChildComponent
        Image = {carImage1}
        Name = {carName1}
        Price = {carPrice1}
        Reviews = {carReviews1}
        />

<ChildComponent
        Image = {carImage2}
        Name = {carName2}
        Price = {carPrice2}
        Reviews = {carReviews2}
        />

<ChildComponent
        Image = {carImage3}
        Name = {carName3}
        Price = {carPrice3}
        Reviews = {carReviews3}
        />

<ChildComponent
        Image = {carImage4}
        Name = {carName4}
        Price = {carPrice4}
        Reviews = {carReviews4}
        />
    </div>
  )
}

export default ParentComponent;