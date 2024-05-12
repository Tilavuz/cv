import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import useLoadingImage from "@/hooks/use-loading-image"
import { ArrowUpRight, Github, Image, Linkedin, Mail, Send, Tv2 } from "lucide-react"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function About() {

  const { load, handleLoad } = useLoadingImage()
  useEffect(() => {
    const title = document.getElementsByTagName('title')
    const link = document.getElementsByTagName('link')
    link[0].href = 'https://tilav.uz/about'
    title[0].innerText = 'Tilav | About me'
  }, [])

  return (
    <div className="slide-up-down pb-24">
      <div className="pb-12">
          <h5 className="font-bold text-3xl font-mono ">About me</h5>
          <h1 className="text-base font-thin ">Here you can learn more about me.</h1>
      </div>
      <div className="flex items-center flex-wrap sm:flex-nowrap justify-between sm:justify-center gap-2 mb-12">
        <div className="max-w-[400px] w-full h-[220px]">
          <img width={`100%`} title="about image" loading="eager" height={`100%`} onLoad={() => handleLoad(true)} className={`${load ? "w-full h-full rounded-md dark:shadow dark:shadow-white" : "hidden"}`} src="https://firebasestorage.googleapis.com/v0/b/total-array-422417-i0.appspot.com/o/image3.webp?alt=media&token=6a0e7ba8-5066-4ef8-b48b-cdb4ddafb7e0" alt="image" />
          <div className={`${!load ? "flex max-w-[600px] max-h-[500px] w-full h-full justify-center items-center border-2 bg-slate-300 opacity-45" : ""}`}>
            {
              !load && <Image size={120}/> 
            }
          </div>
        </div>
        <div className="max-w-[400px] w-full h-[220px]">
          <img width={`100%`} height={`100%`} title="about image" loading="eager" onLoad={() => handleLoad(true)} className={`${load ? "w-full h-full rounded-md  dark:shadow dark:shadow-white" : "hidden"}`} src="https://firebasestorage.googleapis.com/v0/b/total-array-422417-i0.appspot.com/o/image2%20(1).webp?alt=media&token=3d7430fa-50a5-467f-937c-473fec583450" alt="image" />
          <div className={`${!load ? "flex max-w-[600px] max-h-[500px] w-full h-full justify-center items-center border-2 bg-slate-300 opacity-45" : ""}`}>
            {
              !load && <Image size={120}/> 
            }
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full pb-20">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-base">By the way</AccordionTrigger>
          <AccordionContent>
            I have 10 years of experience in Photoshop. (this is a joke:)
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-base">My goal</AccordionTrigger>
          <AccordionContent>
            When I was young, I wanted to be a fisherman, but as I grew up, my passion changed. Now I'm a front-end developer, but I didn't work on a specific campaign, but with our team we provided websites to several state organizations of Uzbekistan. Yes, I have a team. I gathered my team from my university. Our goal was to gain experience and work on a big campaign.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold text-base">About me</AccordionTrigger>
          <AccordionContent>
            I was born in 2003 in Kashkadarya. In 2021, I entered the Termiz Engineering Institute on a grant basis, but because I was interested in the IT field, I studied at this institute for a year, and in 2022 I entered the Karshi branch of the Tashkent University of Information Technologies. At first, I started learning HTML technology on the computer of the library of my institute in Termiz. My teachers were YouTube and Telegram, and later when I came to Karshi to study, I attended the Uzprogers training center for 8 months in the frontend react course, and during this time I learned nodejs backend technology from YouTube. I can easily do MERN projects now.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>
        <h4 className="font-bold mb-4">Contact me</h4>
        <ul className="flex flex-wrap justify-between">
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 w-1/2 dark:hover:border-white dark:border-black dark:bg-slate-800 dark:text-white">
                <Link to={'mailto:shavqiddintilovov0@gmail.com'} className="flex items-center justify-between p-4">
                    <span className="flex gap-2 items-center">
                        <Mail size={18} />
                        <span>Email</span>
                    </span>
                    <ArrowUpRight size={16} />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black dark:hover:border-white dark:border-black border-2 border-white bg-neutral-100 w-1/2 dark:bg-slate-800 dark:text-white">
                <Link to={'https://t.me/Tilavuz'} target="_blanck" className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2 items-center">
                        <Send size={18} />
                        <span>Telegram</span>
                    </span>
                    <ArrowUpRight size={16} />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 w-1/2 dark:hover:border-white dark:border-black dark:bg-slate-800 dark:text-white">
                <Link to={'https://github.com/Tilavuz'} target="_blanck" className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2 items-center">
                        <Github size={18} />
                        <span>Github</span>
                    </span>
                    <ArrowUpRight size={16} />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 w-1/2 dark:hover:border-white dark:border-black dark:bg-slate-800 dark:text-white">
                <Link to={'https://www.linkedin.com/shavqiddin-tilovov-626812277/'} className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2 items-center">
                        <Linkedin size={18} />
                        <span>Linkiden</span>
                    </span>
                    <ArrowUpRight size={16} />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 w-1/2 dark:hover:border-white dark:border-black dark:bg-slate-800 dark:text-white">
                <Link to={'https://t.me/student_of_tuitkf'} className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2 items-center">
                        <Tv2 size={18}/>
                        <span>Telegram Channel</span>
                    </span>
                    <ArrowUpRight size={16} />
                </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}
