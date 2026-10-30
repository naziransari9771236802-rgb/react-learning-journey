function Card({name, role, skills }) {
  return (
    <div className="m-4 w-full max-w-sm rounded-xl border border-gray-700 bg-gray-800 p-6 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
        {name.charAt(0)}
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>

      <p className="mt-2 text-blue-400">{role}</p>

      <div className="mt-5 border-t border-gray-700 pt-4">
        <h3 className="mb-2 font-semibold">Skills</h3>

        <p className="text-sm text-gray-300">{skills}</p>
      </div>

      <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-700">
        View Profile
      </button>
    </div>
  )
}

export default Card