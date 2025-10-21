"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import { TrendingUp, CalendarDays } from "lucide-react"

export default function MarketForecastPage() {
  const [cropName, setCropName] = useState("")
  const [weeksToForecast, setWeeksToForecast] = useState("4")
  const [forecastData, setForecastData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const cropOptions = ["Wheat", "Rice", "Maize", "Soybean"]

  const handleChange = (e) => {
    if (e.target.name === "cropName") {
      setCropName(e.target.value)
    } else if (e.target.name === "weeksToForecast") {
      setWeeksToForecast(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setForecastData(null)

    try {
      const response = await fetch("https://yamxxx1-BackendCropix.hf.space/forecast_market_prices/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ crop_name: cropName, weeks_to_forecast: parseInt(weeksToForecast) }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      if (data.error) {
        setError(data.error)
      } else {
        setForecastData(data)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 text-balance leading-tight">Market Price Forecast</h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
            Predict future market prices for various crops to optimize your selling strategy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="cropName">
                    Crop Name
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-green-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                    id="cropName"
                    name="cropName"
                    value={cropName}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a crop</option>
                    {cropOptions.map((crop) => (
                      <option key={crop} value={crop}>
                        {crop}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="weeksToForecast">
                    Weeks to Forecast
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-green-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                    id="weeksToForecast"
                    type="number"
                    name="weeksToForecast"
                    value={weeksToForecast}
                    onChange={handleChange}
                    min="1"
                    max="52"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base sm:text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:bg-green-400"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Forecasting...
                    </div>
                  ) : (
                    "Get Market Forecast"
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {loading && <p className="text-blue-500 text-center">Loading...</p>}
        {error && <p className="text-red-500 text-center">Error: {error}</p>}

        {forecastData && forecastData.forecast && forecastData.forecast[cropName] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Forecast for {cropName}</h2>
              </div>

              <div className="space-y-4">
                {Object.entries(forecastData.forecast[cropName]).map(([date, price]) => (
                  <div key={date} className="flex items-center justify-between p-4 bg-green-50 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-800 flex items-center">
                      <CalendarDays className="w-5 h-5 text-green-500 mr-2" />
                      {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </h3>
                    <p className="text-lg font-bold text-green-600">₹{price.toFixed(2)}/Quintal</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Market Insight:</strong> This forecast helps you anticipate price movements and plan your sales.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
}
