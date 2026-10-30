import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState('white')

  const colors = [
    {name: 'Red', value: 'red '},
    {name: 'Green', value: 'green'},
    {name: 'Blue', value: 'blue'},
    {name: 'Yellow', value: 'yellow'},
    {name: 'Purple', value: 'purple'},
    {name: 'Orange', value: 'orange'},
    { name: 'Pink', value: 'pink' },
    { name: 'Black', value: 'black' },

  ]
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-8 p-6 transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <h1 className="rounded-2xl bg-white px-6 py-4 text-center text-3xl font-extrabold text-gray-900 shadow-xl sm:text-5xl">
        Background Changer 🎨
      </h1>

      <p className="text-center text-lg text-gray-800">
        Click a button to change the background!
      </p>

      <div className="flex max-w-xl flex-wrap justify-center gap-3 rounded-2xl bg-white p-4 shadow-xl">
        {colors.map((item) => (
          <button
            key={item.name}
            onClick={() => setColor(item.value)}
            className="rounded-xl px-5 py-3 font-semibold text-white shadow-md transition hover:scale-105 active:scale-95"
            style={{ backgroundColor: item.value }}
          >
            {item.name}
          </button>
        ))}
      </div>

      <p className="rounded-lg bg-white/80 px-4 py-2 font-medium text-gray-800">
        Selected Color: {color}
      </p>
    </div>

  )
}

export default App
