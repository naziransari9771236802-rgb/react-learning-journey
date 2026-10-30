export default function Contact() {
    return (
        <div className="bg-white py-16">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12 text-center">
                    <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                        Contact Us
                    </span>

                    <h1 className="mt-5 text-4xl font-extrabold text-gray-900">
                        Let's Start a <span className="text-orange-600">Conversation</span>
                    </h1>

                    <p className="mt-4 text-gray-600">
                        Have a question or project in mind? We would love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    {/* Left Image and Details */}
                    <div className="space-y-6">

                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&auto=format&fit=crop&q=85"
                            alt="Team working together"
                            className="h-72 w-full rounded-2xl object-cover shadow-lg"
                        />

                        <div className="rounded-2xl bg-gray-100 p-8">

                            <h2 className="mb-6 text-2xl font-bold text-gray-900">
                                Get in touch
                            </h2>

                            <div className="space-y-5">

                                <div className="flex items-center gap-4">
                                    <span className="rounded-lg bg-orange-100 p-3 text-xl">📍</span>
                                    <div>
                                        <h3 className="font-bold">Location</h3>
                                        <p className="text-gray-600">India</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="rounded-lg bg-orange-100 p-3 text-xl">✉️</span>
                                    <div>
                                        <h3 className="font-bold">Email</h3>
                                        <p className="text-gray-600">Contact us through email</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="rounded-lg bg-orange-100 p-3 text-xl">💻</span>
                                    <div>
                                        <h3 className="font-bold">Working Hours</h3>
                                        <p className="text-gray-600">Monday - Saturday</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            alert("Thank you! Your message has been submitted.")
                        }}
                        className="rounded-2xl border border-gray-200 p-8 shadow-lg"
                    >

                        <h2 className="mb-2 text-2xl font-bold text-gray-900">
                            Send us a message
                        </h2>

                        <p className="mb-6 text-gray-500">
                            Fill in the details below.
                        </p>

                        <div className="space-y-5">

                            <div>
                                <label htmlFor="name" className="mb-2 block font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block font-medium">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="mb-2 block font-medium">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-2 block font-medium">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-orange-600 py-3 font-bold text-white transition hover:bg-orange-700"
                            >
                                Send Message →
                            </button>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}