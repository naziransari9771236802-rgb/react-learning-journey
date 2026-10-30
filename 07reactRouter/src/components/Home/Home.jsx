import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4">

            {/* Hero Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16">

                {/* Left Content */}
                <div className="space-y-6 text-center md:text-left">

                    <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                        Welcome to React Router
                    </span>

                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                        Build Modern
                        <span className="text-orange-600"> Web Experiences</span>
                    </h1>

                    <p className="text-lg leading-8 text-gray-600">
                        Learn React Router and create powerful, fast and
                        responsive web applications with modern technologies.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:justify-start">

                        <Link
                            to="/about"
                            className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
                        >
                            Explore More →
                        </Link>

                        <Link
                            to="/contact"
                            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
                        >
                            Contact Us
                        </Link>

                    </div>

                    <div className="flex flex-wrap justify-center gap-8 pt-5 md:justify-start">

                        <div>
                            <h3 className="text-xl font-bold text-orange-600">Fast</h3>
                            <p className="text-sm text-gray-500">Performance</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-orange-600">Modern</h3>
                            <p className="text-sm text-gray-500">Technology</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-orange-600">Easy</h3>
                            <p className="text-sm text-gray-500">Navigation</p>
                        </div>

                    </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&auto=format&fit=crop&q=85"
                        alt="Developer working on a laptop"
                        className="w-full rounded-2xl object-cover shadow-2xl"
                    />

                    <div className="absolute -bottom-5 -left-3 rounded-xl bg-white p-4 shadow-lg sm:left-5">
                        <p className="font-bold text-gray-900">
                            Build. Learn. Create.
                        </p>
                        <p className="text-sm text-gray-500">
                            Your coding journey starts here.
                        </p>
                    </div>
                </div>

            </section>

            {/* Features Section */}
            <section className="py-20">

                <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                    Why Choose Us?
                </h2>

                <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
                    Explore modern web development with simple tools
                    and powerful technologies.
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

                    <div className="rounded-xl bg-orange-50 p-8 text-center">
                        <h3 className="mb-3 text-xl font-bold text-gray-900">
                            ⚡ Fast Performance
                        </h3>
                        <p className="text-gray-600">
                            Create fast and smooth web experiences.
                        </p>
                    </div>

                    <div className="rounded-xl bg-blue-50 p-8 text-center">
                        <h3 className="mb-3 text-xl font-bold text-gray-900">
                            💻 Modern Design
                        </h3>
                        <p className="text-gray-600">
                            Build beautiful and responsive interfaces.
                        </p>
                    </div>

                    <div className="rounded-xl bg-green-50 p-8 text-center">
                        <h3 className="mb-3 text-xl font-bold text-gray-900">
                            🚀 Easy Navigation
                        </h3>
                        <p className="text-gray-600">
                            Navigate between pages with React Router.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    )
}