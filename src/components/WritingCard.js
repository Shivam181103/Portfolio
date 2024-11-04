import React from 'react' 
const WritingCard = () => {
    return (
        <div className="relative cursor-pointer group py-4 first:pt-0 last:pb-0 grid grid-rows-1 grid-cols-1 sm:grid-cols-[3fr_1fr] gap-7 justify-items-end" onclick="location.href = '/blog/mastering-dynamic-theming-in-tailwind-css-a-step-by-step-guide'">
            <div>
                <h2 className="flex items-start gap-1 mb-3">
                    <a href="/blog/mastering-dynamic-theming-in-tailwind-css-a-step-by-step-guide" className="text-xl font-bold leading-tight tracking-tight sm:text-2xl dark:text-neutral-100"> Mastering Dynamic Theming in Tailwind CSS: A Step-by-Step Guide </a>
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
                    <span>Master the art of dynamic theming in Tailwind CSS and create adaptable, user-centric interfaces in your React application. This final part of our series culminates your journey from basic setup to advanced styling, empowering you to build flexible, professional-grade web applications that respond to user preferences in real-time.</span>
                </p>
                <div className="mt-2.5 text-xs text-neutral-500 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-neutral-100"> 1 May 2024 </div>
            </div>
            <div className="flex w-full h-full">
                <div className="block w-full object-cover overflow-hidden rounded-xl h-full   sm:size-36">
                    <picture>
                        <source srcset="/assets/images/posts/react-webpack-4-mini.jpg" type="image/avif" />
                        <source srcset="/assets/images/posts/react-webpack-4-mini.jpg" type="image/webp" />
                        <source srcset="/assets/images/posts/react-webpack-4-mini.jpg" type="image/jpeg" />
                        <img src="/assets/images/posts/react-webpack-4-mini.jpg" alt="Portfolio project thumbnail" className="rounded-xl object-cover  transition-all duration-700 ease-out group-hover:scale-105 h-full w-full sm:size-36" width="200" height="200" loading="lazy" decoding="async" />
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default WritingCard
