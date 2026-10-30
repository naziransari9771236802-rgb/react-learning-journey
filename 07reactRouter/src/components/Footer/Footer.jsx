import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
return ( <footer className="bg-white border-t border-gray-200"> <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-10">

            <div className="md:flex md:justify-between">

                {/* Logo */}
                <div className="mb-6 md:mb-0">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-16"
                            alt="Website Logo"
                        />
                    </Link>

                    <p className="mt-3 text-sm text-gray-500 max-w-xs">
                        Building modern and responsive web experiences
                        with creativity and technology.
                    </p>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

                    {/* Resources */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Resources
                        </h2>

                        <ul className="text-gray-500 font-medium space-y-4">
                            <li>
                                <Link to="/" className="hover:text-orange-700 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-orange-700 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-orange-700 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Follow Us
                        </h2>

                        <ul className="text-gray-500 font-medium space-y-4">
                            <li>
                                <a
                                    href="https://github.com/naziransari9771236802-rgb"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-orange-700 transition-colors"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-orange-700 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <Link to="/github" className="hover:text-orange-700 transition-colors">
                                    My Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Legal
                        </h2>

                        <ul className="text-gray-500 font-medium space-y-4">
                            <li>
                                <Link to="#" className="hover:text-orange-700 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-orange-700 transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

            {/* Copyright */}
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500">
                    © 2026
                    <Link to="/" className="ml-1 font-semibold hover:text-orange-700">
                        Nazir Ansari
                    </Link>
                    . All Rights Reserved.
                </span>

                <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <a
                        href="https://github.com/naziransari9771236802-rgb"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-gray-500 hover:text-orange-700"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-gray-500 hover:text-orange-700"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

        </div>
    </footer>
)

}
