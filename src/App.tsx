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
{burger&&<nav className="flex pt-4 roboto h-screen w-full bg-white/50 fixed flex-col text-center gap-y-5 mt-[70px]">
  <a className="" href="/">Home</a>
  <a className="" href="/">About</a>
  <a className="" href="/">Pages</a>
  <a className="" href="/">Shop</a>
  <a className="" href="/">Projects</a>
  <a className="" href="/">News</a>
</nav>}
<header className="h-[204px] flex justify-around pt-3">
<img className="h-[53.72px]" src={Logo} alt=""/>
<div className="pt-5 burger" onClick={()=>Burger()}>
    <div className="bg-gray-500 h-1 w-8 rounded mb-0.5"></div>
    <div className="bg-gray-500 h-1 w-8 rounded mb-0.5"></div>
    <div className="bg-gray-500 h-1 w-8 rounded mb-0.5"></div>
  </div>
<nav className="flex gap-x-5 pt-4 roboto nav">
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
</>
  );
}

export default App;
