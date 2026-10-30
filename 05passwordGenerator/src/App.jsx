import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numberAllowed) {
      characters += '0123456789'
    }

    if (charAllowed) {
      characters += '!@#$%^&*()_+-=[]{}'
    }

    let generatedPassword = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length
      )

      generatedPassword += characters[randomIndex]
    }

    setPassword(generatedPassword)
  }

  const copyPassword = async () => {
    if (!password) {
      alert('Pehle password generate karo!')
      return
    }

    try {
      await navigator.clipboard.writeText(password)
      alert('Password copied!')
    } catch {
      alert('Password copy nahi ho paya.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4 text-white">
      <div className="w-full max-w-lg rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-2xl sm:p-8">
        <h1 className="mb-2 text-center text-3xl font-extrabold text-blue-400 sm:text-4xl">
          Password Generator
        </h1>

        <p className="mb-8 text-center text-gray-400">
          Create a strong and secure password 🔐
        </p>

        <label
          htmlFor="password"
          className="mb-2 block font-semibold text-gray-200"
        >
          Generated Password
        </label>

        <div className="flex gap-2">
          <input
            id="password"
            type="text"
            value={password}
            readOnly
            placeholder="Your password will appear here"
            className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-blue-500"
          />

          <button
            type="button"
            onClick={copyPassword}
            className="rounded-lg bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="length" className="font-semibold">
              Password Length
            </label>

            <span className="rounded-md bg-blue-500/20 px-3 py-1 font-bold text-blue-400">
              {length}
            </span>
          </div>

          <input
            id="length"
            type="range"
            min="6"
            max="30"
            value={length}
            onChange={(event) => setLength(Number(event.target.value))}
            className="w-full cursor-pointer accent-blue-500"
          />
        </div>

        <div className="mt-6 space-y-4">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              className="size-4 accent-blue-500"
            />
            <span>Include Numbers (0–9)</span>
          </label>

          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
              className="size-4 accent-blue-500"
            />
            <span>Include Special Characters (!@#$)</span>
          </label>
        </div>

        <button
          type="button"
          onClick={generatePassword}
          className="mt-8 w-full rounded-lg bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-700 active:scale-[0.98]"
        >
          Generate Password
        </button>

        <p className="mt-5 text-center text-xs text-gray-500">
          Built with React + Tailwind CSS v4
        </p>
      </div>
    </div>
  )
}

export default App