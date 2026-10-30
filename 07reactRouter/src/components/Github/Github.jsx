import { useCallback, useEffect, useState } from 'react'

export default function Github() {

    const username = "naziransari9771236802-rgb"

    const [userData, setUserData] = useState(null)
    const [followers, setFollowers] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    // Fetch GitHub Data

    const fetchGithubData = useCallback(async () => {

        setLoading(true)
        setError("")

        try {

            // Fetch User Details

            const userResponse = await fetch(
                `https://api.github.com/users/${username}`
            )

            if (!userResponse.ok) {
                if (userResponse.status === 403) {
                    throw new Error("GitHub API rate limit reached. Please try again later.")
                }

                if (userResponse.status === 404) {
                    throw new Error("GitHub user not found!")
                }

                throw new Error("Unable to fetch GitHub profile.")
            }

            const user = await userResponse.json()

            setUserData(user)

            // Fetch Followers

            const followersResponse = await fetch(
                `https://api.github.com/users/${username}/followers?per_page=100`
            )

            if (!followersResponse.ok) {
                throw new Error("Unable to fetch followers.")
            }

            const followersData = await followersResponse.json()

            setFollowers(followersData)

        } catch (err) {

            setError(err.message)

        } finally {

            setLoading(false)

        }

    }, [username])

    useEffect(() => {

        fetchGithubData()

    }, [fetchGithubData])


    // Search Followers

    const filteredFollowers = followers.filter((follower) =>
        follower.login.toLowerCase().includes(search.toLowerCase())
    )


    return (

        <div className="min-h-screen bg-gray-50 px-6 py-20">

            <div className="mx-auto max-w-5xl">

                {/* Heading */}

                <div className="mb-12 text-center">

                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                        My Coding Journey
                    </span>

                    <h1 className="mt-5 text-4xl font-extrabold text-gray-900">
                        Explore My <span className="text-orange-600">GitHub</span>
                    </h1>

                    <p className="mt-4 text-gray-600">
                        Building projects, learning new technologies and improving every day.
                    </p>

                </div>


                {/* Profile Card */}

                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

                    <div className="h-36 bg-gradient-to-r from-gray-900 to-orange-600"></div>

                    <div className="px-8 pb-10 text-center">

                        <img
                            src={`https://github.com/${username}.png`}
                            alt="GitHub Profile"
                            className="mx-auto -mt-16 h-32 w-32 rounded-full border-4 border-white shadow-lg"
                        />

                        <h2 className="mt-5 text-3xl font-bold text-gray-900">
                            Nazir Ansari
                        </h2>

                        <p className="mt-2 text-gray-500">
                            @{username}
                        </p>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
                            Aspiring Frontend Developer | Learning React,
                            JavaScript, HTML, CSS and Tailwind CSS.
                            Passionate about creating modern web applications.
                        </p>


                        {/* Statistics */}

                        {loading && !userData ? (

                            <p className="mt-8 text-orange-600 animate-pulse">
                                Loading Statistics...
                            </p>

                        ) : userData && (

                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                                <div className="rounded-xl bg-orange-50 p-5">
                                    <h3 className="text-3xl font-bold text-orange-600">
                                        {userData.followers}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Followers
                                    </p>
                                </div>

                                <div className="rounded-xl bg-orange-50 p-5">
                                    <h3 className="text-3xl font-bold text-orange-600">
                                        {userData.following}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Following
                                    </p>
                                </div>

                                <div className="rounded-xl bg-orange-50 p-5">
                                    <h3 className="text-3xl font-bold text-orange-600">
                                        {userData.public_repos}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Repositories
                                    </p>
                                </div>

                            </div>

                        )}


                        {/* Buttons */}

                        <div className="mt-8 flex flex-wrap justify-center gap-4">

                            <a
                                href={`https://github.com/${username}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
                            >
                                Visit My GitHub →
                            </a>

                            <a
                                href={`https://github.com/${username}?tab=repositories`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-gray-300 px-7 py-3 font-semibold text-gray-800 transition hover:bg-gray-100"
                            >
                                View Projects
                            </a>

                        </div>

                    </div>

                </div>


                {/* Skills */}

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">

                    <div className="rounded-xl bg-white p-7 text-center shadow">
                        <h3 className="text-xl font-bold text-orange-600">
                            JavaScript
                        </h3>
                        <p className="mt-2 text-gray-500">
                            Learning & Building
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-7 text-center shadow">
                        <h3 className="text-xl font-bold text-orange-600">
                            React
                        </h3>
                        <p className="mt-2 text-gray-500">
                            Frontend Development
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-7 text-center shadow">
                        <h3 className="text-xl font-bold text-orange-600">
                            Projects
                        </h3>
                        <p className="mt-2 text-gray-500">
                            Practical Experience
                        </p>
                    </div>

                </div>


                {/* Followers Section */}

                <div className="mt-16">

                    <div className="mb-8 text-center">

                        <h2 className="text-3xl font-extrabold text-gray-900">
                            My <span className="text-orange-600">GitHub Followers</span>
                        </h2>

                        <p className="mt-3 text-gray-500">
                            Developers connected with my coding journey.
                        </p>

                    </div>


                    {/* Search & Refresh */}

                    <div className="mb-8 flex flex-col gap-4 sm:flex-row">

                        <input
                            type="text"
                            placeholder="Search followers by username..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                        />

                        <button
                            onClick={fetchGithubData}
                            disabled={loading}
                            className="rounded-xl bg-orange-600 px-7 py-4 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading ? "Loading..." : "↻ Refresh"}
                        </button>

                    </div>


                    {/* Loading Animation */}

                    {loading ? (

                        <div className="flex flex-col items-center justify-center py-16">

                            <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-200 border-t-orange-600"></div>

                            <p className="mt-5 font-medium text-gray-500">
                                Fetching GitHub Followers...
                            </p>

                        </div>

                    ) : error ? (

                        // Error Message

                        <div className="rounded-2xl bg-red-50 p-8 text-center">

                            <p className="font-semibold text-red-600">
                                {error}
                            </p>

                            <button
                                onClick={fetchGithubData}
                                className="mt-5 rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700"
                            >
                                Try Again
                            </button>

                        </div>

                    ) : followers.length === 0 ? (

                        // Empty State

                        <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-md">

                            <div className="text-6xl">
                                🚀
                            </div>

                            <h3 className="mt-5 text-2xl font-bold text-gray-900">
                                Your Developer Journey Starts Here!
                            </h3>

                            <p className="mx-auto mt-3 max-w-md text-gray-500">
                                No public followers yet. Keep building amazing projects
                                and sharing your coding journey with the developer community.
                            </p>

                            <a
                                href={`https://github.com/${username}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-block rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
                            >
                                Explore My GitHub →
                            </a>

                        </div>

                    ) : filteredFollowers.length === 0 ? (

                        // Search Empty State

                        <div className="rounded-xl bg-white p-10 text-center shadow">

                            <p className="text-gray-500">
                                No followers found matching "{search}".
                            </p>

                        </div>

                    ) : (

                        // Followers Cards

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {filteredFollowers.map((follower) => (

                                <div
                                    key={follower.id}
                                    className="group rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >

                                    <img
                                        src={follower.avatar_url}
                                        alt={follower.login}
                                        className="mx-auto h-24 w-24 rounded-full border-4 border-orange-100 transition group-hover:border-orange-500"
                                    />

                                    <h3 className="mt-4 text-lg font-bold text-gray-900">
                                        {follower.login}
                                    </h3>

                                    <a
                                        href={follower.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-block rounded-lg bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                                    >
                                        View Profile →
                                    </a>

                                </div>

                            ))}

                        </div>

                    )}

                </div>


                {/* Footer */}

                <div className="mt-16 border-t border-gray-200 pt-8 text-center">

                    <p className="text-gray-500">
                        Built with ❤️ by
                        <span className="font-bold text-orange-600">
                            {" "}Nazir Ansari
                        </span>
                    </p>

                    <p className="mt-2 text-sm text-gray-400">
                        React.js | Tailwind CSS | GitHub REST API
                    </p>

                </div>

            </div>

        </div>

    )

}