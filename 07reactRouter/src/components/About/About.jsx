import React from 'react'

export default function About() {
    return (
        <div className="bg-white py-16">

            <div className="container mx-auto px-6">

                {/* About Section */}
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

                    {/* Image */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=85"
                            alt="Developers working together"
                            className="w-full rounded-2xl object-cover shadow-xl"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">

                        <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                            About Us
                        </span>

                        <h1 className="text-3xl font-extrabold text-gray-900 md:text-5xl">
                            We Build Modern
                            <span className="text-orange-600">
                                {' '}Web Solutions
                            </span>
                        </h1>

                        <p className="leading-8 text-gray-600">
                            We are passionate about modern web development.
                            Our goal is to create beautiful, fast and
                            user-friendly web applications using React
                            and other modern technologies.
                        </p>

                        <p className="leading-8 text-gray-600">
                            We believe in learning, creativity and
                            continuous improvement. Every project is
                            an opportunity to build something better.
                        </p>

                        {/* Mission */}
                        <div className="space-y-5 pt-4">

                            <div className="flex items-start gap-4">
                                <span className="rounded-lg bg-orange-100 p-3 text-xl">
                                    🎯
                                </span>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        Our Mission
                                    </h3>
                                    <p className="text-gray-600">
                                        To make web development simple
                                        and accessible to everyone.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="rounded-lg bg-orange-100 p-3 text-xl">
                                    🚀
                                </span>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        Our Vision
                                    </h3>
                                    <p className="text-gray-600">
                                        To create innovative digital
                                        experiences for the future.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="rounded-lg bg-orange-100 p-3 text-xl">
                                    ⭐
                                </span>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        Our Values
                                    </h3>
                                    <p className="text-gray-600">
                                        Quality, creativity, teamwork
                                        and continuous learning.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}