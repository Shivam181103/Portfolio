import SectionHeader from '@/components/UI/SectionHeader'
import React from 'react'

const About = () => {
    return (
        <section className="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
            <SectionHeader title='About Me' description="Hello 👋 I'm Abhinay, a senior frontend engineer from India with expertise in Vue.js, React.js, and JavaScript. I thrive on tackling challenges and delivering high-performance, scalable web applications. With a passion for lean product development and a drive to continuously learn and grow, I'm always excited to work on innovative projects that make a real impact." />
            <img src="/assets/images/about.avif" class="relative z-30 w-full my-10 rounded-xl" />
            <h2 class="mt-5 mb-2 text-2xl font-bold lg:mt-10 sm:mt-6 dark:text-neutral-200">
                Experience
            </h2>
            <div className='px-5 pt-10'>
                <ExeperienceSection/>
                <ExeperienceSection/>
                <ExeperienceSection/>
                <ExeperienceSection/>
            </div>
        </section >
    )
}

const ExeperienceSection = () => {
    return (
        <div class="pb-10 border-l last:border-none border-gray-200 dark:border-neutral-700">
            <div id="experience" class="relative flex flex-col justify-start pl-12">
                <div class="absolute top-0 left-0 z-40 flex items-center justify-center -translate-x-1/2 bg-white border rounded-full dark:bg-neutral-950 w-14 h-14 border-neutral-300 dark:border-neutral-700">
                    <img src="/assets/company/highlevel.png" alt="HighLevel" class="w-8 h-8" />
                </div>
                <p class="text-xs uppercase text-neutral-400 dark:text-neutral-500 trackign-widest"> Dec 2022 · Present </p>
                <div class="space-y-0 mb-3">
                    <h3 class="text-lg font-bold dark:text-neutral-100">Sr. Software Development Engineer - SDE 3 (Vue3, Nest.js)</h3>
                    <p class="text-base font-medium dark:text-neutral-300">HighLevel</p>
                </div>
                <div class="flex flex-col gap-1">
                    <p class="grid auto-rows-max grid-cols-[64px_1fr] gap-3 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                        <span class="block text-neutral-400 dark:text-neutral-500 text-right">Challenge:</span>
                        <span class="flex">Legacy monolithic frontend architecture hindered system agility and responsiveness, requiring a transformation into agile micro-frontends to improve performance and efficiency.</span>
                    </p>
                    <p class="grid auto-rows-max grid-cols-[64px_1fr] gap-3 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                        <span class="block text-neutral-400 dark:text-neutral-500 text-right">Action:</span>
                        <span class="flex">Implemented micro-frontend architecture, increasing system agility and responsiveness.</span>
                    </p>
                    <p class="grid auto-rows-max grid-cols-[64px_1fr] gap-3 text-sm font-normal text-neutral-600 dark:text-neutral-400">
                        <span class="block text-neutral-400 dark:text-neutral-500 text-right">Result:</span>
                        <span class="flex">Contributed to the product's scalability by ensuring the frontend could handle the increase from 15k to 75k sub-accounts within a year.</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About
