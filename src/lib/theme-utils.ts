export type Theme = "light" | "dark"

export function getStoredTheme(): Theme {
 if (typeof window === "undefined") return "dark"
 try {
 const stored = localStorage.getItem("theme")
 if (stored === "light" || stored === "dark") return stored
 } catch {}
 return "dark"
}

export function setTheme(theme: Theme) {
 const root = document.documentElement
 root.classList.remove("light", "dark")
 root.classList.add(theme)
 try {
 localStorage.setItem("theme", theme)
 } catch {}
 const meta = document.querySelector('meta[name="color-scheme"]')
 if (meta) meta.setAttribute("content", theme)
 window.dispatchEvent(new CustomEvent("themechange", { detail: theme }))
}

export function toggleTheme(): Theme {
 const current = getCurrentTheme()
 const next = current === "dark" ? "light" : "dark"
 setTheme(next)
 return next
}

export function getCurrentTheme(): Theme {
 if (typeof window === "undefined") return "dark"
 return document.documentElement.classList.contains("dark") ? "dark" : "light"
}
