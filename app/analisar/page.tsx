"use client"

import type React from "react"

import Link from "next/link"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun, ArrowLeft, Upload, Sparkles, CheckCircle } from "lucide-react"

export default function AnalisarPage() {
  const [isDark, setIsDark] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<{
    clube: string
    ano: string
    fabricante: string
    confianca: number
  } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setAnalysisResult(null)
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      setUploadedFile(file)
      setAnalysisResult(null)
    }
  }

  const analyzeShirt = async () => {
    if (uploadedFile) {
      setIsAnalyzing(true)
      // Simulação de análise com delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setAnalysisResult({
        clube: "Flamengo",
        ano: "1981",
        fabricante: "Adidas",
        confianca: 94,
      })
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-red-950 dark:via-black dark:to-red-950 text-foreground transition-all duration-500">
      {/* Header */}
      <header className="border-b border-red-200 dark:border-red-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="hover:bg-red-50 dark:hover:bg-red-950">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  Analisador de Camisas
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950 bg-transparent"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-balance mb-4">
            Descubra a <span className="text-red-600">História</span> da Sua Camisa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Use nossa IA avançada para identificar clube, ano e fabricante de qualquer camisa de futebol
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Local do Upload */}
          <Card className="border-2 border-dashed border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-white dark:from-red-950/50 dark:to-black">
            <CardContent className="p-8">
              <div
                className="border-2 border-dashed border-red-300 dark:border-red-700 rounded-xl p-12 text-center cursor-pointer hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 hover:bg-red-50/50 dark:hover:bg-red-950/50"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2">
                      {uploadedFile ? uploadedFile.name : "Clique ou arraste sua imagem aqui"}
                    </p>
                    <p className="text-sm text-muted-foreground">Formatos aceitos: JPG, PNG, GIF (máx. 10MB)</p>
                  </div>
                </div>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </div>

              <Button
                onClick={analyzeShirt}
                disabled={!uploadedFile || isAnalyzing}
                className="w-full mt-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 text-lg"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                    Analisando...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Analisar Camisa
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Resultado */}
          {analysisResult && (
            <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-black">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">Análise Concluída</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white dark:bg-black rounded-lg border border-green-200 dark:border-green-800">
                    <span className="font-medium text-muted-foreground">Clube/Seleção:</span>
                    <span className="font-bold text-lg">{analysisResult.clube}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white dark:bg-black rounded-lg border border-green-200 dark:border-green-800">
                    <span className="font-medium text-muted-foreground">Ano:</span>
                    <span className="font-bold text-lg">{analysisResult.ano}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white dark:bg-black rounded-lg border border-green-200 dark:border-green-800">
                    <span className="font-medium text-muted-foreground">Fabricante:</span>
                    <span className="font-bold text-lg">{analysisResult.fabricante}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white dark:bg-black rounded-lg border border-green-200 dark:border-green-800">
                    <span className="font-medium text-muted-foreground">Confiança:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000"
                          style={{ width: `${analysisResult.confianca}%` }}
                        />
                      </div>
                      <span className="font-bold text-lg text-green-600">{analysisResult.confianca}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <footer className="border-t border-red-200 dark:border-red-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-muted-foreground">
          <p>© 2025 ArtVision AI - O Manto Sagrado. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
