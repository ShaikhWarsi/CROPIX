"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

export default function FormPage() {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    rainfall: "",
    soilPh: "",
    temperature: "",
  })
  const [recommendation, setRecommendation] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simple logic to generate a recommendation based on inputs
    const crops = ["Rice", "Wheat", "Corn", "Soybeans", "Cotton", "Sugarcane", "Barley", "Oats"]
    const randomCrop = crops[Math.floor(Math.random() * crops.length)]

    setRecommendation(randomCrop)
    setShowResult(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Crop Recommendation
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Enter your soil and environmental data to get personalized crop recommendations
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl text-green-700">
              Step {step} of 2: {step === 1 ? "Soil Nutrients" : "Environmental Conditions"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  {/* Nitrogen Value */}
                  <div className="space-y-2">
                    <Label htmlFor="nitrogen" className="text-sm font-medium text-gray-700">
                      Nitrogen Value (N)
                    </Label>
                    <Input
                      id="nitrogen"
                      type="number"
                      placeholder="Enter Nitrogen value"
                      value={formData.nitrogen}
                      onChange={(e) => handleInputChange("nitrogen", e.target.value)}
                      className="border-green-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                      required
                    />
                  </div>

                  {/* Phosphorus Value */}
                  <div className="space-y-2">
                    <Label htmlFor="phosphorus" className="text-sm font-medium text-gray-700">
                      Phosphorus Value (P)
                    </Label>
                    <Input
                      id="phosphorus"
                      type="number"
                      placeholder="Enter Phosphorus value"
                      value={formData.phosphorus}
                      onChange={(e) => handleInputChange("phosphorus", e.target.value)}
                      className="border-green-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                      required
                    />
                  </div>

                  {/* Potassium Value */}
                  <div className="space-y-2">
                    <Label htmlFor="potassium" className="text-sm font-medium text-gray-700">
                      Potassium Value (K)
                    </Label>
                    <Input
                      id="potassium"
                      type="number"
                      placeholder="Enter Potassium value"
                      value={formData.potassium}
                      onChange={(e) => handleInputChange("potassium", e.target.value)}
                      className="border-green-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                      required
                    />
                  </div>
                  <Button type="button" onClick={handleNextStep} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base sm:text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    Next
                  </Button>
                </>
              )}

              {step === 2 && (
                <>
                  {/* Rainfall Value */}
                  <div className="space-y-2">
                    <Label htmlFor="rainfall" className="text-sm font-medium text-gray-700">
                      Rainfall Value (mm)
                    </Label>
                    <Input
                      id="rainfall"
                      type="number"
                      placeholder="Enter rainfall in mm"
                      value={formData.rainfall}
                      onChange={(e) => handleInputChange("rainfall", e.target.value)}
                      className="border-green-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                      required
                    />
                  </div>

                  {/* Soil pH */}
                  <div className="space-y-2">
                    <Label htmlFor="soilPh" className="text-sm font-medium text-gray-700">
                      Soil pH
                    </Label>
                    <Input
                      id="soilPh"
                      type="number"
                      step="0.1"
                      min="0"
                      max="14"
                      placeholder="Enter soil pH (0-14)"
                      value={formData.soilPh}
                      onChange={(e) => handleInputChange("soilPh", e.target.value)}
                      className="border-green-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                      required
                    />
                  </div>

                  {/* Temperature */}
                  <div className="space-y-2">
                    <Label htmlFor="temperature" className="text-sm font-medium text-gray-700">
                      Temperature (°C)
                    </Label>
                    <Input
                      id="temperature"
                      type="number"
                      placeholder="Enter temperature in Celsius"
                      value={formData.temperature}
                      onChange={(e) => handleInputChange("temperature", e.target.value)}
                      className="border-green-300 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="button" onClick={handlePrevStep} variant="outline" className="w-1/2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors">
                      Previous
                    </Button>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-1/2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 text-base sm:text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none"
                    >
                      {isLoading ? (
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
                          Analyzing...
                        </div>
                      ) : (
                        "Get Recommendation"
                      )}
                    </Button>
                  </div>
                </>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Results Card */}
        {showResult && (
          <Card className="mt-8 border-2 border-green-300 bg-green-50 shadow-lg animate-in slide-in-from-bottom-4 duration-500">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                  Recommended Crop: {recommendation}
                </h3>
                <p className="text-green-700 leading-relaxed mb-4">
                  Based on your soil and environmental conditions, {recommendation.toLowerCase()} would be an excellent
                  choice for your farm.
                </p>
                <Button
                  onClick={() => setShowResult(false)}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors"
                >
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
