import { Link } from "react-router-dom"
import { Github, Terminal, Shield, ArrowUpRight } from "lucide-react"
import { useState } from "react"
export default function Home() {

    const [load, setLoad] = useState<boolean>(false)
    
  return (
    <main className="select-none slide-up-down pb-24">
        <div className="sm:pb-12 pb-8">
            <h1 className="font-bold text-3xl font-mono">Tilovov Shavqiddin</h1>
            <p className="text-base font-thin ">My full name is Tilovov Shavqiddin. I'm a react.js developer</p>
        </div>
        <div className="flex gap-8 sm:mb-20 mb-12 flex-wrap sm:flex-nowrap">
            <div className="rounded-full size-28 border flex justify-center items-center ">
                <img onLoad={() => setLoad(true)} className={`${load ? "rounded-full size-28" : "hidden"}`} src="https://firebasestorage.googleapis.com/v0/b/total-array-422417-i0.appspot.com/o/image-1.jpg?alt=media&token=01dee4e3-bcd7-4df4-94be-593b87ed9aca" alt="image" />
                <p className={`${load ? "hidden" : "text-2xl font-bold"}`}>TSH</p>
            </div>
            <ul className="flex flex-col justify-around">
                <li className="flex gap-2 items-center font-mono opacity-70 " >
                    <Github />
                    <span>47</span>
                    <span>Github public repositories</span>
                </li>
                <li className="flex gap-2 items-center font-mono opacity-70 " >
                    <Shield />
                    <span>6</span>
                    <span>Github private repositories</span>
                </li>
                <li className="flex gap-2 items-center font-mono opacity-70 " >
                    <Terminal />
                    <span>40% I know github</span>
                </li>
            </ul>
        </div>
        <div className="mb-12">
            <p className="text-lg ">It's been 3 years since I started learning frontend. My english level elementary. I'm a react.js developer and I understand the node.js backend and can create a web api. I've done a few simple MERN stack projects.</p>
        </div>
        <ul className="flex items-center gap-8">
            <li>
                <Link to={'mailto:shavqiddintilovov0@gmail.com'} className="flex items-end text-lg opacity-50 underline">
                    <span>Email me</span>
                    <ArrowUpRight size={24}/>
                </Link>
            </li>
            <li>
                <Link to={'/more-content'} className="flex items-end text-lg opacity-50 underline">
                    <span>More ways to connect</span>
                    <ArrowUpRight size={24}/>
                </Link>
            </li>
        </ul>
    </main>
  )
}
