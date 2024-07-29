import React from 'react';

function Education() {
    return (
        <section className="flex flex-col lg:flex-row bg-neutral-950 dark:text-white sm:text-white">
            <div className="container max-w-5xl px-4 py-12 mx-auto ">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <h3 className="text-3xl font-bold">Education</h3>
                            <div className="flex flex-col sm:flex-row sm:space-x-8 sm:items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                <div className="sm:pr-8">
                                    <h3 className="text-xl font-semibold tracking-wide">University of Rizal System</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">2022 - Present</time>
                                    <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:space-x-8 sm:items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                <div className="sm:pr-8">
                                    <h3 className="text-xl font-semibold tracking-wide">Our Lady of Fatima University</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">2020-2022</time>
                                    <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:space-x-8 sm:items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                <div className="sm:pr-8">
                                    <h3 className="text-xl font-semibold tracking-wide">Holy Child School of Antipolo</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">2010-2020</time>
                                    <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300"/>
			<div className="container max-w-5xl px-4 py-12 mx-auto flex-col">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <h3 className="text-3xl font-bold">Experience</h3>
                            <div className="flex flex-col sm:flex-row sm:space-x-8 sm:items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                <div className="sm:pr-8">
                                    <h3 className="text-xl font-semibold tracking-wide">NC II TRAINING</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-600">PRESENT</time>
                                    <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
