"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { getCurrentTheme, getStoredTheme, toggleTheme, type Theme } from "@/lib/theme-utils"

export function ThemeToggle() {
 const [theme, setThemeState] = useState<Theme>("dark")

 useEffect(() => {
 // Set initial state from localStorage / DOM
 setThemeState(getStoredTheme())

 const handler = (e: Event) => {
 setThemeState((e as CustomEvent<Theme>).detail)
 }
 window.addEventListener("themechange", handler)
 return () => window.removeEventListener("themechange", handler)
 }, [])

 return (
 <button
 onClick={toggleTheme}
 className="p-2 transition-colors duration-300 ease-out text-muted-foreground hover:text-foreground"
 aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
 >
 {theme === "dark" ? (
 <Sun className="h-4 w-4" />
 ) : (
 <Moon className="h-4 w-4" />
 )}
 </button>
 )
}
