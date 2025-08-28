"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Moon, Sun, Trophy, Search, Star, Sparkles, History, Filter } from "lucide-react"

export default function HomePage() {
  const [isDark, setIsDark] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterClube, setFilterClube] = useState("todos")
  const [filterAno, setFilterAno] = useState("todos")
  const [filterFabricante, setFilterFabricante] = useState("todos")

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const camisas = [
    {
      id: 1,
      clube: "Flamengo",
      ano: "1981",
      fabricante: "Adidas",
      jogadores: "Zico, Júnior, Leandro",
      destaque: true,
      historia: "A camisa do tri mundial do Flamengo, usada na conquista da Libertadores e Mundial de Clubes",
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flamengo_1981.jpg-cgUqiip15CBvUMkczKs0ymkTeHwwv1.jpeg",
    },
    {
      id: 2,
      clube: "Brasil",
      ano: "1970",
      fabricante: "Topper",
      jogadores: "Pelé, Jairzinho, Rivelino",
      destaque: true,
      historia: "A lendária camisa amarela da Seleção Brasileira tricampeã mundial no México",
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brasil_1970.jpg-6WwdX5dOtkFXqCd3CahZcLXItb5tJt.jpeg",
    },
    {
      id: 3,
      clube: "Argentina",
      ano: "1986",
      fabricante: "Le Coq Sportif",
      jogadores: "Maradona, Valdano, Burruchaga",
      destaque: false,
      historia: "A camisa da Copa do Mundo do México, eternizada por Maradona",
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/argentina_1986.jpg-Cj41dDd2qwIwZN6yvAhnhqCwWuRaT5.jpeg",
    },
    {
      id: 4,
      clube: "Milan",
      ano: "1989",
      fabricante: "Adidas",
      jogadores: "Van Basten, Gullit, Rijkaard",
      destaque: false,
      historia: "O uniforme do Milan dos holandeses, uma das maiores equipes da história",
      imagem: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/milan_1989-1GP1HZjmdmAkxgj8G0gqQgyxvpKdeI.png",
    },
    {
      id: 5,
      clube: "Barcelona",
      ano: "2009",
      fabricante: "Nike",
      jogadores: "Messi, Xavi, Iniesta",
      destaque: false,
      historia: "A camisa do Barcelona do sexteto histórico de Guardiola",
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/barcelona_2009-Y9zDD8ANZwTj6AolpSiQPJS5HmniHF.png",
    },
    {
      id: 6,
      clube: "Real Madrid",
      ano: "2002",
      fabricante: "Adidas",
      jogadores: "Zidane, Ronaldo, Figo",
      destaque: false,
      historia: "O uniforme dos Galácticos, uma das formações mais estreladas do futebol",
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RealMadrid_2002.jpg-rEIMla1mfz4Q8jYZpFEoD3i2v4a0VQ.jpeg",
    },
    {
      id: 7,
      clube: "Alemanha",
      ano: "1990",
      fabricante: "Adidas",
      jogadores: "Matthäus, Klinsmann, Brehme",
      destaque: false,
      historia: "A camisa da Alemanha campeã mundial na Itália",
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alemanha_1990.jpg-dDwdRGWr1x6suGpyS5cphpho7obSaZ.jpeg",
    },
    {
      id: 8,
      clube: "Holanda",
      ano: "1988",
      fabricante: "Adidas",
      jogadores: "Van Basten, Gullit, Rijkaard",
      destaque: false,
      historia: "O uniforme laranja da Holanda campeã da Eurocopa",
      imagem:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/holanda_1988.jpg-dMo8nX6v0Wxc84nP2A2GzYRcKa9tEK.jpeg",
    },
  ]

  const filteredCamisas = camisas.filter((camisa) => {
    const matchesSearch =
      camisa.clube.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camisa.jogadores.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camisa.historia.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesClube = filterClube === "todos" || camisa.clube === filterClube
    const matchesAno = filterAno === "todos" || camisa.ano === filterAno
    const matchesFabricante = filterFabricante === "todos" || camisa.fabricante === filterFabricante

    return matchesSearch && matchesClube && matchesAno && matchesFabricante
  })

  const clubes = [...new Set(camisas.map((c) => c.clube))]
  const anos = [...new Set(camisas.map((c) => c.ano))].sort()
  const fabricantes = [...new Set(camisas.map((c) => c.fabricante))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-red-950 dark:via-black dark:to-red-950 text-foreground transition-all duration-500">
      {/* Header */}
      <header className="border-b border-red-200/50 dark:border-red-800/50 bg-white/90 dark:bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  ArtVision AI
                </h1>
                <p className="text-xs text-muted-foreground font-medium">O Manto Sagrado</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6">
                <Link
                  href="/analisar"
                  className="text-sm font-medium hover:text-red-600 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Analisar com IA
                </Link>
              </nav>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950 bg-transparent rounded-xl"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Museu Section */}
      <main className="container mx-auto px-6">
        <section className="py-20 text-center space-y-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-950/50 text-red-600 px-4 py-2 rounded-full text-sm font-medium border border-red-200 dark:border-red-800">
              <History className="h-4 w-4" />
              Museu Virtual Interativo
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              O Museu dos
              <span className="block bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
                Mantos Sagrados
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Explore a história através das camisas mais icônicas do futebol mundial.
              <span className="block mt-2 text-lg">Cada manto conta uma história de glória, paixão e tradição.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/analisar">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Search className="mr-2 h-5 w-5" />
                Analisar com IA
              </Button>
            </Link>
          </div>
        </section>

        <div className="flex items-center justify-center py-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 dark:via-red-800 to-transparent"></div>
          <div className="px-6">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-200 dark:via-red-800 to-transparent"></div>
        </div>

        <section className="py-16">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Coleção de <span className="text-red-600">Mantos Históricos</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Cada camisa representa um momento único na história do futebol mundial, preservando memórias de conquistas
              inesquecíveis
            </p>
          </div>
          {/* Busca e Filtro */}
          <div className="mb-12 space-y-6">
            <div className="w-full flex flex-col gap-4 items-center justify-center 
            xl:flex-row xl:gap-8 xl:items-center xl:justify-center
            max-w-6xl mx-auto
            ">
            {/* Campo de busca */}
            <div className="relative w-full xl:flex-[2] max-w-xl flex-shrink-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
              placeholder="Buscar por clube, jogador ou história..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-xl border-red-200 dark:border-red-800 focus:border-red-500 dark:focus:border-red-400 w-full"
              />
            </div>

            {/* Filtros */}
            <div className="flex flex-col w-full xl:flex-row xl:items-center xl:gap-4 items-center gap-3 justify-center xl:flex-[1]">
              <div className="flex items-center gap-2 mb-2 xl:mb-0">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filtrar por:</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto justify-center">
              <Select value={filterClube} onValueChange={setFilterClube}>
                <SelectTrigger className="w-full sm:w-40 h-12 rounded-xl border-red-200 dark:border-red-800">
                <SelectValue placeholder="Clube" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="todos">Todos os clubes</SelectItem>
                {clubes.map((clube) => (
                  <SelectItem key={clube} value={clube}>
                  {clube}
                  </SelectItem>
                ))}
                </SelectContent>
              </Select>

              <Select value={filterAno} onValueChange={setFilterAno}>
                <SelectTrigger className="w-full sm:w-32 h-12 rounded-xl border-red-200 dark:border-red-800">
                <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="todos">Todos os anos</SelectItem>
                {anos.map((ano) => (
                  <SelectItem key={ano} value={ano}>
                  {ano}
                  </SelectItem>
                ))}
                </SelectContent>
              </Select>

              <Select value={filterFabricante} onValueChange={setFilterFabricante}>
                <SelectTrigger className="w-full sm:w-40 h-12 rounded-xl border-red-200 dark:border-red-800">
                <SelectValue placeholder="Fabricante" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="todos">Todos fabricantes</SelectItem>
                {fabricantes.map((fabricante) => (
                  <SelectItem key={fabricante} value={fabricante}>
                  {fabricante}
                  </SelectItem>
                ))}
                </SelectContent>
              </Select>
              </div>
            </div>
            </div>

            <div className="text-center mt-2">
            <p className="text-sm text-muted-foreground">
              {filteredCamisas.length} {filteredCamisas.length === 1 ? "camisa encontrada" : "camisas encontradas"}
            </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCamisas.map((camisa) => (
              <Card
                key={camisa.id}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 rounded-2xl ${
                  camisa.destaque
                    ? "border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 to-white dark:from-red-950/50 dark:to-black shadow-lg"
                    : "border-border hover:border-red-200 dark:hover:border-red-800 hover:shadow-xl"
                } hover:-translate-y-2`}
              >
                <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                  {camisa.destaque && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Star className="h-3 w-3 fill-current" />
                        Lendário
                      </div>
                    </div>
                  )}
                  <img
                    src={camisa.imagem || "/placeholder.svg"}
                    alt={`Camisa ${camisa.clube} ${camisa.ano}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xl text-balance">{camisa.clube}</h4>
                    <span className="text-sm font-bold text-red-600 bg-red-50 dark:bg-red-950 px-3 py-1 rounded-full">
                      {camisa.ano}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{camisa.historia}</p>
                  <div className="text-sm text-muted-foreground space-y-2 pt-2 border-t border-border">
                    <p>
                      <span className="font-semibold text-foreground">Fabricante:</span> {camisa.fabricante}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">Ídolos:</span> {camisa.jogadores}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCamisas.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Nenhuma camisa encontrada</h4>
              <p className="text-muted-foreground">Tente ajustar os filtros ou termo de busca</p>
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-red-200/50 dark:border-red-800/50 bg-white/70 dark:bg-black/70 backdrop-blur-md mt-20">
        <div className="container mx-auto px-6 py-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <Trophy className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              ArtVision AI
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2025 ArtVision AI - O Manto Sagrado. Preservando a história do futebol.
          </p>
        </div>
      </footer>
    </div>
  )
}
