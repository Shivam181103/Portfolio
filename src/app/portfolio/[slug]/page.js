import Divider from '@/components/UI/Divider'
import SectionHeader from '@/components/UI/SectionHeader'
import React from 'react'

const Portfolio = () => {
    return (
        <section className="relative z-20 max-w-2xl mx-auto my-12 px-7 lg:px-0">
            <SectionHeader title='Portfolio' description="I am passionate about transforming new ideas into reality through innovative projects. Explore this portfolio to see my latest works, showcasing both my creativity and technical expertise." />
            <Divider text='Highlevel' />
            <div className="mt-7">
                <div className="divide-y dividerline">
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </div>
            </div>
        </section >
    )
}

const PortfolioCard = () => {
    return (
        <div className="py-4 first:pt-0">
            <a data-layout="list" href="portfolio/highlevel-building-a-phone-integration-micro-frontend-empowering-agencies-with-seamless-telephony-management" className="relative flex flex-col w-full items-stretch group rounded-xl transition-all duration-700 ease-out">
                <div className="w-full h-full rounded-xl flex flex-row-reverse gap-3 justify-between"> <div className="block w-full object-cover overflow-hidden rounded-xl h-48 md:h-44">
                    <picture>
                        <source srcset="/assets/project/hl-phone-integration-mf/cover.jpeg" type="image/avif" />
                        <source srcset="/assets/project/hl-phone-integration-mf/cover.jpeg" type="image/webp" />
                        <source srcset="/assets/project/hl-phone-integration-mf/cover.jpeg" type="image/jpeg" />
                        <img src="/assets/project/hl-phone-integration-mf/cover.jpeg" alt="Portfolio project thumbnail" className="rounded-xl object-cover w-full transition-all duration-700 ease-out group-hover:scale-105 h-48 md:h-44" width="800" height="450" loading="lazy" decoding="async" />
                    </picture>
                </div>
                    <div className="block w-full divide-y-4 divide-transparent">
                        <div className="flex relative gap-2 items-start justify-start mb-0 font-semibold tracking-tight text-neutral-800 hover:text-black dark:text-neutral-100 dark:hver:text-white text-lg">
                            <div className="line-clamp-2" title="Building a Phone Integration Micro Frontend: Empowering Agencies with Seamless Telephony Management">Building a Phone Integration Micro Frontend: Empowering Agencies with Seamless Telephony Management</div>
                        </div>
                        <div className="text-sm text-neutral-900 font-medium dark:text-neutral-400"> HighLevel </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-4 md:line-clamp-3 group-hover:text-neutral-900 dark:group-hover:text-neutral-100"> This project overviews the Phone Integration Micro Frontend, a self-contained HighLevel web app built on micro frontend architecture, managing telephony integrations and subaccounts management functionality for an Agency.
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Portfolio
