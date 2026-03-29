import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Home } from "lucide-react"

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold tracking-tight">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

      <p className="mt-2 max-w-md text-muted-foreground">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6">
        <Button asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
