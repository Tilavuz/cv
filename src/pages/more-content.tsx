import { Link } from "react-router-dom"
import image from "../../public/image-1.jpg"
import { Mail, ArrowUpRight, Send, Github, Linkedin, Tv2 } from "lucide-react"

export default function MoreContent() {
  return (
    <div className="slide-up-down">
        <div className="flex flex-col items-center mb-8">
            <img className="rounded-full size-28 mb-12" src={image} alt="image" />
            <h1 className="font-bold text-3xl font-mono ">Tilovov Shavqiddin</h1>
            <p className="text-center max-w-[350px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur aliquam unde, beatae necessitatibus.</p>
        </div>
        <ul className="flex flex-col g">
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-black dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'mailto:shavqiddintilovov0@gmail.com'} className="flex items-center justify-between p-4">
                    <span className="flex gap-2">
                        <Mail />
                        <span>Email</span>
                    </span>
                    <ArrowUpRight />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-black dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'/'} className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2">
                        <Send />
                        <span>Telegram</span>
                    </span>
                    <ArrowUpRight />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-black dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'/'} className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2">
                        <Github />
                        <span>Github</span>
                    </span>
                    <ArrowUpRight />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-black dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'/'} className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2">
                        <Linkedin />
                        <span>Linkiden</span>
                    </span>
                    <ArrowUpRight />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 dark:bg-black dark:border-black dark:hover:border-white dark:text-white">
                <Link to={'/'} className="flex items-center justify-between h-full w-full p-4">
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
