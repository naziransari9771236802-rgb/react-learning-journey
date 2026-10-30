import Card from './components/Card'

function App() {
return ( <div className="min-h-screen bg-gray-950 px-6 py-12 text-white"> <h1 className="mb-3 text-center text-4xl font-bold">
Developer Profiles 🚀 </h1>

  <p className="mb-10 text-center text-gray-400">
    Learning React Props with Tailwind CSS
  </p>

  <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6">

    <Card
      name="Nazir Ansari"
      role="Aspiring Frontend Developer"
      skills="HTML, CSS, JavaScript, React"
    />

    <Card
      name="Aman Verma"
      role="Junior Frontend Developer"
      skills="HTML, CSS, JavaScript, React, Tailwind CSS, Git"
    />

    <Card
      name="Aman Khan"
      role="Web Developer"
      skills="HTML, JavaScript, Bootstrap"
    />
  </div>
</div>


)
}

export default App
