import Logo from "./img/Logo.svg"
import Search from "./img/Search.svg"
import Cart from "./img/Cart.svg"
import { useState } from "react";
function App() {
  const [burger, setBurger]=useState(false)
  function Burger() {
    setBurger(!burger)
  }
  return (
<>
{burger&&<nav className="flex pt-4 roboto text-[#274C5B] h-screen w-full bg-white/50 fixed flex-col text-center gap-y-5 mt-[70px]">
  <a className="" href="/">Home</a>
  <a className="" href="/">About</a>
  <a className="" href="/">Pages</a>
  <a className="" href="/">Shop</a>
  <a className="" href="/">Projects</a>
  <a className="" href="/">News</a>
</nav>}
<div className="h-screen text-xl text-[#274C5B]">
<header className="h-[100px] flex justify-around pt-3 text-[#274C5B]">
<img className="h-[53.72px]" src={Logo} alt=""/>
<div className="pt-5 burger" onClick={()=>Burger()}>
    <div className="bg-gray-500 h-1 w-8 rounded mb-0.5"></div>
    <div className="bg-gray-500 h-1 w-8 rounded mb-0.5"></div>
    <div className="bg-gray-500 h-1 w-8 rounded mb-0.5"></div>
  </div>
<nav className="flex gap-x-5 pt-4 roboto nav text-xl">
  <a className="" href="/">Home</a>
  <a className="" href="/">About</a>
  <a className="" href="/">Pages</a>
  <a className="" href="/">Shop</a>
  <a className="" href="/">Projects</a>
  <a className="" href="/">News</a>
</nav>
<div className="flex h-[57px] roboto bg-[#FAFAFA] py-2 px-2 rounded-md">
  <input type="text" name="" id="" className="px-2 rounded-md bg-[#FAFAFA] input"/>
  <img src={Search} className="cursor-pointer" alt="" />
</div>
<div className="flex h-[57px] border px-5 rounded-[50px]">
  <img src={Cart} className="cursor-pointer py-2 " alt="" />
  <div className="ml-1 py-[14.4px] roboto">Cart(0)</div>
</div>
</header>
<main className="main h-full text-[#274C5B]">
<div className="ml-[10%] pt-[10%]">
<div className="yellowtail text-[#68A47F] text-4xl ">100% Natural Food</div>
<div className="roboto text-7xl mt-2 w-[500px]">Choose the best healthier way of life</div>
<button className="bg-[#EFD372] px-10 py-7 roboto rounded-2xl mt-5">Explore Now</button>
</div>
</main>
</div>
<div className="flex justify-evenly h-[400px] text-white text-4xl roboto flex-wrap gap-y-5 mb-10 mt-32">
  <div className="img1 w-[682px]"><div className="yellowtail w-[682px] mt-24 ml-16">Natural!!</div><div className="w-[682px] ml-16">Get Garden <br /> Fresh Fruits</div></div>
  <div className="img2 w-[682px]"></div>
</div>

<main>
  <img src="" alt="" />
  <div className="">
    <div className="yellowtail text-[#68A47F]">About Us</div>
    <div className="">We Believe in Working <br /> Accredited Farmers</div>
    <div className="">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</div>
  </div>
</main>
</>
  );
}

export default App;
