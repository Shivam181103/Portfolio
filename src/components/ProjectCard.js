import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
const ProjectCard = () => {
    return (
        <a href="https://email.ml" target="_blank" className="relative flex flex-col items-stretch duration-300 ease-out p-7 sm:p-3 group h-100 rounded-2xl">
            <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-950">
            </span>
            <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1">
            </span>
            <span className="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                <span className="block w-full">
                    <img src="/assets/images/projects/email.ml.png" className="w-full h-auto rounded-lg aspect-[16/9] object-cover" />
                </span> <span className="block w-full px-1 mt-5 mb-1 sm:mt-3">
                    <span className="flex items-center mb-0 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                        <span>Email.ML</span>
                        <GoArrowUpRight/> 
                    </span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-400 block truncate">Minimalist temporary Email.</span>
                </span>
            </span>
        </a>
    )
}

export default ProjectCard
