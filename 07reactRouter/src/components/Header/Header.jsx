import { Link, NavLink } from 'react-router-dom'

function Header() {
    const navItems = [
        { name: 'Home', path: '/', end: true },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Github', path: '/github' }
    ]

    return (
        <header className="sticky top-0 z-50 shadow-md">
            <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3">
                <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12 mr-3"
                            alt="Website Logo"
                        />
                    </Link>

                    {/* Login and Get Started */}
                    <div className="flex items-center gap-3 lg:order-2">
                        <Link
                            to="/"
                            className="text-gray-800 hover:text-orange-700 font-medium text-sm px-4 py-2"
                        >
                            Log in
                        </Link>

                        <Link
                            to="/contact"
                            className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center lg:order-1">
                        <ul className="flex flex-wrap items-center gap-5 lg:gap-8 font-medium">

                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        end={item.end}
                                        className={({ isActive }) =>
                                            `block py-2 transition-colors duration-200 ${
                                                isActive
                                                    ? 'text-orange-700 font-semibold'
                                                    : 'text-gray-700 hover:text-orange-700'
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header