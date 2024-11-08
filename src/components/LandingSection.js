import React from 'react'  
import { LinksButton } from './UI/Buttons'
const LandingSection = () => {
    return (
        <div className="relative z-20 w-full mx-auto mt-16 px-4 md:mt-24 lg:mt-32 xl:px-0">
            <div className="flex flex-col items-center md:flex-row">
                <div className="relative w-full md:w-1/2">
                    <h1 className="mb-5 text-4xl font-bold leading-tight md:text-4xl lg:text-6xl dark:text-white">
                        Hello, I'm Shivam.
                    </h1>
                    <p className="mb-6 text-base text-neutral-600 dark:text-neutral-400">
                        I'm a front-end programmer living in Nanjing. <br className="hidden lg:block" />I focus on Web development.
                    </p>
                    <p className="mb-2 font-semibold text-neutral-800 dark:text-neutral-200">
                        I can help you out with:
                    </p>
                    <ul className="py-2 space-y-[3px] text-sm list-disc list-inside text-neutral-500 dark:text-neutral-400">
                        <li>Vue.js Development</li>
                        <li>React.js Development</li>
                        <li>Node.js Development</li>
                        <li>Website Design</li>
                        <li>and more...</li>
                    </ul> 
                    <LinksButton link={"https://twitter.com/0xKaiBi" } text={'Follow me on'}/>
                </div>
                <div className="relative justify-end hidden w-full mt-10 md:flex md:pl-10 md:w-1/2 md:mt-0 md:translate-y-4 xl:translate-y-0">
                    <div className="relative z-50 w-full">
                        <div className="absolute bottom-0 z-40 w-16 h-16 -translate-x-6 -translate-y-1/2 lg:top-auto top-0 lg:-translate-y-[330px] rounded-full">
                            <span className="relative z-20 flex items-center justify-center w-full h-full text-2xl border-8 border-white rounded-full dark:border-neutral-950 bg-neutral-100 dark:bg-neutral-900">
                                <span className="flex items-center justify-center w-full h-full bg-white border border-dashed rounded-full dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700">👋</span>
                            </span>
                        </div>
                        <div className="relative z-30 px-10">
                            <img src='/images/avatar.png' loading="eager" decoding="auto" className="relative z-30 w-full aspect-[790/1189] md:max-w-md mx-auto dark:-translate-y-0.5 " />
                        </div>
                        <div className="absolute bottom-0 right-0 z-20 w-full h-full lg:h-[420px] translate-x-0 -translate-y-px border border-dashed rounded-2xl bg-gradient-to-r dark:from-neutral-950 dark:via-black dark:to-neutral-950 from-white via-neutral-50 to-white border-neutral-300 dark:border-neutral-700"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingSection
