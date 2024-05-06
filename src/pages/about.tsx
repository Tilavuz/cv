import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import useLoadingImage from "@/hooks/use-loading-image"
import { ArrowUpRight, Github, Image, Linkedin, Mail, Send, Tv2 } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {

  const { load, handleLoad } = useLoadingImage()

  return (
    <div className="slide-up-down pb-24">
      <div className="pb-12">
          <h1 className="font-bold text-3xl font-mono ">About me</h1>
          <p className="text-base font-thin ">Learn more</p>
      </div>
      <div className="flex items-center flex-wrap sm:flex-nowrap justify-between sm:justify-center gap-2 mb-12">
        <div className="max-w-[400px] w-full h-[220px]">
          <img onLoad={() => handleLoad(true)} className={`${load ? "w-full h-full rounded-md dark:shadow dark:shadow-white" : "hidden"}`} src="https://firebasestorage.googleapis.com/v0/b/total-array-422417-i0.appspot.com/o/image3.webp?alt=media&token=6a0e7ba8-5066-4ef8-b48b-cdb4ddafb7e0" alt="image" />
          <div className={`${!load ? "flex max-w-[600px] max-h-[500px] w-full h-full justify-center items-center border-2 bg-slate-300 opacity-45" : ""}`}>
            {
              !load && <Image size={120}/> 
            }
          </div>
        </div>
        <div className="max-w-[400px] w-full h-[220px]">
          <img onLoad={() => handleLoad(true)} className={`${load ? "w-full h-full rounded-md  dark:shadow dark:shadow-white" : "hidden"}`} src="https://firebasestorage.googleapis.com/v0/b/total-array-422417-i0.appspot.com/o/image2%20(1).webp?alt=media&token=3d7430fa-50a5-467f-937c-473fec583450" alt="image" />
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam vitae dolores, dolore sed sapiente maxime nostrum ipsam dolorem accusantium enim nulla facere delectus dolorum, sit doloribus! Voluptas quam, tenetur exercitationem nobis, nam unde doloremque quibusdam explicabo tempore in temporibus aliquid! Ex reiciendis tempora voluptas rem delectus eos tenetur itaque necessitatibus repellendus accusantium nisi quas repellat ad unde aperiam velit modi quam quis ut veritatis, adipisci dolore tempore? Iure temporibus non architecto explicabo adipisci quibusdam laudantium animi culpa ad corporis, magnam accusamus ipsa praesentium vero voluptatum nemo vitae ullam dignissimos, nostrum fuga excepturi tempora qui rem? Molestias perspiciatis doloribus dicta soluta!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>
        <h4 className="font-bold mb-4">Contact me</h4>
        <ul className="flex flex-wrap justify-between">
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 w-1/2 dark:hover:border-white dark:border-black dark:bg-black dark:text-white">
                <Link to={'mailto:shavqiddintilovov0@gmail.com'} className="flex items-center justify-between p-4">
                    <span className="flex gap-2 items-center">
                        <Mail size={18} />
                        <span>Email</span>
                    </span>
                    <ArrowUpRight size={16} />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black dark:hover:border-white dark:border-black border-2 border-white bg-neutral-100 w-1/2 dark:bg-black dark:text-white">
                <Link to={'/'} className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2 items-center">
                        <Send size={18} />
                        <span>Telegram</span>
                    </span>
                    <ArrowUpRight size={16} />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 w-1/2 dark:hover:border-white dark:border-black dark:bg-black dark:text-white">
                <Link to={'/'} className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2 items-center">
                        <Github size={18} />
                        <span>Github</span>
                    </span>
                    <ArrowUpRight size={16} />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 w-1/2 dark:hover:border-white dark:border-black dark:bg-black dark:text-white">
                <Link to={'/'} className="flex items-center justify-between h-full w-full p-4">
                    <span className="flex gap-2 items-center">
                        <Linkedin size={18} />
                        <span>Linkiden</span>
                    </span>
                    <ArrowUpRight size={16} />
                </Link>
            </li>
            <li className="rounded-md hover:border-2 hover:border-black border-2 border-white bg-neutral-100 w-1/2 dark:hover:border-white dark:border-black dark:bg-black dark:text-white">
                <Link to={'/'} className="flex items-center justify-between h-full w-full p-4">
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
