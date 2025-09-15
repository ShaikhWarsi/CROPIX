"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Upload, CheckCircle } from "lucide-react"

export default function DiseaseDetectionPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<{ disease: string; action: string } | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string)
        analyzeImage()
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = () => {
    setIsAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setResult({
        disease: "Early Blight",
        action: "Apply copper-based fungicide and improve air circulation around plants",
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Detect Crop Diseases</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Upload an image of your crop to get instant disease detection and treatment recommendations.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-lg border-2 border-green-200 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {!uploadedImage ? (
            <div className="text-center">
              <motion.div
                className="border-2 border-dashed border-green-300 rounded-xl p-12 hover:border-green-400 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Upload className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Crop Image</h3>
                  <p className="text-gray-600">Drag & drop or click to select an image of your crop</p>
                </label>
              </motion.div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <img
                  src={uploadedImage || "/placeholder.svg"}
                  alt="Uploaded crop"
                  className="max-w-md mx-auto rounded-lg shadow-md"
                />
              </div>

              {isAnalyzing ? (
                <motion.div className="text-center py-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full mx-auto mb-4"
                  />
                  <p className="text-lg text-gray-600">Analyzing image...</p>
                </motion.div>
              ) : result ? (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-xl p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Analysis Complete</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-900">Detected Disease: </span>
                      <span className="text-red-600 font-semibold">{result.disease}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Recommended Action: </span>
                      <span className="text-gray-700">{result.action}</span>
                    </div>
                  </div>
                </motion.div>
              ) : null}

              <div className="text-center">
                <Button
                  onClick={() => {
                    setUploadedImage(null)
                    setResult(null)
                  }}
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  Upload Another Image
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  )
}
