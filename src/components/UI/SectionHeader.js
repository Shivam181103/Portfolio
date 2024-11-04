import React from 'react'

const SectionHeader = ({title , description}) => {
    return (
        <div id="SectionHeader" className="relative grid grid-cols-1 md:grid-cols-2 gap-7 items-center mb-14">
            <div className="flex-col gap-1">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100"> {title} </h2>
                <p className="text-base text-neutral-600 dark:text-neutral-400"> {description} </p>
            </div>
            <div className="hidden md:block relative w-full pl-5 overflow-x-hidden md:pl-0">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-neutral-300 md:dark:to-neutral-600">
                </div> <div className="w-full h-px border-t border-solid border-neutral-300 dark:border-neutral-600">
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
