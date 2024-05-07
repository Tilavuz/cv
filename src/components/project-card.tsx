import useLoadingImage from "@/hooks/use-loading-image"
import { Image } from "lucide-react"
import { Link } from "react-router-dom"

export default function ProjectCard({ imgUrl, title, desc, createDate, seeMore }:{imgUrl: string, title: string, desc: string, createDate: string, seeMore: string}) {
    const { load, handleLoad } = useLoadingImage()

  return (
    <div className="flex-wrap items-start gap-6 flex sm:flex-nowrap">
        <div className="max-w-[280px] w-full h-[160px]">
          <Link className={`${load ? "" : "hidden"}`} to={`${seeMore}`}>
            <img onLoad={() => handleLoad(true)} className="w-full h-full rounded-md dark:shadow dark:shadow-white" src={imgUrl} alt={`${title}' image`} />
          </Link>
          <div className={`${!load ? "flex max-w-[600px] max-h-[500px] w-full h-full justify-center items-center border-2 bg-slate-300 opacity-45" : ""}`}>
            {
              !load && <Image size={120}/> 
            }
          </div>
        </div>
        <div className="">
            <h5 className="font-bold">{`${title}`}</h5>
            <p className="font-thin text-sm">{createDate}</p>
            <p className="max-w-[370px] line-clamp-4 tracking-widest">{desc}</p>
        </div>
    </div>
  )
}
