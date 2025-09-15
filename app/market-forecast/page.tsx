"use client"

import { Navigation } from "@/components/navigation"
import { motion } from "framer-motion"
import { TrendingUp, Cloud, Thermometer, Droplets } from "lucide-react"

export default function MarketForecastPage() {
  const marketData = [
    { crop: "Wheat", price: "$245/ton", change: "+5.2%", trend: "up" },
    { crop: "Rice", price: "$420/ton", change: "-2.1%", trend: "down" },
    { crop: "Corn", price: "$180/ton", change: "+3.8%", trend: "up" },
    { crop: "Soybeans", price: "$380/ton", change: "+1.5%", trend: "up" },
  ]

  const weatherData = {
    temperature: "24°C",
    humidity: "65%",
    rainfall: "12mm",
    forecast: "Partly cloudy with light rain expected",
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Market & Weather Forecast</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with real-time market prices and weather predictions to make better farming decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Market Forecast Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Market Forecast</h2>
            </div>

            <div className="space-y-4">
              {marketData.map((item, index) => (
                <motion.div
                  key={item.crop}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.crop}</h3>
                    <p className="text-lg font-bold text-green-600">{item.price}</p>
                  </div>
                  <div className={`flex items-center ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    <span className="font-semibold">{item.change}</span>
                    <motion.div
                      animate={{ y: item.trend === "up" ? [-2, 2, -2] : [2, -2, 2] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="ml-1"
                    >
                      {item.trend === "up" ? "↗" : "↘"}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Market Insight:</strong> Wheat and corn prices are trending upward due to favorable weather
                conditions and increased demand.
              </p>
            </div>
          </motion.div>

          {/* Weather Forecast Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <Cloud className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Weather Forecast</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div
                className="bg-blue-50 p-4 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Thermometer className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Temperature</p>
                <p className="text-xl font-bold text-blue-600">{weatherData.temperature}</p>
              </motion.div>

              <motion.div
                className="bg-green-50 p-4 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-sm font-bold">
                  %
                </div>
                <p className="text-sm text-gray-600">Humidity</p>
                <p className="text-xl font-bold text-green-600">{weatherData.humidity}</p>
              </motion.div>

              <motion.div
                className="bg-indigo-50 p-4 rounded-lg text-center col-span-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Droplets className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Expected Rainfall</p>
                <p className="text-xl font-bold text-indigo-600">{weatherData.rainfall}</p>
              </motion.div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">7-Day Forecast</h3>
              <p className="text-gray-700">{weatherData.forecast}</p>
            </div>

            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Farming Tip:</strong> Light rain expected - perfect conditions for planting. Consider delaying
                harvest for 2-3 days.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
