import axios from "axios"
import { url } from "../../db/db"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useLoadingImage from "@/hooks/use-loading-image";
import { Image, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom"
import useLoading from "@/hooks/use-loading";
import Loading from "@/components/loading";


interface Project {
  _id: string,
  title: string,
  createDate: string,
  desc: string,
  contents: Array<{
    imgUrl: string;
    desc: string;
    _id: string;
  }>;
}

export default function ProjectsChild() {
    const { id } = useParams()
    const { load, handleLoad } = useLoadingImage()
    const { loading, handleLoading } = useLoading()
    const [project, setProject] = useState<Project | null>(null)

    useEffect(() => {
      const getProject = async () => {
        try {
          const res = await axios.get(url + `/project/${id}`)
          setProject(res.data)
        }catch(err) {
          console.log(err);
        }finally {
          handleLoading()
        }
      }

      getProject()
    }, [])


    
  if(loading) return <Loading />
  return project !== null && !loading ? (
    <div className="pb-24">
        <div className="mb-8">
            <p className="font-mono text-xl opacity-60">{`${new Date(project.createDate).getDay() < 10 ? "0" + new Date(project.createDate).getDay() : new Date(project.createDate).getDay()}-${new Date(project.createDate).getMonth() < 10 ? "0" + new Date(project.createDate).getMonth() : new Date(project.createDate).getMonth()}-${new Date(project.createDate).getFullYear()}`}</p>
            <h3 className="uppercase font-thin text-3xl mb-4">New Project</h3>
            <p className="max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima magnam optio a consectetur illum perferendis laborum nisi nihil iste eos molestiae tenetur voluptate vel fuga ipsum quam asperiores velit ipsam excepturi ab hic veniam reiciendis ipsa? Officiis, facere asperiores.</p>
        </div>
        <div className="flex flex-col gap-8 mb-8">
          {
            project.contents.map(content => {
              return <div key={content._id} className="">
                <div className="mb-4">
                  <img onLoad={() => handleLoad(true)} className={`${load ? "w-full h-full" : "hidden"}`} src={content.imgUrl} alt="image" />
                  <div className={`${!load ? "flex h-[200px] sm:h-[400px] w-full justify-center items-center border-2 bg-slate-300 opacity-45" : ""}`}>
                    {
                      !load && <Image size={120}/> 
                    }
                  </div>
                </div>
                <p>{content.desc}</p>
              </div>
            })
          }
        </div>
        <Link to={'/projects'} className="flex items-center gap-2 font-mono opacity-40 underline underline-offset-4">
          <MoveLeft size={16}/>
          <span>All projects</span>
        </Link>
    </div>
  ) : (
    <div>
      <p className="font-bold">No information yet</p>
    </div>
  )
}
