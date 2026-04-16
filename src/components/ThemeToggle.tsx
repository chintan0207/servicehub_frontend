/* eslint-disable react-hooks/set-state-in-effect */
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=""
    >
      {theme === "dark" ? (
        <Button variant="ghost" size="icon">
          <Moon className="h-5 w-5" />
        </Button>
      ) : (
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
