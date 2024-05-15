import Loading from "@/components/loading"
import ProjectCard from "@/components/project-card"
import useLoading from "@/hooks/use-loading"
import axios from "axios"
import { useEffect, useState } from "react"

const url = 'http://localhost:3000/api'

interface Data {
  _id: string,
  title: string,
  createDate: string,
  desc: string,
  contents: [
    {
      imgUrl: string,
      desc: string,
    }
  ]
}

export default function Projects() {
  const [projects, setProjects] = useState<Data[] | null>(null)
  const { loading, handleLoading } = useLoading()

  useEffect(() => {
    const title = document.getElementsByTagName('title')
    const link = document.getElementsByTagName('link')
    link[0].href = 'https://tilav.uz/projects'
    title[0].innerText = 'Tilav | Projects'
  }, [])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(url + "/projects")
        setProjects(res.data)
      }catch(err) {
        console.log(err);
      }finally {
        handleLoading()
      }
    }
    getProjects()
  }, [handleLoading])

  return loading ? <Loading /> : (
    <div className="slide-up-down pb-24">
      <div className="sm:mb-12 mb-8">
        <h1 className="font-bold text-4xl">Projects</h1>
        <p className="font-thin">My independent projects</p>
      </div>
      {
        projects === null ? (
          <div>
              <p className="font-bold">No information yet</p>
          </div>
        ) : (
        <div className="flex flex-col gap-4">
          {
            projects?.map(project => {
              return <ProjectCard key={project?._id} imgUrl={project?.contents[0]?.imgUrl} title={project?.title} desc={project?.desc} createDate={`${new Date(project.createDate).getDay() < 10 ? "0" + new Date(project.createDate).getDay() : new Date(project.createDate).getDay()}-${new Date(project.createDate).getMonth() < 10 ? "0" + new Date(project.createDate).getMonth() : new Date(project.createDate).getMonth()}-${new Date(project.createDate).getFullYear()}`} seeMore={project?._id}/>
            })
          }
        </div>
        )
      }
    </div>
  )
}
