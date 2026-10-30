import { useEffect, useState } from 'react'

function App() {
  const [currencies, setCurrencies] = useState([])
  const [amount, setAmount] = useState('1')
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')

  const [convertedAmount, setConvertedAmount] = useState(null)
  const [exchangeRate, setExchangeRate] = useState(null)
  const [rateDate, setRateDate] = useState('')
  const [loadingCurrencies, setLoadingCurrencies] = useState(true)
  const [converting, setConverting] = useState(false)
  const [error, setError] = useState('')

  // API se currencies ki list lana
  useEffect(() => {
    const controller = new AbortController()

    async function fetchCurrencies() {
      try {
        setLoadingCurrencies(true)

        const response = await fetch(
          'https://api.frankfurter.dev/v2/currencies',
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error('Currencies load nahi ho sakin.')
        }

        const data = await response.json()

        setCurrencies(data.sort((a, b) =>
          a.name.localeCompare(b.name),
        ))
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Currency list load nahi hui. Internet check karein.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingCurrencies(false)
        }
      }
    }

    fetchCurrencies()

    return () => controller.abort()
  }, [])

  // Currency convert karna
  async function convertCurrency(event) {
    event.preventDefault()

    const numericAmount = Number(amount)

    if (amount.trim() === '' || !Number.isFinite(numericAmount) || numericAmount < 0) {
      setError('Please valid amount enter karein.')
      setConvertedAmount(null)
      return
    }

    setError('')
    setConverting(true)
    setConvertedAmount(null)
    setExchangeRate(null)
    setRateDate('')

    try {
      // Agar dono currencies same hain
      if (from === to) {
        setConvertedAmount(numericAmount)
        setExchangeRate(1)
        setRateDate('Same currency')
        return
      }

      const response = await fetch(
        `https://api.frankfurter.dev/v2/rate/${from}/${to}`,
      )

      if (!response.ok) {
        throw new Error('Is currency pair ka rate abhi available nahi hai.')
      }

      const data = await response.json()

      const result = numericAmount * data.rate

      setConvertedAmount(result)
      setExchangeRate(data.rate)
      setRateDate(data.date)
    } catch (err) {
      setError(
        err.message || 'Conversion nahi ho paya. Dobara try karein.',
      )
    } finally {
      setConverting(false)
    }
  }

  // From aur To currency swap karna
  function swapCurrencies() {
    setFrom(to)
    setTo(from)
    setConvertedAmount(null)
    setExchangeRate(null)
    setRateDate('')
    setError('')
  }

  // Currency ko uske symbol ke saath format karna
  function formatCurrency(value, currencyCode) {
    try {
      return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: currencyCode,
        maximumFractionDigits: 4,
      }).format(value)
    } catch {
      return `${value} ${currencyCode}`
    }
  }

  const fromCurrency = currencies.find(
    (currency) => currency.iso_code === from,
  )

  const toCurrency = currencies.find(
    (currency) => currency.iso_code === to,
  )

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl">

        {/* Header */}
        <header className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            <span>🌍</span>
            <span>Global Currency Exchange</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Currency
            <span className="text-blue-400"> Converter</span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base">
            Convert currencies around the world with exchange-rate data.
          </p>
        </header>

        {/* Main Card */}
        <section className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">

          <form onSubmit={convertCurrency}>

            {/* Amount */}
            <label
              htmlFor="amount"
              className="mb-3 block text-sm font-medium text-slate-300"
            >
              Enter Amount
            </label>

            <input
              id="amount"
              type="number"
              min="0"
              step="any"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="Enter amount"
              className="mb-6 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-4 text-xl font-semibold text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
            />

            {/* Currency selectors */}
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">

              {/* From */}
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">

                <label
                  htmlFor="fromCurrency"
                  className="mb-4 block text-sm text-slate-400"
                >
                  From Currency
                </label>

                <div className="mb-3 text-3xl">
                  {fromCurrency?.symbol || '💱'}
                </div>

                <select
                  id="fromCurrency"
                  value={from}
                  onChange={(event) => {
                    setFrom(event.target.value)
                    setConvertedAmount(null)
                    setExchangeRate(null)
                    setError('')
                  }}
                  disabled={loadingCurrencies}
                  className="w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-3 text-sm font-bold text-white outline-none focus:border-blue-400 disabled:opacity-50"
                >
                  {loadingCurrencies ? (
                    <option>Loading currencies...</option>
                  ) : (
                    currencies.map((currency) => (
                      <option
                        key={currency.iso_code}
                        value={currency.iso_code}
                      >
                        {currency.iso_code} — {currency.name}
                      </option>
                    ))
                  )}
                </select>

                <p className="mt-3 text-xs text-slate-500">
                  {fromCurrency?.name || from}
                </p>
              </div>

              {/* Swap */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={swapCurrencies}
                  aria-label="Swap currencies"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-2xl text-blue-300 transition hover:rotate-180 hover:bg-blue-500 hover:text-white active:scale-90"
                >
                  ⇄
                </button>
              </div>

              {/* To */}
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">

                <label
                  htmlFor="toCurrency"
                  className="mb-4 block text-sm text-slate-400"
                >
                  To Currency
                </label>

                <div className="mb-3 text-3xl">
                  {toCurrency?.symbol || '💱'}
                </div>

                <select
                  id="toCurrency"
                  value={to}
                  onChange={(event) => {
                    setTo(event.target.value)
                    setConvertedAmount(null)
                    setExchangeRate(null)
                    setError('')
                  }}
                  disabled={loadingCurrencies}
                  className="w-full rounded-lg border border-white/10 bg-slate-800 px-3 py-3 text-sm font-bold text-white outline-none focus:border-blue-400 disabled:opacity-50"
                >
                  {loadingCurrencies ? (
                    <option>Loading currencies...</option>
                  ) : (
                    currencies.map((currency) => (
                      <option
                        key={currency.iso_code}
                        value={currency.iso_code}
                      >
                        {currency.iso_code} — {currency.name}
                      </option>
                    ))
                  )}
                </select>

                <p className="mt-3 text-xs text-slate-500">
                  {toCurrency?.name || to}
                </p>
              </div>
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              disabled={loadingCurrencies || converting}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-900/30 transition hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {converting ? 'Converting...' : `Convert ${from} → ${to}  ↗`}
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-300"
            >
              ⚠️ {error}
            </div>
          )}

          {/* Result */}
          {convertedAmount !== null && !error && (
            <div
              aria-live="polite"
              className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.07] p-5 sm:p-6"
            >
              <p className="text-sm text-slate-400">
                Converted Amount
              </p>

              <p className="mt-3 break-words text-3xl font-black text-emerald-300 sm:text-4xl">
                {formatCurrency(convertedAmount, to)}
              </p>

              <p className="mt-3 break-words text-sm text-slate-300">
                {Number(amount).toLocaleString('en')} {from}
                {' = '}
                {formatCurrency(convertedAmount, to)}
              </p>

              {exchangeRate !== null && (
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm text-slate-400">
                    Exchange Rate
                  </p>

                  <p className="mt-2 break-words font-semibold text-white">
                    1 {from} = {exchangeRate.toLocaleString('en', {
                      maximumFractionDigits: 6,
                    })} {to}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    Rate date: {rateDate}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Footer Note */}
          <p className="mt-6 text-center text-xs leading-5 text-slate-500">
            Exchange rates are reference rates and may differ from bank,
            card, or money-transfer provider rates.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-6 text-center text-sm text-slate-500">
          Built with React + Tailwind CSS + Frankfurter API
          <p className="mt-2 text-xs">
            Crafted with ❤️ by Nazir Ansari
          </p>
        </footer>

      </div>
    </main>
  )
}

export default App