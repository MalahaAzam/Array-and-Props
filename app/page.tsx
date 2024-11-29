import Image from "next/image";
import ArrayMap from "./Components/ArrayMap";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ParentComponent from "./Components/ParentComponent";

export default function Home() {
  return (
    <main className="min-h-screen bg-teal-100">
      <h1 className="flex justify-center font-extrabold text-purple-900 text-3xl py-5">Class 9 Assignment</h1>
      <p className="flex justify-center underline text-lg py-2 ">Using Array map</p>
   <ArrayMap/>
   <p className="flex justify-center text-lg underline py-2 my-5">Using Props</p>
   <ParentComponent/>
    </main>
  );
}
