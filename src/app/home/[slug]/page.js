import LandingSection from "@/components/LandingSection";
import ProjectCard from "@/components/ProjectCard";
import WritingCard from "@/components/WritingCard";
import { LinksButton } from "@/components/UI/Buttons";
import Divider from "@/components/UI/Divider";
import SectionHeader from "@/components/UI/SectionHeader";

export default function Home() {
  return (
    <div classNameName='bg-bgColor text-textColor'>
      <LandingSection />
      <Divider text='Checkout my projects' />
      <section id="portfolio">
        <SectionHeader title='Portfolio' description="Here's a glimpse into some of my recent projects. Be sure to check back often, as I'm always adding new and exciting work to my portfolio!"/> 
        <div className="grid items-stretch w-full gap-7 pb-7">
          <div className="grid w-full grid-rows-1 grid-cols-1 sm:grid-cols-2 gap-7 md:grid-cols-3">
            <ProjectCard />
            <ProjectCard /> 
            <ProjectCard />
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-0"> 
          <LinksButton link={"/portfolio" } text={'View Full Portfolio'}/>
        </div>
      </section> 
      <Divider text='Checkout my side-projects' /> 
      <section id="portfolio" >
        <SectionHeader title='Side Projects' description="Here's a glimpse into some of my recent projects. Be sure to check back often, as I'm always adding new and exciting work to my portfolio!"/> 
        <div className="grid items-stretch w-full gap-7 pb-7">
          <div className="grid w-full grid-rows-1 grid-cols-1 sm:grid-cols-2 gap-7 md:grid-cols-3">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> 
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-0"> 
          <LinksButton link={"/portfolio" } text={'View Full Portfolio'}/>
        </div>
      </section>
      <Divider text='Some of my writing' />
      <section id="writings" className='mb-8'>
        <SectionHeader title='Portfolio' description="Here's a glimpse into some of my recent projects. Be sure to check back often, as I'm always adding new and exciting work to my portfolio!"/>
        <div className="flex flex-col items-center pb-7">
          <div className="divide-y dividerline">
            <WritingCard />
            <WritingCard />
            <WritingCard /> 
          </div>
        </div>
        <div className="flex items-center justify-center w-full py-0"> 
          <LinksButton link={"/portfolio" } text={'View all writings'}/>
        </div>
      </section> 
    </div>
  );
}


