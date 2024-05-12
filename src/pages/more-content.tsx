import { Link } from "react-router-dom"
import { Mail, ArrowUpRight, Send, Github, Linkedin, Tv2 } from "lucide-react"
import { useEffect, useState } from "react"

export default function MoreContent() {
    const [load, setLoad] = useState<boolean>(false)

    useEffect(() => {
        const title = document.getElementsByTagName('title')
        const link = document.getElementsByTagName('link')
        link[0].href = 'https://tilav.uz/more-contnet'
        title[0].innerText = 'Tilav | More content'
    }, [])
  return (
    <div className="slide-up-down mb-24">
        <div className="flex flex-col items-center mb-8">
            <div className="rounded-full size-28 border flex justify-center items-center sm:mb-10 mb-6">
                <img onLoad={() => setLoad(true)} className={`${load ? "rounded-full size-28" : "hidden"}`} src="https://firebasestorage.googleapis.com/v0/b/total-array-422417-i0.appspot.com/o/image-1.jpg?alt=media&token=01dee4e3-bcd7-4df4-94be-593b87ed9aca" alt="image" />
                <p className={`${load ? "hidden" : "text-2xl font-bold"}`}>TSH</p>
            </div>
            <h1 className="font-bold text-3xl font-mono ">Tilovov Shavqiddin</h1>
            <p className="sm:text-center max-w-[350px]">Feel free to contact us if you have any questions or suggestions.</p>
        </div>
        <ul className="flex flex-col g">
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-slate-800 dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'mailto:shavqiddintilovov0@gmail.com'} className="flex items-center justify-between p-4">
                    <span className="flex gap-2">
                        <Mail />
                        <span>Email</span>
                    </span>
                    <ArrowUpRight />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-slate-800 dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'https://t.me/Tilavuz'} target="_blanck" className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2">
                        <Send />
                        <span>Telegram</span>
                    </span>
                    <ArrowUpRight />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-slate-800 dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'https://github.com/Tilavuz'} target="_blanck" className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2">
                        <Github />
                        <span>Github</span>
                    </span>
                    <ArrowUpRight />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-slate-800 dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'https://www.linkedin.com/shavqiddin-tilovov-626812277/'} target="_blanck" className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2">
                        <Linkedin />
                        <span>Linkiden</span>
                    </span>
                    <ArrowUpRight />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-slate-800 dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'https://t.me/student_of_tuitkf'} className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2">
                        <Tv2 />
                        <span>Telegram Channel</span>
                    </span>
                    <ArrowUpRight />
                </Link>
            </li>
        </ul>
    </div>
  )
}
